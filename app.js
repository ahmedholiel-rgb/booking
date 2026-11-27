if (window.top !== window.self) { document.documentElement.style.display='none'; try { window.top.location.href = window.self.location.href; } catch(e) {} throw new Error('framed'); }
{
const WA_NUMBER = '41764672293';
const BASE = [47.5596, 7.5886];
const BBOX = '6.9,47.15,8.9,47.95';
const T = {
  de:{tag:'Personentransport · Basel & Region',h1:'Ihre Fahrt anfragen',sub:'Start und Ziel eingeben, Zeit wählen, senden. Sie erhalten den Preis per WhatsApp oder SMS.',where:'Wohin geht es?',whenh:'Wann und wie viele?',from:'Von',to:'Nach',ph:'Adresse, Ort oder Bahnhof',here:'Hier',clear:'Leeren',swap:'Start und Ziel tauschen',date:'Datum',time:'Zeit',pax:'Personen',bags:'Gepäckstücke',wc:'Rollstuhl',wcd:'Faltbarer Rollstuhl, kommt in den Kofferraum. Der Fahrgast sitzt im Auto.',saveh:'Für das nächste Mal',savep:'Speichern Sie den QR-Code als Foto. So finden Sie diese Seite jederzeit wieder.',savebtn:'QR als Foto speichern',savetip:'iPhone: Bild lange drücken → «Zu Fotos hinzufügen». Android: Bild lange drücken → «Bild herunterladen».',dph:'Datenschutz',dpp:'Ihre Angaben werden auf dieser Seite nicht gespeichert. Sie gehen nur an Ihren Fahrer und werden nur für Ihre Fahrt verwendet, gemäss Schweizer Datenschutzgesetz (DSG).',seats:'Kindersitz',seatshint:'Für Kinder unter 12 Jahren, die kleiner als 150 cm sind.',s1:'Babyschale',s1d:'bis ca. 1 Jahr',s2:'Kindersitz',s2d:'ca. 1 bis 4 Jahre',s3:'Sitzerhöhung',s3d:'ca. 4 bis 12 Jahre',eSeats:'Mehr Kindersitze als Personen. Bitte die Personenzahl inkl. Kinder angeben.',you:'Ihre Angaben',name:'Name',phone:'Telefonnummer',note:'Bemerkung (optional)',noteph:'z. B. Flugnummer, Hausnummer',sendwa:'Per WhatsApp senden',sendsms:'Per SMS senden',t1:'Preis kommt vor der Fahrt. Verbindlich erst, wenn Sie ihn bestätigen.',t2:'Fahrer mit Bewilligung für berufsmässigen Personentransport (Code 121).',t3:'Elektroauto Toyota bZ4X, bis 4 Personen.',t4:'Ihre Angaben werden nicht gespeichert. Sie gehen nur an Ahmed.',imp:'Impressum & Datenschutz',priv:'Diese Seite speichert keine Personendaten und setzt keine Cookies. Ihre Anfrage (Name, Telefon, Route, Datum) wird erst übermittelt, wenn Sie sie selbst per WhatsApp oder SMS senden; dabei gelten die Datenschutzregeln von WhatsApp bzw. Ihres Telefonanbieters. Für die Adresssuche und die Routenlänge werden Ihre Eingaben an OpenStreetMap-Dienste (Photon von Komoot, OSRM) gesendet; das Titelbild wird von Unsplash geladen. Ahmed Holiel verwendet Ihre Daten nur für Ihre Fahrt und löscht sie, wenn sie dafür nicht mehr nötig sind. Sie können jederzeit Auskunft oder Löschung verlangen: 076 467 22 93.',nosum:'Start und Ziel wählen',min:'Fahrzeit',approx:'ca., geschätzt',eRoute:'Bitte Start und Ziel wählen.',eSame:'Start und Ziel sind gleich.',eWhen:'Bitte ein Datum und eine Zeit in der Zukunft wählen.',eName:'Bitte Ihren Namen eingeben.',ePhone:'Bitte eine gültige Telefonnummer eingeben.',pickFrom:'Start auf der Karte gesetzt',pickTo:'Ziel auf der Karte gesetzt',noRes:'Kein Ort gefunden',offline:'Keine Verbindung. Bitte später nochmals versuchen.',gpsNo:'Standort nicht verfügbar',opened:'WhatsApp wird geöffnet …',openedS:'SMS wird geöffnet …',pin:'Mein Standort',nomap:'Karte nicht verfügbar. Bitte Adresse eintippen.'},
  en:{tag:'Passenger transport · Basel & region',h1:'Request your ride',sub:'Enter pickup and destination, set the time, send. You get the price by WhatsApp or SMS.',where:'Where to?',whenh:'When and how many?',from:'From',to:'To',ph:'Address, place or station',here:'Here',clear:'Clear',swap:'Swap pickup and destination',date:'Date',time:'Time',pax:'Passengers',bags:'Bags',wc:'Wheelchair',wcd:'Folding wheelchair, goes in the boot. The passenger sits in the car.',saveh:'For next time',savep:'Save the QR code as a photo, so you can always find this page again.',savebtn:'Save QR as photo',savetip:'iPhone: long-press the picture → «Add to Photos». Android: long-press the picture → «Download image».',dph:'Data protection',dpp:'Your details are not stored on this page. They go only to your driver and are used only for your ride, in line with the Swiss Data Protection Act (FADP).',seats:'Child seat',seatshint:'For children under 12 who are shorter than 150 cm.',s1:'Infant carrier',s1d:'up to about 1 year',s2:'Child seat',s2d:'about 1 to 4 years',s3:'Booster seat',s3d:'about 4 to 12 years',eSeats:'More child seats than passengers. Please count all passengers, children included.',you:'Your details',name:'Name',phone:'Phone number',note:'Note (optional)',noteph:'e.g. flight number, house number',sendwa:'Send via WhatsApp',sendsms:'Send via SMS',t1:'You get the price before the ride. It is binding only once you confirm it.',t2:'Driver licensed for professional passenger transport (code 121).',t3:'Electric Toyota bZ4X, up to 4 passengers.',t4:'Your details are not stored. They go only to Ahmed.',imp:'Legal notice & privacy',priv:'This page stores no personal data and sets no cookies. Your request (name, phone, route, date) is only sent when you send it yourself by WhatsApp or SMS; the privacy rules of WhatsApp or your phone provider apply. For address search and route length, your input is sent to OpenStreetMap services (Photon by Komoot, OSRM); the header photo is loaded from Unsplash. Ahmed Holiel uses your data only for your ride and deletes it when it is no longer needed. You can ask for information or deletion at any time: 076 467 22 93.',nosum:'Choose pickup and destination',min:'driving time',approx:'approx., estimated',eRoute:'Please choose pickup and destination.',eSame:'Pickup and destination are the same.',eWhen:'Please choose a date and time in the future.',eName:'Please enter your name.',ePhone:'Please enter a valid phone number.',pickFrom:'Pickup set on the map',pickTo:'Destination set on the map',noRes:'No place found',offline:'No connection. Please try again later.',gpsNo:'Location not available',opened:'Opening WhatsApp …',openedS:'Opening SMS …',pin:'My location',nomap:'Map not available. Please type the address.'}
};
const PRESETS = [
  {de:'Basel SBB',en:'Basel SBB',lat:47.5476,lon:7.5897,addr:'Centralbahnplatz, 4051 Basel',pc:'4051',town:'Basel'},
  {de:'EuroAirport',en:'EuroAirport',lat:47.5964,lon:7.5291,addr:'Flughafen Basel-Mulhouse, 4030 Basel',pc:'4030',town:'Basel'},
  {de:'Messe Basel',en:'Messe Basel',lat:47.5627,lon:7.6005,addr:'Messeplatz, 4058 Basel',pc:'4058',town:'Basel'},
  {de:'Badischer Bf',en:'Badischer Bf',lat:47.5672,lon:7.6077,addr:'Badischer Bahnhof, 4058 Basel',pc:'4058',town:'Basel'},
  {de:'Flughafen Zürich',en:'Zurich Airport',lat:47.4505,lon:8.5622,addr:'Flughafen Zürich, 8058 Kloten',pc:'8058',town:'Kloten'}
];
const $ = id => document.getElementById(id);
let lang = 'de';
try { const s = localStorage.getItem('ah-lang'); if (s === 'en' || s === 'de') lang = s; else if ((navigator.language||'de').slice(0,2) !== 'de') lang = 'en'; } catch(e) {}
const t = k => (T[lang] && T[lang][k]) || T.de[k] || k;
const st = { from:null, to:null, active:'from', route:null, pax:1, bag:0, sb:0, sk:0, sh:0 };
function esc(s){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

let toastT;
function toast(msg){ const el=$('toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('show'),2600); }

// ---------- (no map) ----------
function drawMarkers(){}
function drawRoute(){}

// ---------- language ----------
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll('[data-tp]').forEach(el => { el.placeholder = t(el.dataset.tp); });
  document.querySelectorAll('[data-ta]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.ta)); });
  $('lg-de').setAttribute('aria-pressed', String(lang==='de')); $('lg-en').setAttribute('aria-pressed', String(lang==='en'));
  $('chips').innerHTML = PRESETS.map((p,i)=>'<button type="button" data-i="'+i+'">'+esc(p[lang])+'</button>').join('');
  document.title = lang==='de' ? 'Fahrt buchen – Ahmed Holiel Personentransport' : 'Book a ride – Ahmed Holiel passenger transport';
  renderSum(); clearErrors();
}
function setLang(l){ lang=l; try{localStorage.setItem('ah-lang',l)}catch(e){} applyLang(); }
$('lg-de').addEventListener('click',()=>setLang('de'));
$('lg-en').addEventListener('click',()=>setLang('en'));

// ---------- fetch helper ----------
async function getJSON(url, ms, outer){
  const ctl = new AbortController(); const tm = setTimeout(()=>ctl.abort(), ms||7000);
  if (outer) outer.addEventListener('abort',()=>ctl.abort());
  try { const r = await fetch(url,{signal:ctl.signal}); if(!r.ok) throw new Error('http '+r.status); return await r.json(); }
  finally { clearTimeout(tm); }
}
function placeFrom(f){
  const p = f.properties||{}, c = f.geometry && f.geometry.coordinates;
  if (!c) return null;
  const street = [p.street, p.housenumber].filter(Boolean).join(' ');
  const town = p.city || p.town || p.village || p.district || p.county || '';
  const pc = p.postcode || '';
  const title = p.name || street || town || '?';
  const rest = [];
  if (p.name && street && street !== p.name) rest.push(street);
  const pcTown = [pc, town].filter(Boolean).join(' ');
  if (pcTown && pcTown !== title) rest.push(pcTown);
  if (p.countrycode && p.countrycode !== 'CH') rest.push(p.country || p.countrycode);
  const sub = rest.join(', ');
  return { lat:c[1], lon:c[0], label: sub ? title+', '+sub : title, short:title, sub, pc, town };
}

// ---------- search ----------
const sugCtl = {from:null,to:null}, deb = {from:null,to:null}, lastRes = {from:[],to:[]};
function closeSug(k){ $('sug-'+k).classList.remove('open'); }
function setActive(k){ st.active=k; $('pt-from').classList.toggle('active',k==='from'); $('pt-to').classList.toggle('active',k==='to'); }
['from','to'].forEach(k=>{
  const inp = $(k);
  inp.addEventListener('focus',()=>setActive(k));
  inp.addEventListener('input',()=>{
    st[k] = null; st.route = null; drawMarkers(); drawRoute(); renderSum();
    clearTimeout(deb[k]);
    const q = inp.value.trim();
    if (q.length < 3) { closeSug(k); return; }
    deb[k] = setTimeout(()=>search(k,q), 320);
  });
  inp.addEventListener('keydown',e=>{ if(e.key==='Escape') closeSug(k); if(e.key==='Enter'){ e.preventDefault(); if(lastRes[k][0]) choose(k,lastRes[k][0]); }});
  inp.addEventListener('blur',()=>setTimeout(()=>closeSug(k),200));
  const box = $('sug-'+k);
  box.addEventListener('mousedown',e=>e.preventDefault());
  box.addEventListener('click',e=>{ const b=e.target.closest('button[data-i]'); if(b) choose(k,lastRes[k][+b.dataset.i]); });
});
async function search(k,q){
  if (sugCtl[k]) sugCtl[k].abort();
  const ctl = new AbortController(); sugCtl[k]=ctl;
  const url = 'https://photon.komoot.io/api/?q='+encodeURIComponent(q)+'&limit=6&lang='+(lang==='de'?'de':'en')+'&lat='+BASE[0]+'&lon='+BASE[1]+'&bbox='+BBOX;
  const box = $('sug-'+k);
  try {
    const j = await getJSON(url, 6000, ctl.signal);
    if (ctl.signal.aborted) return;
    const seen = new Set();
    lastRes[k] = (j.features||[]).map(placeFrom).filter(r=>{ if(!r||seen.has(r.label)) return false; seen.add(r.label); return true; });
    box.innerHTML = lastRes[k].length
      ? lastRes[k].map((r,i)=>'<button type="button" role="option" data-i="'+i+'">'+esc(r.short)+'<small>'+esc(r.sub)+'</small></button>').join('')
      : '<button type="button" disabled>'+esc(t('noRes'))+'</button>';
    if (document.activeElement === $(k)) box.classList.add('open');
  } catch(e) {
    if (!ctl.signal.aborted || !navigator.onLine) toast(t('offline'));
  }
}
function choose(k,p){
  if (!p) return;
  st[k] = p; $(k).value = p.label; closeSug(k); $(k).removeAttribute('aria-invalid'); $('err-route').textContent='';
  drawMarkers(); updateRoute();
  if (k==='from' && !st.to) setActive('to');
}
$('chips').addEventListener('click',e=>{
  const b=e.target.closest('button[data-i]'); if(!b) return;
  const p=PRESETS[+b.dataset.i];
  const k = (st.active==='to' || (st.from && !st.to)) ? 'to' : 'from';
  choose(k,{lat:p.lat,lon:p.lon,label:p[lang]+', '+p.addr,short:p[lang],sub:p.addr,pc:p.pc,town:p.town});
});
async function setPoint(lat,lon){
  const k = st.active;
  const base = {lat,lon,label:t('pin')+' ('+lat.toFixed(5)+', '+lon.toFixed(5)+')',short:t('pin'),sub:'',pc:'',town:''};
  choose(k, base);
  try {
    const j = await getJSON('https://photon.komoot.io/reverse?lat='+lat+'&lon='+lon+'&lang='+(lang==='de'?'de':'en'), 6000);
    const f = (j.features||[])[0]; const p = f && placeFrom(f);
    if (p && st[k] === base) { p.lat=lat; p.lon=lon; st[k]=p; $(k).value=p.label; }
  } catch(e) {}
}
$('gps').addEventListener('click',()=>{
  setActive('from');
  if (!navigator.geolocation) { toast(t('gpsNo')); return; }
  navigator.geolocation.getCurrentPosition(
    pos=>{ setActive('from'); setPoint(pos.coords.latitude,pos.coords.longitude); },
    ()=>toast(t('gpsNo')), {enableHighAccuracy:true,timeout:9000,maximumAge:60000});
});
$('clr-to').addEventListener('click',()=>{ $('to').value=''; st.to=null; st.route=null; drawMarkers(); drawRoute(); renderSum(); setActive('to'); $('to').focus(); });
$('swap').addEventListener('click',()=>{ const a=st.from; st.from=st.to; st.to=a; $('from').value=st.from?st.from.label:''; $('to').value=st.to?st.to.label:''; drawMarkers(); updateRoute(); });

// ---------- route ----------
let routeCtl=null;
function hav(a,b){ const r=Math.PI/180,dl=(b.lat-a.lat)*r,dn=(b.lon-a.lon)*r; const x=Math.sin(dl/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dn/2)**2; return 2*6371*Math.asin(Math.sqrt(x)); }
async function updateRoute(){
  st.route = null;
  if (!(st.from && st.to)) { drawRoute(); renderSum(); return; }
  const a=st.from, b=st.to, d0 = hav(a,b)*1.3;
  st.route = { km: Math.round(d0*10)/10, min: Math.max(3,Math.round(d0/45*60)), est:true, geo:null };
  drawRoute(); renderSum();
  if (routeCtl) routeCtl.abort();
  const ctl = new AbortController(); routeCtl = ctl;
  try {
    const j = await getJSON('https://router.project-osrm.org/route/v1/driving/'+a.lon+','+a.lat+';'+b.lon+','+b.lat+'?overview=false', 8000, ctl.signal);
    if (ctl.signal.aborted || st.from!==a || st.to!==b) return;
    const r = j.routes && j.routes[0];
    if (r && r.distance > 0) {
      st.route = { km: Math.round(r.distance/100)/10, min: Math.max(1,Math.round(r.duration/60)), est:false, geo:null };
      drawRoute(); renderSum();
    }
  } catch(e) {}
}
const fmtKm = n => n.toFixed(1);
function renderSum(){
  const r = st.route;
  if (!r) { $('sum-km').textContent='– km'; $('sum-lbl').textContent=t('nosum'); return; }
  $('sum-km').textContent = (r.est?'ca. ':'') + fmtKm(r.km)+' km · '+r.min+' Min';
  $('sum-lbl').textContent = r.est ? t('approx') : t('min');
}

// ---------- steppers ----------
function stepper(id,min,max){
  const upd=()=>{ $(id).textContent=st[id]; $(id+'-m').disabled=st[id]<=min; $(id+'-p').disabled=st[id]>=max; };
  $(id+'-m').addEventListener('click',()=>{ if(st[id]>min){st[id]--;upd();} });
  $(id+'-p').addEventListener('click',()=>{ if(st[id]<max){st[id]++;upd();} });
  upd();
}
stepper('pax',1,4); stepper('bag',0,4); stepper('sk',0,1);
['sk-p','pax-m'].forEach(i=>$(i).addEventListener('click',()=>{ $('err-seats').textContent=''; }));

// ---------- date / time ----------
const pad = n => String(n).padStart(2,'0');
const isoDate = d => d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
{
  const d = new Date(Date.now()+60*60000); d.setMinutes(Math.ceil(d.getMinutes()/15)*15,0,0);
  $('date').value = isoDate(d); $('date').min = isoDate(new Date());
  $('time').value = pad(d.getHours())+':'+pad(d.getMinutes());
  $('yr').textContent = new Date().getFullYear();
}
function whenDate(){
  const dv=$('date').value, tv=$('time').value;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dv) || !/^\d{2}:\d{2}/.test(tv)) return null;
  const [y,m,d]=dv.split('-').map(Number), [h,mi]=tv.split(':').map(Number);
  const dt = new Date(y,m-1,d,h,mi);
  return isNaN(dt.getTime()) ? null : dt;
}

// ---------- validation + send ----------
function normPhone(v){
  let s = (v||'').replace(/[\s\-\/().]/g,'');
  if (s.startsWith('00')) s = '+'+s.slice(2);
  if (/^0\d{9}$/.test(s)) s = '+41'+s.slice(1);
  return /^\+\d{9,15}$/.test(s) ? s : null;
}
function clearErrors(){ ['err-route','err-when','err-seats','err-name','err-phone'].forEach(i=>$(i).textContent=''); }
function validate(){
  clearErrors(); let first=null;
  const fail=(errId,msg,el)=>{ $(errId).textContent=msg; el.setAttribute('aria-invalid','true'); first=first||el; };
  if (!st.from) fail('err-route',t('eRoute'),$('from'));
  else if (!st.to) fail('err-route',t('eRoute'),$('to'));
  else if (hav(st.from,st.to) < 0.05) fail('err-route',t('eSame'),$('to'));
  const w = whenDate();
  if (!w || w.getTime() < Date.now()-5*60000) fail('err-when',t('eWhen'),$('time'));
  if (st.sk > st.pax) fail('err-seats',t('eSeats'),$('pax-p'));
  if ($('name').value.trim().length<2) fail('err-name',t('eName'),$('name'));
  if (!normPhone($('phone').value)) fail('err-phone',t('ePhone'),$('phone'));
  if (first) { first.scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(()=>first.focus({preventScroll:true}),350); }
  return !first;
}
const DAYS=['So','Mo','Di','Mi','Do','Fr','Sa'];
function message(){
  const w = whenDate(), r = st.route, a=st.from, b=st.to;
  const lines = [
    'Fahrtanfrage – Ahmed Holiel Personentransport',
    'Name: '+$('name').value.trim().replace(/\s+/g,' '),
    'Telefon: '+normPhone($('phone').value),
    'Datum: '+DAYS[w.getDay()]+', '+pad(w.getDate())+'.'+pad(w.getMonth()+1)+'.'+w.getFullYear(),
    'Zeit: '+pad(w.getHours())+':'+pad(w.getMinutes()),
    'Personen: '+st.pax,
    'Gepäck: '+st.bag,
    ...($('wc').checked ? ['Rollstuhl: ja (faltbar)'] : []),
    ...(st.sk ? ['Kindersitze: '+st.sk+'× Kindersitz'] : []),
    'Von: '+a.label,
    'Nach: '+b.label,
    'Strecke: '+(r.est?'ca. ':'')+r.km.toFixed(1)+' km / '+r.min+' Min',
    'Route: https://www.google.com/maps/dir/?api=1&origin='+a.lat.toFixed(5)+','+a.lon.toFixed(5)+'&destination='+b.lat.toFixed(5)+','+b.lon.toFixed(5)
  ];
  const note = $('note').value.trim().replace(/\s+/g,' ');
  if (note) lines.push('Bemerkung: '+note);
  lines.push('Sprache: '+lang.toUpperCase());
  return lines.join('\n');
}
['name','phone'].forEach(i=>$(i).addEventListener('input',()=>{ $(i).removeAttribute('aria-invalid'); $('err-'+i).textContent=''; }));
['date','time'].forEach(i=>$(i).addEventListener('change',()=>{ $('time').removeAttribute('aria-invalid'); $('err-when').textContent=''; }));
const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
function go(kind){
  if (!validate() || !st.route) return;
  const txt = encodeURIComponent(message());
  const url = kind==='wa' ? 'https://wa.me/'+WA_NUMBER+'?text='+txt : 'sms:+'+WA_NUMBER+(isIOS?'&':'?')+'body='+txt;
  toast(kind==='wa'?t('opened'):t('openedS'));
  window.location.href = url;
}
$('send-wa').addEventListener('click',()=>go('wa'));
$('send-sms').addEventListener('click',()=>go('sms'));
$('saveqr').addEventListener('click', async ()=>{
  try {
    const blob = await (await fetch('qr-card.png')).blob();
    const file = new File([blob], 'Fahrt-buchen-Ahmed-Holiel.png', {type:'image/png'});
    if (navigator.canShare && navigator.canShare({files:[file]})) { await navigator.share({files:[file], title:'Fahrt buchen – Ahmed Holiel'}); return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file.name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href), 4000);
    if (/iP(hone|ad|od)/.test(navigator.userAgent)) $('savetip').hidden = false;
    return;
  } catch(e) {
    if (e && e.name === 'AbortError') return;
  }
  $('savetip').hidden = false;
});
{
  const P={
   'winter-day':['photo-1651516246303-584f0f174762','center 40%','Nirmal Rajendharkumar','t6Mza1ulm7k'],
   'winter-night':['photo-1546089572-95b941d9368d','center 30%','Fabrice Villard','UqGeqvrwBKg']
  };
  const d=new Date(), m=d.getMonth()+1, h=d.getHours()+d.getMinutes()/60, summer=m>=5&&m<=10;
  const night = summer ? (h<6||h>=21) : (h<7.5||h>=17.5);
  const p=P[night?'winter-night':'winter-day'];
  const w = Math.min(1200, Math.round((window.innerWidth||800)*Math.min(2,window.devicePixelRatio||1)/100)*100);
  const url='https://images.unsplash.com/'+p[0]+'?w='+w+'&q=55&auto=format&fit=crop';
  const img=new Image(); img.decoding='async';
  img.onload=()=>{ const el=$('photo'); el.style.backgroundImage="url('"+url+"')"; el.style.backgroundPosition=p[1]; el.classList.add('on');
    const c=$('credit'); c.textContent='Foto: '+p[2]+' / Unsplash'; c.href='https://unsplash.com/photos/'+p[3]; };
  if (document.readyState==='complete') img.src=url; else window.addEventListener('load',()=>{ img.src=url; },{once:true});
}
window.__ah = { st, message, normPhone, choose, validate };

applyLang(); setActive('from');
}
