if (window.top !== window.self) { document.documentElement.style.display='none'; try { window.top.location.href = window.self.location.href; } catch(e) {} throw new Error('framed'); }
{
const RATE = 1.33, MIN_FARE = 10, FEE = 3;
const BOOK = 'https://ahmedholiel-rgb.github.io/booking/';
const BASEL = {lat:47.5582, lon:7.5878}, EAP = {lat:47.5964, lon:7.5291};
const ZONE_R = 3.0, ROAD = 1.3;
const HOT_PLZ = [4030,4102,4103,4123,4125,4126,4127,4132,4142,4153];
const $ = id => document.getElementById(id);
let req = null, autoBack = NaN, replyLang = 'DE';
function setLang(l){ replyLang=l; $('lgDE').setAttribute('aria-pressed',String(l==='DE')); $('lgEN').setAttribute('aria-pressed',String(l==='EN')); preview(); }

function num(v){ if (v==null) return NaN; const t=String(v).trim().replace(',','.'); if(!t) return NaN; const n=Number(t); return (isFinite(n)&&n>=0)?n:NaN; }
function hav(a,b){ const r=Math.PI/180,dl=(b.lat-a.lat)*r,dn=(b.lon-a.lon)*r; const x=Math.sin(dl/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dn/2)**2; return 2*6371*Math.asin(Math.sqrt(x)); }
const r1 = v => Math.round(v*10)/10;
const chf = v => v.toFixed(2);

function parse(text){
  const r = {name:'',phone:'',date:'',time:'',from:'',to:'',lang:'DE',pax:'',bags:0,seats:0,wc:false,note:'',km:NaN,min:NaN,dest:null,plz:0,foreign:false};
  (text||'').replace(/\r/g,'').split('\n').forEach(raw=>{
    const line = raw.trim(), c = line.indexOf(':');
    if (c<=0) return;
    const k = line.slice(0,c).trim().toLowerCase(), v = line.slice(c+1).trim();
    if (k==='name') r.name=v;
    else if (k==='telefon'||k==='phone') r.phone=v;
    else if (k==='datum'||k==='date') r.date=v;
    else if (k==='zeit'||k==='time') r.time=v;
    else if (k==='personen') r.pax=v;
    else if (k==='gepäck'||k==='gepack') r.bags=parseInt(v,10)||0;
    else if (k==='kindersitze'||k==='kindersitz') { let n=0; (v.match(/(\d+)\s*[×x]/g)||[]).forEach(m=>n+=parseInt(m,10)||0); if(!n) n=parseInt(v,10)||0; r.seats=n; }
    else if (k==='rollstuhl'||k==='wheelchair') r.wc=/^(j|y)/i.test(v);
    else if (k==='von'||k==='from') r.from=v;
    else if (k==='nach'||k==='to') r.to=v;
    else if (k==='bemerkung') r.note=v;
    else if (k==='sprache') r.lang=/^en/i.test(v)?'EN':'DE';
    else if (k==='strecke') { const m=v.match(/([0-9]+(?:[.,][0-9]+)?)\s*km/i); if(m) r.km=num(m[1]); const mm=v.match(/(\d+)\s*Min/i); if(mm) r.min=+mm[1]; }
    else if (k==='karte'||k==='route') { const m=v.match(/destination=(-?[0-9.]+),(-?[0-9.]+)/); if(m) r.dest={lat:+m[1],lon:+m[2]}; }
  });
  const pm = [...r.to.matchAll(/(?<![0-9.])([0-9]{4,5})(?=\s+\p{L})/gu)];
  if (pm.length) r.plz = +pm[pm.length-1][1];
  r.foreign = /france|frankreich|deutschland|germany|, fr$|, de$/i.test(r.to);
  return r;
}
function inHot(r){
  if (r.dest && hav(r.dest,EAP) < 1.5) return true;
  if (!r.foreign && r.plz) return (r.plz>=4001 && r.plz<=4059) || HOT_PLZ.includes(r.plz);
  if (r.dest) return hav(r.dest,BASEL)*ROAD <= ZONE_R+1.5;
  return false;
}
function wayBack(r){
  if (inHot(r)) return 0;
  if (!r.dest) return NaN;
  return r1(Math.max(0, hav(r.dest,BASEL)*ROAD - ZONE_R));
}

function load(text){
  const r = parse(text);
  if (!r.to && isNaN(r.km)) { $('reqWarn').textContent='This does not look like a booking request.'; return; }
  req = r; $('reqWarn').textContent='';
  const rows = [['Name',r.name],['Phone',r.phone],['When',(r.date+'  '+r.time).trim()],['People',r.pax],['From',r.from],['To',r.to],
    ['Trip', isNaN(r.km)?'':r.km.toFixed(1)+' km'+(isNaN(r.min)?'':' / '+r.min+' min')],
    ['Extras',[r.bags?r.bags+' bag'+(r.bags>1?'s':''):'',r.seats?r.seats+' child seat'+(r.seats>1?'s':''):'',r.wc?'wheelchair':''].filter(Boolean).join(', ')],
    ['Note',r.note]].filter(x=>x[1]);
  const dl = $('req'); dl.textContent='';
  rows.forEach(([k,v])=>{ const dt=document.createElement('dt'); dt.textContent=k; const dd=document.createElement('dd'); dd.textContent=v; dl.append(dt,dd); });
  $('empty').hidden = true;
  $('trip').value = isNaN(r.km)?'':r.km.toFixed(1);
  const hot = inHot(r); autoBack = wayBack(r);
  $('hot').checked = hot;
  $('back').value = hot ? '0' : (isNaN(autoBack)?'':autoBack.toFixed(1));
  $('bags').value = r.bags; $('seats').value = r.seats; $('wc').checked = r.wc;
  $('pick').value = '';
  setLang(r.lang==='EN'?'EN':'DE');
  hotText(); calc();
  setTimeout(()=>$('pick').focus(),150);
}
function hotText(){
  $('hotTxt').textContent = $('hot').checked ? 'Way back counts 0 km'
    : (isNaN(autoBack) ? 'Outside: type the km back to the hot zone' : 'Outside: about '+autoBack.toFixed(1)+' km back (estimate)');
}

let priceTouched = false;
function calc(){
  const p=num($('pick').value), t=num($('trip').value);
  let b=num($('back').value); if ($('hot').checked && isNaN(b)) b=0;
  const bags=Math.min(20,Math.round(num($('bags').value)||0)), seats=Math.min(10,Math.round(num($('seats').value)||0)), wc=$('wc').checked;
  if (isNaN(p)||isNaN(t)||isNaN(b)) {
    $('total').textContent='CHF –'; $('bd').textContent = isNaN(p)?'Type the km to pickup.':'Fill in all km.';
    if(!priceTouched) $('price').value=''; preview(); return;
  }
  const km = r1(p+t+b);
  const kmFare = Math.max(MIN_FARE, Math.ceil(RATE*(p+t+b)*2-1e-9)/2);
  const extras = bags*FEE + seats*FEE + (wc?FEE:0);
  const total = kmFare + extras;
  let bd = p.toFixed(1)+' + '+t.toFixed(1)+' + '+b.toFixed(1)+' = '+km.toFixed(1)+' km × 1.33';
  bd += (RATE*km < MIN_FARE) ? '  →  minimum CHF 10' : ' = CHF '+chf(kmFare);
  if (bags) bd += '\n+ '+bags+' bag'+(bags>1?'s':'')+' × 3 = CHF '+chf(bags*FEE);
  if (seats) bd += '\n+ '+seats+' child seat'+(seats>1?'s':'')+' × 3 = CHF '+chf(seats*FEE);
  if (wc) bd += '\n+ wheelchair CHF 3.00';
  $('total').textContent = 'CHF '+chf(total); $('bd').textContent = bd;
  if (!priceTouched) $('price').value = chf(total);
  preview();
}
['pick','trip','back','bags','seats'].forEach(id=>$(id).addEventListener('input',()=>{ priceTouched=false; calc(); }));
['wc'].forEach(id=>$(id).addEventListener('change',()=>{ priceTouched=false; calc(); }));
$('hot').addEventListener('change',()=>{ $('back').value = $('hot').checked ? '0' : (isNaN(autoBack)?'':autoBack.toFixed(1)); hotText(); priceTouched=false; calc(); });
$('price').addEventListener('input',()=>{ priceTouched=true; preview(); });

function priceNow(){ const v=num($('price').value); return isNaN(v)?null:chf(v); }
function acceptMsg(){
  const r=req||{}, en=replyLang==='EN', pr=priceNow(), name=r.name?' '+r.name:'';
  if (en) return 'Hello'+name+',\n\nthank you for your request. Your ride'+(r.date?' on '+r.date:'')+(r.time?' at '+r.time:'')+' from '+(r.from||'')+' to '+(r.to||'')+' costs CHF '+pr+'.\nPayment: TWINT to 076 467 22 93 or cash.\n\nPlease reply "Yes" to confirm the booking.\n\nKind regards\nAhmed Holiel\n\nBook directly next time: '+BOOK;
  return 'Guten Tag'+name+'\n\nVielen Dank für Ihre Anfrage. Ihre Fahrt'+(r.date?' am '+r.date:'')+(r.time?' um '+r.time:'')+' von '+(r.from||'')+' nach '+(r.to||'')+' kostet CHF '+pr+'.\nZahlung: TWINT an 076 467 22 93 oder bar.\n\nBitte bestätigen Sie die Buchung mit «Ja».\n\nFreundliche Grüsse\nAhmed Holiel\n\nNächstes Mal direkt buchen: '+BOOK;
}
function declineMsg(){
  const r=req||{}, en=replyLang==='EN', name=r.name?' '+r.name:'';
  if (en) return 'Hello'+name+',\n\nthank you for your request. Sorry, there are no pickups available'+(r.date?' on '+r.date:'')+(r.time?' at '+r.time:'')+'.\n\nKind regards\nAhmed Holiel\n\nAnother time? Book here: '+BOOK;
  return 'Guten Tag'+name+'\n\nVielen Dank für Ihre Anfrage. Leider habe ich'+(r.date?' am '+r.date:'')+(r.time?' um '+r.time:'')+' keine Fahrt frei.\n\nFreundliche Grüsse\nAhmed Holiel\n\nGerne ein anderes Mal: '+BOOK;
}
function preview(){ $('preview').textContent = (req && priceNow()) ? acceptMsg() : ''; $('accept').disabled = !(req && priceNow()); $('decline').disabled = !req; }
function digits(phone){
  let s=(phone||'').replace(/[^0-9+]/g,''); if(s.startsWith('00')) s='+'+s.slice(2); if(/^0\d{9}$/.test(s)) s='+41'+s.slice(1);
  return /^\+\d{9,15}$/.test(s) ? s.slice(1) : '';
}
const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
function send(text, sms){
  if (!req) return;
  const d = digits(req.phone);
  if (!d) { $('sendWarn').textContent='No valid phone number in the request.'; return; }
  $('sendWarn').textContent='';
  location.href = sms ? 'sms:+'+d+(isIOS?'&':'?')+'body='+encodeURIComponent(text) : 'https://wa.me/'+d+'?text='+encodeURIComponent(text);
}
$('accept').addEventListener('click',()=>{ if(priceNow()) send(acceptMsg(),false); });
$('decline').addEventListener('click',()=>send(declineMsg(),false));
$('smsOk').addEventListener('click',e=>{ e.preventDefault(); if(priceNow()) send(acceptMsg(),true); });
$('smsNo').addEventListener('click',e=>{ e.preventDefault(); send(declineMsg(),true); });

$('paste').addEventListener('click', async ()=>{
  try { const t = await navigator.clipboard.readText(); if (t && t.trim()) { load(t); return; } } catch(e) {}
  $('manualBox').open = true; $('manual').focus();
  $('reqWarn').textContent = 'Could not read the clipboard. Paste the message below.';
});
$('read').addEventListener('click',()=>load($('manual').value));
$('lgDE').addEventListener('click',()=>setLang('DE'));
$('lgEN').addEventListener('click',()=>setLang('EN'));

// text handed over by the iPhone shortcut: fare.html#t=<url-encoded text>
function fromHash(){
  const h = location.hash;
  if (h.startsWith('#t=')) {
    let t=''; try { t = decodeURIComponent(h.slice(3)); } catch(e) { t = h.slice(3); }
    history.replaceState(null,'',location.pathname);
    if (t.trim()) load(t);
  }
}
window.addEventListener('hashchange', fromHash);
fromHash(); preview();
window.__fare = {parse, inHot, wayBack};
}
