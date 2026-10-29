// ===== CONFIG: paste your Supabase publishable/anon key (NEVER the secret or service_role key) =====
const CFG = { url: 'https://xhpducobaxvgncntdzns.supabase.co', key: 'sb_publishable_BNdrYR7KgZDFVm2xi91piw_dbqJ99TM' };
CFG.turn = []; // optional TURN for voice on mobile networks: [{urls:'turn:HOST:3478',username:'USER',credential:'PASS'}]
const sb = supabase.createClient(CFG.url, CFG.key);

const T = {
 en:{welcome:'Meet people. Talk live.',name:'Display name',email:'Email',password:'Password',signin:'Sign in',signup:'Create account',checkEmail:'Check your email to confirm your account, then sign in.',logout:'Log out',rooms:'Live rooms',create:'New room',empty:'No live rooms yet. Create the first one.',roomName:'Room name',category:'Category',seats:'Speaker seats',createRoom:'Create room',cancel:'Cancel',leave:'Leave',speakers:'Speakers',listeners:'Listeners',chat:'Chat',msg:'Write a message',send:'Send',speak:'Request to speak',requests:'Speaker requests',accept:'Accept',reject:'Reject',voiceSoon:'Live voice arrives in the next phase.',sent:'Request sent',c_music:'Music',c_friendship:'Friendship',c_gaming:'Gaming',c_discussion:'Discussion',c_other:'Other',nokey:'Add your Supabase key in index.html first.'},
 fr:{welcome:'Rencontrez des gens. Parlez en direct.',name:'Nom affiché',email:'E-mail',password:'Mot de passe',signin:'Se connecter',signup:'Créer un compte',checkEmail:'Vérifiez votre e-mail pour confirmer, puis connectez-vous.',logout:'Déconnexion',rooms:'Salons en direct',create:'Nouveau salon',empty:'Aucun salon en direct. Créez le premier.',roomName:'Nom du salon',category:'Catégorie',seats:'Places de parole',createRoom:'Créer le salon',cancel:'Annuler',leave:'Quitter',speakers:'Intervenants',listeners:'Auditeurs',chat:'Discussion',msg:'Écrire un message',send:'Envoyer',speak:'Demander la parole',requests:'Demandes de parole',accept:'Accepter',reject:'Refuser',voiceSoon:'La voix en direct arrive à la prochaine étape.',sent:'Demande envoyée',c_music:'Musique',c_friendship:'Amitié',c_gaming:'Jeux',c_discussion:'Discussion',c_other:'Autre',nokey:'Ajoutez d’abord votre clé Supabase dans index.html.'},
 ar:{welcome:'تعرّف على الناس. تحدّث مباشرة.',name:'الاسم المعروض',email:'البريد الإلكتروني',password:'كلمة المرور',signin:'تسجيل الدخول',signup:'إنشاء حساب',checkEmail:'تحقق من بريدك لتأكيد الحساب ثم سجّل الدخول.',logout:'تسجيل الخروج',rooms:'الغرف المباشرة',create:'غرفة جديدة',empty:'لا توجد غرف مباشرة. أنشئ أول غرفة.',roomName:'اسم الغرفة',category:'التصنيف',seats:'مقاعد المتحدثين',createRoom:'إنشاء الغرفة',cancel:'إلغاء',leave:'مغادرة',speakers:'المتحدثون',listeners:'المستمعون',chat:'الدردشة',msg:'اكتب رسالة',send:'إرسال',speak:'اطلب التحدث',requests:'طلبات التحدث',accept:'قبول',reject:'رفض',voiceSoon:'الصوت المباشر في المرحلة القادمة.',sent:'تم إرسال الطلب',c_music:'موسيقى',c_friendship:'صداقة',c_gaming:'ألعاب',c_discussion:'نقاش',c_other:'أخرى',nokey:'أضف مفتاح Supabase في index.html أولاً.'}
};
Object.assign(T.en,{priv:'Private room',pw:'Password',code:'Room ID',joinPriv:'Join private room',gift:'Send gift',to:'To',bal:'Coins',nogift:'No other member',gsent:'Gift sent',newname:'New display name',gmsg:'sent',vjoin:'Join voice',vleave:'Leave voice',mic:'Mic',micoff:'Mic off',nomic:'Only speakers can use the mic',board:'Leaderboard',pf:'Profile',bio:'Bio',pfsave:'Save',pfav:'Avatar',gtxt:'Continue with Google',lvl:'Lvl',bk:'Back'});
Object.assign(T.fr,{priv:'Salon privé',pw:'Mot de passe',code:'ID du salon',joinPriv:'Rejoindre un salon privé',gift:'Envoyer un cadeau',to:'À',bal:'Pièces',nogift:'Aucun autre membre',gsent:'Cadeau envoyé',newname:'Nouveau nom affiché',gmsg:'a envoyé',vjoin:'Rejoindre la voix',vleave:'Quitter la voix',mic:'Micro',micoff:'Micro coupé',nomic:'Seuls les orateurs ont le micro',board:'Classement',pf:'Profil',bio:'Bio',pfsave:'Enregistrer',pfav:'Avatar',gtxt:'Continuer avec Google',lvl:'Niv.',bk:'Retour'});
Object.assign(T.ar,{priv:'غرفة خاصة',pw:'كلمة المرور',code:'رقم الغرفة',joinPriv:'دخول غرفة خاصة',gift:'إرسال هدية',to:'إلى',bal:'العملات',nogift:'لا يوجد عضو آخر',gsent:'تم إرسال الهدية',newname:'الاسم الجديد',gmsg:'أرسل',vjoin:'دخول الصوت',vleave:'خروج من الصوت',mic:'المايك',micoff:'إيقاف المايك',nomic:'المايك للمتحدثين فقط',board:'الترتيب',pf:'الملف الشخصي',bio:'نبذة',pfsave:'حفظ',pfav:'الصورة',gtxt:'الدخول بـ Google',lvl:'مستوى',bk:'رجوع'});
Object.assign(T.en,{mute:'Mute',unmute:'Unmute',demote:'Move to listeners',kick:'Remove from room',removed:'You were removed from the room',mutedYou:'A moderator muted you',upl:'Upload photo',rmp:'Remove photo',up_busy:'Uploading…',up_ok:'Photo updated',up_bad:'Choose an image',close:'Close'});
Object.assign(T.fr,{mute:'Couper le micro',unmute:'Réactiver le micro',demote:'Passer en auditeur',kick:'Exclure du salon',removed:'Vous avez été exclu du salon',mutedYou:'Un modérateur a coupé votre micro',upl:'Importer une photo',rmp:'Retirer la photo',up_busy:'Envoi…',up_ok:'Photo mise à jour',up_bad:'Choisissez une image',close:'Fermer'});
Object.assign(T.ar,{mute:'كتم',unmute:'إلغاء الكتم',demote:'نقل إلى المستمعين',kick:'طرد من الغرفة',removed:'تم طردك من الغرفة',mutedYou:'قام مشرف بكتمك',upl:'رفع صورة',rmp:'حذف الصورة',up_busy:'جارٍ الرفع…',up_ok:'تم تحديث الصورة',up_bad:'اختر صورة',close:'إغلاق'});
Object.assign(T.en,{promote:'Make moderator',unmod:'Remove moderator',stg:'Room settings',closeRoom:'Close room',closeAsk:'Close this room for everyone?',closed:'The room was closed',saved:'Saved',noBio:'No bio yet'});
Object.assign(T.fr,{promote:'Nommer modérateur',unmod:'Retirer modérateur',stg:'Paramètres du salon',closeRoom:'Fermer le salon',closeAsk:'Fermer ce salon pour tout le monde ?',closed:'Le salon a été fermé',saved:'Enregistré',noBio:'Pas encore de bio'});
Object.assign(T.ar,{promote:'تعيين مشرف',unmod:'إزالة الإشراف',stg:'إعدادات الغرفة',closeRoom:'إغلاق الغرفة',closeAsk:'إغلاق هذه الغرفة للجميع؟',closed:'تم إغلاق الغرفة',saved:'تم الحفظ',noBio:'لا توجد نبذة'});
Object.assign(T.en,{srch:'Search name or ID',allc:'All',follow:'Follow',unfollow:'Unfollow',fon:'Following now',foff:'Unfollowed',dm:'Messages',fing:'Following',convs:'Conversations',nodm:'Nothing yet'});
Object.assign(T.fr,{srch:'Nom ou ID du salon',allc:'Toutes',follow:'Suivre',unfollow:'Ne plus suivre',fon:'Vous suivez',foff:'Vous ne suivez plus',dm:'Messages',fing:'Abonnements',convs:'Conversations',nodm:'Rien pour le moment'});
Object.assign(T.ar,{srch:'ابحث بالاسم أو الرقم',allc:'الكل',follow:'متابعة',unfollow:'إلغاء المتابعة',fon:'تمت المتابعة',foff:'تم إلغاء المتابعة',dm:'الرسائل',fing:'المتابَعون',convs:'المحادثات',nodm:'لا شيء بعد'});
Object.assign(T.en,{rep:'Report',repAsk:'Reason for the report',repSent:'Report sent',ban:'Ban from room',banAsk:'Ban this user from the room?',banned:'User banned',nowLive:'opened a room',readMark:'Read',typing:'…'});
Object.assign(T.fr,{rep:'Signaler',repAsk:'Motif du signalement',repSent:'Signalement envoyé',ban:'Bannir du salon',banAsk:'Bannir cet utilisateur du salon ?',banned:'Utilisateur banni',nowLive:'a ouvert un salon',readMark:'Lu',typing:'…'});
Object.assign(T.ar,{rep:'إبلاغ',repAsk:'سبب الإبلاغ',repSent:'تم إرسال البلاغ',ban:'منع من دخول الغرفة',banAsk:'منع هذا المستخدم من دخول الغرفة؟',banned:'تم منع المستخدم',nowLive:'فتح غرفة',readMark:'مقروء',typing:'…'});
Object.assign(T.en,{adm:'Admin',reps:'Reports',bans:'Banned users',unban:'Unban',norep:'Nothing here',unbanned:'Ban removed',inv:'Invite to room',invSent:'Invitation sent',invJoin:'Join room',by:'by',inRoom:'room'});
Object.assign(T.fr,{adm:'Admin',reps:'Signalements',bans:'Utilisateurs bannis',unban:'Débannir',norep:'Rien ici',unbanned:'Bannissement levé',inv:'Inviter au salon',invSent:'Invitation envoyée',invJoin:'Rejoindre le salon',by:'par',inRoom:'salon'});
Object.assign(T.ar,{adm:'الإدارة',reps:'البلاغات',bans:'المحظورون',unban:'رفع الحظر',norep:'لا شيء هنا',unbanned:'تم رفع الحظر',inv:'دعوة للغرفة',invSent:'تم إرسال الدعوة',invJoin:'دخول الغرفة',by:'من',inRoom:'الغرفة'});
Object.assign(T.en,{wal:'Wallet',gsentH:'Sent',grecvH:'Received'});
Object.assign(T.fr,{wal:'Portefeuille',gsentH:'Envoyés',grecvH:'Reçus'});
Object.assign(T.ar,{wal:'المحفظة',gsentH:'المرسلة',grecvH:'المستلمة'});
Object.assign(T.en,{grant:'Add coins',srchU:'Search user name',granted:'Coins updated',amt:'Amount (negative to remove)'});
Object.assign(T.fr,{grant:'Ajouter des pièces',srchU:'Nom de l’utilisateur',granted:'Pièces mises à jour',amt:'Montant (négatif pour retirer)'});
Object.assign(T.ar,{grant:'شحن العملات',srchU:'ابحث باسم المستخدم',granted:'تم تحديث العملات',amt:'المبلغ (سالب للخصم)'});
Object.assign(T.en,{blk:'Block user',unblk:'Unblock',blkd:'User blocked',unblkd:'Block removed',blkL:'Blocked users'});
Object.assign(T.fr,{blk:'Bloquer',unblk:'Débloquer',blkd:'Utilisateur bloqué',unblkd:'Blocage retiré',blkL:'Utilisateurs bloqués'});
Object.assign(T.ar,{blk:'حظر المستخدم',unblk:'إلغاء الحظر',blkd:'تم حظر المستخدم',unblkd:'تم إلغاء الحظر',blkL:'المحظورون'});
Object.assign(T.en,{pinPh:'Pinned message (empty to remove)',slow:'Slow mode',off:'off',slowErr:'Slow mode: wait before sending again',dupErr:'Duplicate message',copied:'Link copied'});
Object.assign(T.fr,{pinPh:'Message épinglé (vide pour retirer)',slow:'Mode lent',off:'désactivé',slowErr:'Mode lent : attendez avant de renvoyer',dupErr:'Message en double',copied:'Lien copié'});
Object.assign(T.ar,{pinPh:'رسالة مثبتة (اتركها فارغة للحذف)',slow:'الوضع البطيء',off:'متوقف',slowErr:'الوضع البطيء: انتظر قبل الإرسال',dupErr:'رسالة مكررة',copied:'تم نسخ الرابط'});
let pendingRoom=null; try{ const q=new URLSearchParams(location.search).get('room'); if(q&&/^\d+$/.test(q)){ pendingRoom=q; sessionStorage.setItem('pr',q); } else pendingRoom=sessionStorage.getItem('pr'); }catch(e){}
const lvls={};
function lvb(u){ const l=lvls[u]; return l?` <span class="lv">${l>=30?'💎':l>=15?'🥇':l>=5?'⭐':'🔹'}${l}</span>`:''; }
function paintMeta(){ if(!cur) return; if(cur.name) document.title=cur.name+' · Lumora'; const p=$('#pin'); if(p){ p.hidden=!cur.pinned; p.textContent='📌 '+(cur.pinned||''); } const s=$('#slwi'); if(s) s.textContent=cur.slow_seconds?' · 🐢 '+cur.slow_seconds+'s':''; const h=document.querySelector('main h2'); if(h&&cur.name) h.textContent=cur.name; }
function roomSettings2(){ closeSheet(); const me=members.find(x=>x.user_id===user.id), own=!!(me&&me.role==='owner'); const d=document.createElement('div'); d.id='sheet'; d.className='sheet';
  d.innerHTML=`<div class="sh"><b>⚙ ${t('stg')}</b>${own?`<input id="rnm" maxlength="60" value="${esc(cur.name)}">`:''}<textarea id="pnt" maxlength="200" rows="2" placeholder="📌 ${t('pinPh')}">${esc(cur.pinned||'')}</textarea><select id="slw" aria-label="${t('slow')}">${[0,5,10,30,60].map(n=>`<option value="${n}"${(cur.slow_seconds||0)===n?' selected':''}>🐢 ${t('slow')}: ${n?n+'s':t('off')}</option>`).join('')}</select><button class="pri" data-k="save">${t('pfsave')}</button>${own?`<button class="sec dng" data-k="close">🚪 ${t('closeRoom')}</button>`:''}<button class="ghost" data-k="x">${t('close')}</button></div>`;
  d.onclick=async e=>{ if(e.target===d) return closeSheet(); const b=e.target.closest('button'); if(!b) return; const k=b.dataset.k;
    if(k==='x') return closeSheet();
    if(k==='save'){ const pin=$('#pnt').value.trim(), sl=+$('#slw').value;
      if(own){ const n=$('#rnm').value.trim(); if(n&&n!==cur.name){ const {error}=await sb.rpc('rename_room',{p_room:cur.id,p_name:n}); if(error) return toast(error.message); cur.name=n; } }
      let r=await sb.rpc('set_room_pin',{p_room:cur.id,p_text:pin}); if(r.error) return toast(r.error.message);
      r=await sb.rpc('set_slow_mode',{p_room:cur.id,p_seconds:sl}); if(r.error) return toast(r.error.message);
      cur.pinned=pin||null; cur.slow_seconds=sl; paintMeta(); closeSheet(); return toast(t('saved')); }
    if(k==='close'){ if(!confirm(t('closeAsk'))) return; closeSheet(); const {error}=await sb.rpc('close_room',{p_room:cur.id}); if(error) toast(error.message); loadMembers(); } };
  openSheet(d); }
let isAdm=null;
async function walletView(){
  if(cur){ cur._leaving=true; await sb.rpc('leave_room',{p_room:cur.id}); cleanup(); cur=null; }
  view='wallet';
  app.innerHTML=hdr(true)+`<main class="c"><div class="row"><button class="ghost" id="bk">← ${t('bk')}</button><h2>🪙 ${t('wal')}</h2></div><div class="card"><small>${t('bal')}</small><b class="gold" style="font-size:32px" id="wb">…</b></div><h3>🎁</h3><div id="wh" class="c" style="padding:0"></div></main>`;
  bindHdr(); $('#bk').onclick=()=>{ view='rooms'; roomsView(); };
  const [{data:w},{data:ev,error},{data:gs}]=await Promise.all([
    sb.from('wallets').select('balance').eq('user_id',user.id).maybeSingle(),
    sb.from('gift_events').select('sender_id,receiver_id,gift_id,quantity,created_at').or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`).order('created_at',{ascending:false}).limit(30),
    sb.from('gifts').select('id,code,name')]);
  if($('#wb')) $('#wb').textContent=w?w.balance:0;
  if(error) return toast(error.message);
  const gm={}; (gs||[]).forEach(g=>gm[g.id]=g);
  await Promise.all([...new Set((ev||[]).flatMap(e=>[e.sender_id,e.receiver_id]))].map(nameOf));
  const L=$('#wh'); if(!L) return;
  L.innerHTML=(ev||[]).length?ev.map(e=>{ const g=gm[e.gift_id], out=e.sender_id===user.id, o=out?e.receiver_id:e.sender_id;
    return `<div class="card"><div class="row"><span>${gEmoji(g)} ${esc(g?(g.name[lang]||g.name.en):'')} ×${e.quantity}</span><small class="${out?'':'gold'}">${out?'→ ':'← '}${esc(names[o]||'?')}</small></div><small>${out?t('gsentH'):t('grecvH')} · ${new Date(e.created_at).toLocaleString()}</small></div>`; }).join(''):`<p class="note">${t('nodm')}</p>`;
}
let lang = 'en'; try { lang = localStorage.getItem('lang') || (navigator.language||'en').slice(0,2); } catch(e){}
if (!T[lang]) lang = 'en';
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;
const $ = s => document.querySelector(s), app = $('#app');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rank = r => ({owner:5,admin:4,moderator:3,speaker:2,listener:1}[r] || 0);
const avs={}; let dmPeer=null, dch=null, user = null, view = '', cur = null, members = [], names = {}, ch = null;

const CI={music:'🎵',friendship:'🤝',gaming:'🎮',discussion:'💬',other:'✨'};
const RX=['❤️','🔥','👏','😂','🎉','😮'];
function flyEmoji(e){ if(!RX.includes(e)||!$('#chat')) return; const f=document.createElement('div'); f.className='fly'; f.textContent=e; f.style.left=(8+Math.random()*80)+'vw'; document.body.appendChild(f); setTimeout(()=>f.remove(),2600); }
function avCls(uid){ return (avs[uid]||'').startsWith('emoji:')?'emo':''; }
function avInner(uid){ const a=avs[uid]||''; if(a.startsWith('http')) return `<img src="${esc(a)}" alt="${esc((names[uid]||'?')[0].toUpperCase())}" loading="lazy" onerror="this.replaceWith(this.alt)">`; if(a.startsWith('emoji:')) return esc(a.slice(6)); return esc((names[uid]||'?')[0].toUpperCase()); }
function canMod(uid){ const me=members.find(x=>x.user_id===user.id), tg=members.find(x=>x.user_id===uid); return !!(me&&tg&&uid!==user.id&&rank(me.role)>=3&&rank(me.role)>rank(tg.role)); }
let sheetPrev=null;
function sheetKey(e){ if(e.key==='Escape') closeSheet(); }
function openSheet(d){ sheetPrev=document.activeElement; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); document.body.appendChild(d); document.addEventListener('keydown',sheetKey); const f=d.querySelector('input,textarea,select,button'); if(f) f.focus(); }
function closeSheet(){ const e=document.getElementById('sheet'); if(e){ e.remove(); document.removeEventListener('keydown',sheetKey); if(sheetPrev&&document.contains(sheetPrev)) sheetPrev.focus(); sheetPrev=null; } }
const seenMsg=new Set(), seenGift=new Set();
async function once(b,fn){ if(b&&b.disabled) return; if(b) b.disabled=true; try{ return await fn(); } finally{ if(b&&b.isConnected) b.disabled=false; } }
function pushChat(box,d){ const near=box.scrollHeight-box.scrollTop-box.clientHeight<80; box.appendChild(d); while(box.children.length>200) box.firstChild.remove(); if(near||d.classList.contains('me')) box.scrollTop=box.scrollHeight; }
async function userSheet(uid){ closeSheet();
  const tg=members.find(x=>x.user_id===uid), me=members.find(x=>x.user_id===user.id); if(!tg||!me) return;
  const d=document.createElement('div'); d.id='sheet'; d.className='sheet';
  let ac='';
  if(canMod(uid)){
    if(tg.seat_index!=null) ac+=`<button class="sec" data-k="mute">${tg.muted?'🔊 '+t('unmute'):'🔇 '+t('mute')}</button><button class="sec" data-k="demote">⬇ ${t('demote')}</button>`;
    if(rank(me.role)>=4) ac+=`<button class="sec" data-k="${tg.role==='moderator'?'unmod':'promote'}">🛡 ${tg.role==='moderator'?t('unmod'):t('promote')}</button>`;
    ac+=`<button class="sec dng" data-k="kick">🚫 ${t('kick')}</button><button class="sec dng" data-k="ban">⛔ ${t('ban')}</button>`;
  }
  d.innerHTML=`<div class="sh"><div class="row"><div class="av sm ${avCls(uid)}">${avInner(uid)}</div><div><b>${tg.role==='owner'?'👑 ':tg.role==='moderator'||tg.role==='admin'?'🛡 ':''}${esc(names[uid]||'?')}</b><br><small id="ul"></small></div></div><p class="note" id="ub">…</p>${uid!==user.id?`<button class="sec" data-k="fol" id="fb">＋ ${t('follow')}</button><button class="sec" data-k="dm">✉ ${t('dm')}</button><button class="sec" data-k="gft">🎁 ${t('gift')}</button><button class="sec" data-k="inv">🎟 ${t('inv')}</button><button class="sec dng" data-k="rep">⚠ ${t('rep')}</button><button class="sec dng" data-k="blk" id="bb2">⛔ ${t('blk')}</button>`:''}${ac}<button class="ghost" data-k="x">${t('close')}</button></div>`;
  d.onclick=async e=>{ if(e.target===d) return closeSheet(); const b=e.target.closest('button'); if(!b) return; const k=b.dataset.k; closeSheet(); if(k==='x') return;
    if(k==='fol'){ const on=b.dataset.f==='1'; const r0=on?await sb.from('follow_links').delete().eq('follower',user.id).eq('followed',uid):await sb.from('follow_links').insert({follower:user.id,followed:uid}); return toast(r0.error?r0.error.message:t(on?'foff':'fon')); }
    if(k==='dm'){ return dmView(uid); }
    if(k==='gft'){ const r=$('#gr'); if(r){ r.value=uid; const g=$('#gf'); if(g) g.scrollIntoView({behavior:'smooth',block:'center'}); } return; }
    if(k==='inv'){ const {error}=await sb.from('dms').insert({sender_id:user.id,receiver_id:uid,body:'🎟 '+cur.name+' [[room:'+cur.id+']]'}); return toast(error?error.message:t('invSent')); }
    if(k==='blk'){ const on=b.dataset.b==='1'; const {error}=await sb.rpc(on?'unblock_user':'block_user',{p_user:uid}); return toast(error?error.message:t(on?'unblkd':'blkd')); }
    if(k==='rep'){ const why=(prompt(t('repAsk'))||'').trim().slice(0,500); if(!why) return; const {error}=await sb.from('reports').insert({reporter:user.id,reported:uid,room_id:cur?cur.id:null,reason:why}); return toast(error?error.message:t('repSent')); }
    if(k==='ban'){ if(!confirm(t('banAsk'))) return; const {error}=await sb.rpc('ban_member',{p_room:cur.id,p_user:uid}); toast(error?error.message:t('banned')); return loadMembers(); }
    const a={room:cur.id}; let r;
    if(k==='mute') r=await sb.rpc('set_member_muted',{p_room:cur.id,p_user:uid,p_muted:!tg.muted});
    else if(k==='demote') r=await sb.rpc('demote_member',{p_room:cur.id,p_user:uid});
    else if(k==='kick') r=await sb.rpc('kick_member',{p_room:cur.id,p_user:uid});
    else r=await sb.rpc('set_member_role',{p_room:cur.id,p_user:uid,p_mod:k==='promote'});
    if(r&&r.error) toast(r.error.message); loadMembers(); };
  openSheet(d);
  const [{data:p},{data:lv}]=await Promise.all([sb.from('profiles').select('bio').eq('id',uid).maybeSingle(),sb.from('user_levels').select('level,popularity_points').eq('user_id',uid).maybeSingle()]);
  if(document.getElementById('sheet')!==d) return;
  if(uid!==user.id){ const {data:f}=await sb.from('follow_links').select('followed').eq('follower',user.id).eq('followed',uid).maybeSingle(); const fb=$('#fb'); if(fb){ fb.dataset.f=f?'1':'0'; fb.textContent=f?'✓ '+t('unfollow'):'＋ '+t('follow'); } }
  if(uid!==user.id){ const {data:bk}=await sb.from('lumora_blocks').select('blocked').eq('blocker',user.id).eq('blocked',uid).maybeSingle(); const bb=$('#bb2'); if(bb){ bb.dataset.b=bk?'1':'0'; bb.textContent='⛔ '+t(bk?'unblk':'blk'); } }
  $('#ub').textContent=(p&&p.bio)||t('noBio'); $('#ul').textContent=lv?t('lvl')+' '+lv.level+' · '+lv.popularity_points+' ★':''; }
function roomSettings(){ closeSheet(); const d=document.createElement('div'); d.id='sheet'; d.className='sheet';
  d.innerHTML=`<div class="sh"><b>⚙ ${t('stg')}</b><input id="rnm" maxlength="60" value="${esc(cur.name)}"><button class="pri" data-k="save">${t('pfsave')}</button><button class="sec dng" data-k="close">🚪 ${t('closeRoom')}</button><button class="ghost" data-k="x">${t('close')}</button></div>`;
  d.onclick=async e=>{ if(e.target===d) return closeSheet(); const b=e.target.closest('button'); if(!b) return; const k=b.dataset.k;
    if(k==='x') return closeSheet();
    if(k==='save'){ const n=$('#rnm').value.trim(); if(!n) return; const {error}=await sb.rpc('rename_room',{p_room:cur.id,p_name:n}); if(error) return toast(error.message); cur.name=n; const h=document.querySelector('main h2'); if(h) h.textContent=n; closeSheet(); return toast(t('saved')); }
    if(k==='close'){ if(!confirm(t('closeAsk'))) return; closeSheet(); const {error}=await sb.rpc('close_room',{p_room:cur.id}); if(error) toast(error.message); loadMembers(); } };
  openSheet(d); }
function shrink(f,n){ return new Promise((ok,no)=>{ const u=URL.createObjectURL(f), im=new Image(); im.onload=()=>{ const s=Math.min(im.width,im.height), c=document.createElement('canvas'); c.width=c.height=n; c.getContext('2d').drawImage(im,(im.width-s)/2,(im.height-s)/2,s,s,0,0,n,n); URL.revokeObjectURL(u); c.toBlob(b=>b?ok(b):no(new Error('image')),'image/jpeg',.85); }; im.onerror=()=>no(new Error('image')); im.src=u; }); }
function toast(m){ m=friendly(m); const e=$('#toast'); e.textContent=m; e.className='show'; clearTimeout(toast.h); toast.h=setTimeout(()=>e.className='',3500); }
function setLang(l){ lang=l; try{localStorage.setItem('lang',l)}catch(e){} document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr'; route(); }
function hdr(logged){ return `<header><span class="logo">Lumora</span><span class="sp"></span><select id="lg" aria-label="Language"><option value="en">EN</option><option value="fr">FR</option><option value="ar">AR</option></select>${logged?`<button class="ghost" id="wl" aria-label="${t('wal')}">🪙</button><button class="ghost" id="ad" aria-label="${t('adm')}" hidden>🛡</button><button class="ghost" id="ib" aria-label="${t('dm')}">✉<span id="ubd" class="gold"></span></button><button class="ghost" id="nm" aria-label="${t('pf')}">✎</button><button class="ghost" id="lo">${t('logout')}</button>`:''}</header>`; }
let pushed=false;
function bindHdr(){ setTimeout(()=>{ const h=document.querySelector('main h1,main h2'); const a=document.activeElement; if(h&&!(a&&a.matches&&a.matches('input,textarea,select'))){ h.tabIndex=-1; h.focus({preventScroll:true}); } },0); if(view==='rooms') pushed=false; else if(view!=='auth'&&!pushed){ try{ history.pushState({v:1},''); pushed=true; }catch(e){} }
  document.title='Lumora'; document.querySelectorAll('input:not([aria-label]),textarea:not([aria-label])').forEach(e=>{ if(e.placeholder) e.setAttribute('aria-label',e.placeholder); }); const AL={sh:'share',st:'stg',ds:'send',gsr:'srch'}; for(const k in AL){ const e=document.getElementById(k); if(e&&!e.getAttribute('aria-label')) e.setAttribute('aria-label',t(AL[k])); }
  $('#lg').value=lang; $('#lg').onchange=e=>setLang(e.target.value); const lo=$('#lo'); if(lo) lo.onclick=()=>sb.auth.signOut();
  const ib=$('#ib'); if(ib) ib.onclick=()=>{ cleanup(); cur=null; view='inbox'; inboxView(); };
  const nm=$('#nm'); if(nm) nm.onclick=profileView; refreshUnread();
  const wl=$('#wl'); if(wl) wl.onclick=walletView;
  const ad=$('#ad'); if(ad){ const show=()=>{ ad.hidden=!isAdm; ad.onclick=()=>{ cleanup(); cur=null; view='admin'; adminView(); }; };
    if(isAdm===null) sb.rpc('is_admin').then(({data})=>{ isAdm=data===true; show(); }); else show(); } }
async function adminView(){
  app.innerHTML=hdr(true)+`<main class="c"><div class="row"><button class="ghost" id="bk">← ${t('bk')}</button><h2>🛡 ${t('adm')}</h2></div><h3>🪙 ${t('grant')}</h3><div class="send"><input id="gu" placeholder="${t('srchU')}" maxlength="40"><button class="sec" id="gsr">🔍</button></div><div id="gl" class="c" style="padding:0"></div><h3>${t('reps')}</h3><div id="ar" class="c" style="padding:0"></div><h3>${t('bans')}</h3><div id="ab" class="c" style="padding:0"></div></main>`;
  bindHdr(); $('#bk').onclick=()=>{ view='rooms'; roomsView(); };
  const gsrch=async()=>{ const q=$('#gu').value.trim().replace(/[%,()]/g,''); if(!q) return; const {data,error}=await sb.from('profiles').select('id,display_name').ilike('display_name',q+'%').limit(6); if(error) return toast(error.message);
    const G=$('#gl'); G.innerHTML=(data||[]).length?data.map(p=>`<div class="card" data-id="${p.id}"><b>${esc(p.display_name||'?')}</b></div>`).join(''):`<p class="note">${t('norep')}</p>`;
    G.querySelectorAll('.card').forEach(c=>c.onclick=async()=>{ const a=parseInt(prompt(t('amt')),10); if(!a) return; const {data:nb,error:e}=await sb.rpc('admin_grant_coins',{p_user:c.dataset.id,p_amount:a}); toast(e?e.message:t('granted')+': '+nb); }); };
  $('#gsr').onclick=gsrch; $('#gu').onkeydown=e=>{ if(e.key==='Enter') gsrch(); };
  const [{data:rp,error:e1},{data:bn,error:e2}]=await Promise.all([sb.rpc('admin_list_reports'),sb.rpc('admin_list_bans')]);
  if(e1||e2) return toast((e1||e2).message);
  const L1=$('#ar'), L2=$('#ab'); if(!L1) return;
  L1.innerHTML=(rp||[]).length?rp.map(r=>`<div class="card"><b>${esc(r.reporter_name||'?')} → ${esc(r.reported_name||'?')}</b><span>${esc(r.reason)}</span><small>${new Date(r.created_at).toLocaleString()}</small></div>`).join(''):`<p class="note">${t('norep')}</p>`;
  L2.innerHTML=(bn||[]).length?bn.map(b=>`<div class="card"><div class="row"><span><b>${esc(b.user_name||'?')}</b><br><small>${t('inRoom')}: ${esc(b.room_name||'?')}</small></span><button class="sec" data-r="${b.room_id}" data-u="${b.user_id}">${t('unban')}</button></div></div>`).join(''):`<p class="note">${t('norep')}</p>`;
  L2.querySelectorAll('button').forEach(x=>x.onclick=async e=>{ e.stopPropagation(); const {error}=await sb.rpc('admin_unban',{p_room:x.dataset.r,p_user:x.dataset.u}); toast(error?error.message:t('unbanned')); if(!error) adminView(); });
}
async function refreshUnread(){ if(!user||!$('#ubd')) return; try{ const {data,error}=await sb.rpc('unread_dm_count'); if(error) return; let n=data; if(Array.isArray(n)) n=n[0]; if(n&&typeof n==='object') n=Object.values(n)[0]; n=+n||0; const e=$('#ubd'); if(e) e.textContent=n>0?' '+n:''; }catch(e){} }
let nch=null;
function startNotifs(){ if(nch||!user) return; nch=sb.channel('notif-'+user.id)
  .on('postgres_changes',{event:'INSERT',schema:'public',table:'notifications',filter:'user_id=eq.'+user.id},async p=>{ const n=await nameOf(p.new.actor_id); toast('🔔 '+n+' '+t('nowLive')+(p.new.room_name?': '+p.new.room_name:'')); if(view==='rooms') roomsView(); })
  .on('postgres_changes',{event:'INSERT',schema:'public',table:'dms',filter:'receiver_id=eq.'+user.id},async p=>{ if(view!=='dm') refreshUnread(); try{ if(document.hidden&&window.Notification&&Notification.permission==='granted'){ const n=await nameOf(p.new.sender_id); new Notification(n,{body:String(p.new.body||'').replace(/\[\[room:[0-9a-f-]{36}\]\]/,'').slice(0,100)}); } }catch(e){} })
  .subscribe(); }
function stopNotifs(){ if(nch){ sb.removeChannel(nch); nch=null; } }
function cleanup(){ if(dch){ sb.removeChannel(dch); dch=null; } closeSheet(); voiceLeave(); if(ch){ sb.removeChannel(ch); ch=null; } }

function route(){
  if(!user){ cleanup(); view='auth'; return authView(); }
  if(pendingRoom){ const pr=pendingRoom; pendingRoom=null; try{ sessionStorage.removeItem('pr'); history.replaceState(null,'',location.pathname); }catch(e){}
    return sb.rpc('join_room_by_code',{p_public_id:+pr,p_password:null}).then(({data,error})=>{ if(error){ toast(error.message); view='rooms'; return roomsView(); } cur={id:data}; view='room'; openRoom(data); }); }
  if(view==='room' && cur) return openRoom(cur.id);
  if(view==='create') return createView();
  if(view==='inbox') return inboxView();
  if(view==='dm'&&dmPeer) return dmView(dmPeer);
  view='rooms'; roomsView();
}

function authView(){
  document.documentElement.dir = lang==='ar'?'rtl':'ltr';
  app.innerHTML = hdr(false)+`<main class="c"><h1>${t('welcome')}</h1>
    <input id="nm" placeholder="${t('name')}" maxlength="40" autocomplete="nickname">
    <input id="em" type="email" placeholder="${t('email')}" autocomplete="email">
    <input id="pw" type="password" placeholder="${t('password')}" autocomplete="current-password"><label class="note"><input type="checkbox" id="sp"> ${t('showpw')}</label>
    <button class="pri" id="in">${t('signin')}</button><button class="sec" id="up">${t('signup')}</button><button class="sec" id="go">G · ${t('gtxt')}</button></main>`;
  bindHdr();
  const cred = () => ({ email: $('#em').value.trim(), password: $('#pw').value });
  const guard = () => { if (CFG.key.startsWith('PASTE')) { toast(t('nokey')); return true; } };
  $('#in').onclick = () => once($('#in'), async () => { if(guard())return; const c=cred(); if(!c.email||!c.password) return toast(t('email')+' / '+t('password')); const {error}=await sb.auth.signInWithPassword(c); if(error) toast(error.message); });
  $('#go').onclick = () => once($('#go'), async () => { if(guard())return; const {error}=await sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}}); if(error) toast(error.message); });
  $('#up').onclick = () => once($('#up'), async () => { if(guard())return; const c=cred(); if(!c.email||!c.password) return toast(t('email')+' / '+t('password')); const {data,error}=await sb.auth.signUp({...c, options:{data:{name:$('#nm').value.trim()}}}); if(error) return toast(error.message); if(!data.session) toast(t('checkEmail')); });
  $('#sp').onchange = e => { $('#pw').type = e.target.checked ? 'text' : 'password'; };
  $('#pw').onkeydown = e => { if(e.key==='Enter') $('#in').click(); };
}

async function roomsView(){
  app.innerHTML = hdr(true)+`<main class="c"><div class="row"><h2>${t('rooms')}</h2><button class="sec" id="lb" aria-label="${t('board')}">🏆</button><button class="pri" id="new">+ ${t('create')}</button></div><div class="row"><input id="pc" placeholder="${t('code')}" inputmode="numeric"><input id="pp" type="password" placeholder="${t('pw')}"><button class="sec" id="pj">${t('joinPriv')}</button></div><div class="row"><input id="sq" placeholder="${t('srch')}"><select id="sc" style="width:auto"><option value="">${t('allc')}</option>${Object.keys(CI).map(k=>`<option value="${k}">${CI[k]} ${t('c_'+k)}</option>`).join('')}</select></div><div id="list" class="c" style="padding:0"><p class="note">…</p></div></main>`;
  bindHdr(); $('#new').onclick=()=>{ view='create'; createView(); };
  $('#lb').onclick=()=>{ view='board'; boardView(); };
  $('#pj').onclick=()=>once($('#pj'),async()=>{ const code=parseInt($('#pc').value,10); if(!code) return toast(t('code')); const {data,error}=await sb.rpc('join_room_by_code',{p_public_id:code,p_password:$('#pp').value||null}); if(error) return toast(error.message); cur={id:data}; view='room'; openRoom(data); });
  const draw=async(quiet)=>{
  const {data:all,error}=await sb.from('rooms').select('id,public_id,name,category,capacity,seat_count,participant_count').eq('is_live',true).order('participant_count',{ascending:false}).limit(100);
  if(error){ if(!quiet){ toast(error.message); const L0=$('#list'); if(L0){ L0.innerHTML='<button class="sec" id="rt" aria-label="'+t('retry')+'">↻ '+t('retry')+'</button>'; $('#rt').onclick=()=>draw(false); } } return; }
  const L=$('#list'); if(!L) return; const q=$('#sq').value.trim().toLowerCase(), cg=$('#sc').value; const data=all.filter(r=>(!cg||r.category===cg)&&(!q||r.name.toLowerCase().includes(q)||String(r.public_id)===q));
  if(!data.length){ L.innerHTML=`<p class="note">${t('empty')}</p>`; return; }
  L.innerHTML=data.map(r=>`<div class="card rc" tabindex="0" data-id="${r.id}"><div class="ico">${CI[r.category]||'✨'}</div><div class="rb"><b>${esc(r.name)}</b><small>${t('c_'+r.category)} · #${r.public_id}</small></div><span class="live">● ${r.participant_count}/${r.capacity}</span></div>`).join('');
  L.querySelectorAll('.card').forEach(el=>{ const go=()=>join(data.find(x=>x.id===el.dataset.id)); el.onclick=go; el.setAttribute('role','button'); el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}}; });
  };
  let tm; $('#sq').oninput=()=>{ clearTimeout(tm); tm=setTimeout(()=>draw(true),250); }; try{ $('#sc').value=localStorage.getItem('cat')||''; }catch(e){} $('#sc').onchange=()=>{ try{localStorage.setItem('cat',$('#sc').value)}catch(e){} draw(true); };
  await draw(false);
  clearInterval(window._rl); window._rl=setInterval(()=>{ if(!$('#list')) clearInterval(window._rl); else if(!document.hidden) draw(true); },5000);
}

async function join(r){
  const {error}=await sb.rpc('join_room',{p_room:r.id,p_password:null});
  if(error) return toast(error.message);
  cur=r; view='room'; openRoom(r.id);
}

function createView(){
  app.innerHTML = hdr(true)+`<main class="c"><h2>${t('create')}</h2>
    <input id="rn" placeholder="${t('roomName')}" maxlength="60">
    <select id="rc" aria-label="${t('category')}">${['friendship','music','gaming','discussion','other'].map(c=>`<option value="${c}">${t('c_'+c)}</option>`).join('')}</select>
    <select id="rs" aria-label="${t('seats')}"><option value="4">${t('seats')}: 4</option><option value="8" selected>${t('seats')}: 8</option><option value="12">${t('seats')}: 12</option></select>
    <label class="note"><input type="checkbox" id="pv"> ${t('priv')}</label><input id="rp" type="password" placeholder="${t('pw')}"><button class="pri" id="ok">${t('createRoom')}</button><button class="sec" id="no">${t('cancel')}</button></main>`;
  bindHdr(); $('#no').onclick=()=>{ view='rooms'; roomsView(); }; $('#rp').hidden=true; $('#pv').onchange=e=>{ $('#rp').hidden=!e.target.checked; }; $('#rn').focus(); $('#rn').onkeydown=e=>{ if(e.key==='Enter') $('#ok').click(); };
  $('#ok').onclick=()=>once($('#ok'),async()=>{
    if(!$('#rn').value.trim()) return toast(t('roomName'));
    const {data,error}=await sb.rpc('create_room',{p_name:$('#rn').value.trim(),p_description:null,p_category:$('#rc').value,p_language:lang,p_cover_url:null,p_is_private:$('#pv').checked,p_capacity:50,p_seat_count:+$('#rs').value,p_password:$('#pv').checked?($('#rp').value||null):null});
    if(error) return toast(error.message);
    const {data:r}=await sb.from('rooms').select('*').eq('id',data).single(); cur=r; view='room'; openRoom(r.id);
  });
}

async function openRoom(id){
  cleanup(); view='room'; seenMsg.clear(); seenGift.clear();
  const {data:r,error}=await sb.from('rooms').select('*').eq('id',id).single();
  if(error||!r){ view='rooms'; cur=null; return roomsView(); }
  cur=r;
  app.innerHTML = hdr(true)+`<main class="c"><div class="row"><div><h2>${esc(r.name)}</h2><small><span id="cnt"></span><span id="slwi"></span></small></div><span style="display:flex;gap:6px"><button class="sec" id="sh"${r.is_private?' hidden':''}>🔗</button><button class="sec" id="st" hidden>⚙</button><button class="sec" id="lv">${t('leave')}</button></span></div><div id="pin" class="note" hidden></div>
    <h3>${t('speakers')}</h3><div id="seats" class="seats"></div><div id="acts" class="c" style="padding:0"></div>
    <div id="vo" class="row"></div><div id="gf" class="c" style="padding:0"></div><h3>${t('listeners')}</h3><div id="lis" class="chips"></div><h3>${t('chat')}</h3><div id="chat" class="chat" role="log" aria-live="polite" aria-label="${t('chat')}"></div><small id="tp" aria-hidden="true" style="min-height:16px;color:var(--tx2)"></small><div class="ems" id="rx">${RX.map(x=>`<button class="sec" data-r="${x}">${x}</button>`).join('')}</div>
    <div class="send"><input id="mi" enterkeyhint="send" autocomplete="off" placeholder="${t('msg')}" maxlength="500"><button class="pri" id="sd">${t('send')}</button></div></main>`;
  bindHdr();
  $('#lv').onclick=async()=>{ cur._leaving=true; await sb.rpc('leave_room',{p_room:id}); cleanup(); cur=null; view='rooms'; roomsView(); };
  paintMeta();
  $('#sh').onclick=async()=>{ const u=location.origin+location.pathname+'?room='+r.public_id; try{ if(navigator.share) await navigator.share({title:r.name,url:u}); else { await navigator.clipboard.writeText(u); toast(t('copied')); } }catch(e){ if(e&&e.name==='AbortError') return; try{ await navigator.clipboard.writeText(u); toast(t('copied')); }catch(_){ prompt('',u); } } };
  const send=async()=>{ const b=$('#mi').value.trim(); if(!b) return; if(!navigator.onLine) return toast(t('offline')); $('#mi').value=''; const {error}=await sb.from('messages').insert({room_id:id,sender_id:user.id,body:b}); if(error){ $('#mi').value=b; toast(/slow/i.test(error.message)?t('slowErr'):/duplicate/i.test(error.message)?t('dupErr'):error.message); } };
  $('#sd').onclick=send;
  $('#chat').onclick=e=>{ const b=e.target.closest('b'); const mi=$('#mi'); if(!b||!mi) return; mi.value=(mi.value+' @'+b.textContent+' ').trimStart(); mi.focus(); };
  let tl=0; $('#mi').addEventListener('input',()=>{ if(Date.now()-tl<2000||!ch) return; tl=Date.now(); ch.send({type:'broadcast',event:'typing',payload:{u:user.id}}); }); $('#mi').onkeydown=e=>{ if(e.key==='Enter'&&!e.isComposing) send(); };
  let rl=0; $('#rx').querySelectorAll('button').forEach(b=>b.onclick=()=>{ if(Date.now()-rl<400||!ch) return; rl=Date.now(); ch.send({type:'broadcast',event:'react',payload:{e:b.dataset.r}}); });
  await loadMembers(); giftPanel(); renderVoice();
  const {data:ms}=await sb.from('messages').select('id,sender_id,body,created_at').eq('room_id',id).order('created_at',{ascending:false}).limit(50);
  for(const m of (ms||[]).reverse()) await addMsg(m);
  ch=sb.channel('room-'+id,{config:{broadcast:{self:true}}})
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'messages',filter:'room_id=eq.'+id},p=>addMsg(p.new))
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'gift_events',filter:'room_id=eq.'+id},p=>addGift(p.new))
    .on('postgres_changes',{event:'*',schema:'public',table:'room_members',filter:'room_id=eq.'+id},loadSoon)
    .on('postgres_changes',{event:'*',schema:'public',table:'speaker_requests',filter:'room_id=eq.'+id},loadSoon)
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'rooms',filter:'id=eq.'+id},p=>{ if(!cur||!p.new) return; cur.pinned=p.new.pinned; cur.slow_seconds=p.new.slow_seconds; if(p.new.name) cur.name=p.new.name; paintMeta(); })
    .on('broadcast',{event:'react'},({payload})=>flyEmoji(payload&&payload.e))
    .on('broadcast',{event:'typing'},({payload})=>showTyping(payload&&payload.u))
    .subscribe(st=>{ if((st==='CHANNEL_ERROR'||st==='TIMED_OUT')&&navigator.onLine&&cur&&cur.id===id&&!cur._leaving){ clearTimeout(window._rc); window._rc=setTimeout(()=>{ if(cur&&cur.id===id&&view==='room'&&!cur._leaving) openRoom(id); },4000); } });
}

const ICE={iceServers:[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:stun1.l.google.com:19302'},...(CFG.turn||[])]};
let vc=null,vpeers={},vstream=null,vjoined=false;
function myRole(){ const m=members.find(x=>x.user_id===user.id); return m?m.role:'listener'; }
function renderVoice(){ const v=$('#vo'); if(!v) return;
  v.innerHTML=`<button class="sec" id="vj">${vjoined?'🔇 '+t('vleave'):'🎧 '+t('vjoin')}</button>${vjoined?`<button class="${vstream?'pri':'sec'}" id="vm">🎙 ${vstream?t('micoff'):t('mic')}</button>`:''}`;
  $('#vj').onclick=()=>{ if(vjoined){ voiceLeave(); renderVoice(); } else voiceJoin(); };
  const m=$('#vm'); if(m) m.onclick=micToggle; }
const vmon={};
function stopWatch(uid){ const v=vmon[uid]; if(v){ clearInterval(v.timer); try{v.ctx.close();}catch(e){} delete vmon[uid]; } document.querySelectorAll('.av[data-uid="'+uid+'"]').forEach(e=>e.classList.remove('talk')); }
function watchLevel(stream,uid){ stopWatch(uid); try{ const C=window.AudioContext||window.webkitAudioContext; const ctx=new C(); if(ctx.resume) ctx.resume(); const an=ctx.createAnalyser(); an.fftSize=256; ctx.createMediaStreamSource(stream).connect(an); const buf=new Uint8Array(an.fftSize);
  const timer=setInterval(()=>{ an.getByteTimeDomainData(buf); let m=0; for(const x of buf) m=Math.max(m,Math.abs(x-128)); document.querySelectorAll('.av[data-uid="'+uid+'"]').forEach(e=>e.classList.toggle('talk',m>12)); },150); vmon[uid]={ctx,timer}; }catch(e){} }
function vsend(to,d){ vc&&vc.send({type:'broadcast',event:'sig',payload:{from:user.id,to,...d}}); }
function drop(id){ stopWatch(id); const pc=vpeers[id]; if(pc){ try{pc.close();}catch(e){} delete vpeers[id]; } const a=document.getElementById('a'+id); if(a) a.remove(); }
function mkPeer(id){ const pc=new RTCPeerConnection(ICE); vpeers[id]=pc; pc._q=[];
  pc.onicecandidate=e=>{ if(e.candidate) vsend(id,{c:e.candidate}); };
  pc.ontrack=e=>{ let a=document.getElementById('a'+id); if(!a){ a=document.createElement('audio'); a.id='a'+id; a.autoplay=true; a.setAttribute('playsinline',''); document.body.appendChild(a); }
    a.srcObject=e.streams[0]||new MediaStream([e.track]); a.play().catch(()=>{}); watchLevel(a.srcObject,id); };
  pc.onconnectionstatechange=()=>{ if(pc.connectionState==='failed') drop(id); };
  return pc; }
function curTrack(){ return vstream?vstream.getAudioTracks()[0]:null; }
async function vconnect(id){ const pc=mkPeer(id); const tr=pc.addTransceiver('audio',{direction:'sendrecv'}); if(curTrack()) tr.sender.replaceTrack(curTrack());
  await pc.setLocalDescription(await pc.createOffer()); vsend(id,{d:pc.localDescription}); }
async function onSig(p){ if(p.to!==user.id) return; let pc=vpeers[p.from];
  if(p.d&&p.d.type==='offer'){ if(pc) drop(p.from); pc=mkPeer(p.from); await pc.setRemoteDescription(p.d);
    const tr=pc.getTransceivers()[0]; tr.direction='sendrecv'; if(curTrack()) tr.sender.replaceTrack(curTrack());
    pc._q.forEach(c=>pc.addIceCandidate(c).catch(()=>{})); pc._q=[];
    await pc.setLocalDescription(await pc.createAnswer()); vsend(p.from,{d:pc.localDescription}); }
  else if(p.d&&pc){ await pc.setRemoteDescription(p.d); pc._q.forEach(c=>pc.addIceCandidate(c).catch(()=>{})); pc._q=[]; }
  else if(p.c&&pc){ if(pc.remoteDescription) pc.addIceCandidate(p.c).catch(()=>{}); else pc._q.push(p.c); } }
function voiceJoin(){ if(vjoined||!cur) return; vjoined=true; lockOn();
  vc=sb.channel('voice-'+cur.id,{config:{presence:{key:user.id},broadcast:{self:false}}});
  vc.on('broadcast',{event:'sig'},({payload})=>onSig(payload))
    .on('presence',{event:'sync'},()=>{ const ids=Object.keys(vc.presenceState());
      ids.forEach(id=>{ if(id!==user.id&&!vpeers[id]&&user.id<id) vconnect(id); });
      Object.keys(vpeers).forEach(id=>{ if(!ids.includes(id)) drop(id); }); })
    .subscribe(st=>{ if(st==='SUBSCRIBED') vc.track({on:1}); });
  renderVoice(); }
async function micToggle(){ if(vstream){ stopWatch(user.id); vstream.getTracks().forEach(x=>x.stop()); vstream=null; Object.values(vpeers).forEach(pc=>pc.getSenders().forEach(s=>s.replaceTrack(null))); }
  else { if(myRole()==='listener') return toast(t('nomic')); const mm=members.find(x=>x.user_id===user.id); if(mm&&mm.muted) return toast(t('mutedYou'));
    try{ vstream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}}); }catch(e){ return toast(e&&e.name==='NotAllowedError'?t('micden'):e.message); }
    Object.values(vpeers).forEach(pc=>pc.getSenders().forEach(s=>s.replaceTrack(curTrack()))); watchLevel(vstream,user.id); }
  renderVoice(); }
function voiceLeave(){ stopWatch(user&&user.id); Object.keys(vpeers).forEach(drop); if(vstream){ vstream.getTracks().forEach(x=>x.stop()); vstream=null; } if(vc){ sb.removeChannel(vc); vc=null; } vjoined=false; lockOff(); }
async function boardView(){
  app.innerHTML=hdr(true)+`<main class="c"><div class="row"><h2>🏆 ${t('board')}</h2><button class="sec" id="bb">${t('bk')}</button></div><div id="bl2" class="c" style="padding:0"></div></main>`;
  bindHdr(); $('#bb').onclick=()=>{ view='rooms'; roomsView(); };
  const {data,error}=await sb.from('user_levels').select('user_id,level,popularity_points').order('popularity_points',{ascending:false}).limit(20);
  if(error) return toast(error.message);
  const ids=(data||[]).map(x=>x.user_id);
  const {data:ps}=ids.length?await sb.from('profiles').select('id,display_name,avatar_url').in('id',ids):{data:[]};
  (ps||[]).forEach(x=>{names[x.id]=x.display_name;avs[x.id]=x.avatar_url||'';});
  const L=$('#bl2'); if(!L) return;
  L.innerHTML=(data||[]).map((r,i)=>`<div class="card"><div class="row"><span style="display:flex;align-items:center;gap:8px"><b>${['🥇','🥈','🥉'][i]||'#'+(i+1)}</b><span class="av xs ${avCls(r.user_id)}">${avInner(r.user_id)}</span><b>${esc(names[r.user_id]||'?')}</b></span><span class="gold">${t('lvl')} ${r.level} · ${r.popularity_points} ★</span></div></div>`).join('');
}
async function profileView(){
  if(cur){ cur._leaving=true; await sb.rpc('leave_room',{p_room:cur.id}); cleanup(); cur=null; }
  view='profile';
  const {data:me}=await sb.from('profiles').select('display_name,bio,avatar_url').eq('id',user.id).single();
  let av=me?.avatar_url||'';
  const E=['','🦊','🐼','🦁','🐯','🐸','🐧','🦄','🐙','🚀','🌙','🔥','🎧'];
  app.innerHTML=hdr(true)+`<main class="c"><h2>${t('pf')}</h2><div id="pvw" class="av pfp"></div><div class="row" style="justify-content:center"><button class="pri" id="up">📷 ${t('upl')}</button><button class="sec" id="rm">${t('rmp')}</button></div><input id="uf" type="file" accept="image/*" hidden><input id="pn" maxlength="40" value="${esc(me?.display_name||'')}"><textarea id="pb" maxlength="300" rows="3" placeholder="${t('bio')}">${esc(me?.bio||'')}</textarea><button class="sec" id="nt" type="button">🔔 ${t('notif')}</button><b>${t('pfav')}</b><div class="ems" id="em2">${E.map(x=>`<button class="sec" data-e="${x}">${x||'A'}</button>`).join('')}</div><div class="row"><button class="pri" id="ps">${t('pfsave')}</button><button class="sec" id="pk">${t('bk')}</button></div></main>`;
  bindHdr();
  const paint=()=>{ const p=$('#pvw'); const em=av.startsWith('emoji:')?av.slice(6):'';
    p.className='av pfp'+(em?' emo':'');
    p.innerHTML=av.startsWith('http')?`<img src="${esc(av)}" alt="">`:em?esc(em):esc((($('#pn').value||me?.display_name||'?')[0]||'?').toUpperCase());
    $('#em2').querySelectorAll('button').forEach(x=>x.classList.toggle('on',(!av.startsWith('http'))&&x.dataset.e===em)); };
  $('#em2').querySelectorAll('button').forEach(x=>x.onclick=()=>{ av=x.dataset.e?'emoji:'+x.dataset.e:''; paint(); });
  $('#rm').onclick=()=>{ av=''; paint(); };
  $('#pn').oninput=()=>{ if(!av) paint(); };
  $('#up').onclick=()=>$('#uf').click();
  $('#nt').onclick=async()=>{ if(!('Notification' in window)) return toast(t('notNo')); const p=await Notification.requestPermission(); toast(t(p==='granted'?'notOn':'notNo')); };
  $('#uf').onchange=async e=>{ const f=e.target.files[0]; if(!f) return; if(!f.type.startsWith('image/')) return toast(t('up_bad')); toast(t('up_busy'));
    try{ const blob=await shrink(f,256), path=user.id+'/avatar.jpg';
      const {error}=await sb.storage.from('avatars').upload(path,blob,{upsert:true,contentType:'image/jpeg',cacheControl:'3600'}); if(error) throw error;
      av=sb.storage.from('avatars').getPublicUrl(path).data.publicUrl+'?v='+Date.now(); paint();
      const r=await sb.from('profiles').update({avatar_url:av}).eq('id',user.id); if(r.error) throw r.error; toast(t('up_ok'));
    }catch(err){ toast(err.message||String(err)); } };
  $('#pk').onclick=()=>{ view='rooms'; roomsView(); };
  $('#ps').onclick=()=>once($('#ps'),async()=>{ const n=$('#pn').value.trim(); if(!n) return;
    const {error}=await sb.from('profiles').update({display_name:n,bio:$('#pb').value.trim()||null,avatar_url:av||null}).eq('id',user.id);
    if(error) return toast(error.message); names[user.id]=n; avs[user.id]=av; toast('✓'); view='rooms'; roomsView(); });
  paint();
}
let giftList=[];
const GE={rose:'🌹',heart:'❤️',love:'❤️',crown:'👑',diamond:'💎',car:'🚗',rocket:'🚀',star:'⭐',coffee:'☕',cake:'🎂',ring:'💍',lion:'🦁',castle:'🏰',fire:'🔥',kiss:'💋',teddy:'🧸',bear:'🧸',flower:'🌸',trophy:'🏆',gold:'🪙',coin:'🪙',balloon:'🎈',panda:'🐼',yacht:'🛥️',plane:'✈️'};
function gEmoji(g){ if(!g) return '🎁'; const n=(g.name&&(g.name.en||''))||''; const m=n.match(/^\p{Extended_Pictographic}/u); if(m) return m[0]; const k=((g.code||'')+' '+n).toLowerCase(); for(const w in GE) if(k.includes(w)) return GE[w]; return '🎁'; }
let gSel=null, gQty=1;
async function giftPanel(){
  const g=$('#gf'); if(!g) return;
  const [{data:gs},{data:w}]=await Promise.all([sb.from('gifts').select('id,code,name,price_coins').eq('is_active',true).order('price_coins'),sb.from('wallets').select('balance').eq('user_id',user.id).maybeSingle()]);
  giftList=gs||[]; if(!giftList.find(x=>x.id===gSel)) gSel=giftList[0]?giftList[0].id:null;
  g.innerHTML=`<div class="row"><b>🎁 ${t('gift')}</b><span class="gold">${t('bal')}: <span id="bl">${w?w.balance:0}</span></span></div><div class="gg">${giftList.map(x=>`<button class="gi${x.id===gSel?' on':''}" data-g="${x.id}" title="${esc(x.name[lang]||x.name.en)}"><span>${gEmoji(x)}</span><small>${esc(x.name[lang]||x.name.en)}</small><small class="gold">${x.price_coins}</small></button>`).join('')}</div><div class="row"><select id="gr" aria-label="${t('to')}"></select><div class="ems" id="gq">${[1,5,10,50].map(n=>`<button class="sec${n===gQty?' on':''}" data-q="${n}">×${n}</button>`).join('')}</div></div><button class="pri" id="gs"></button>`;
  fillRecv();
  const tot=()=>{ const x=giftList.find(y=>y.id===gSel); $('#gs').textContent=`${gEmoji(x)} ${t('gift')} ×${gQty}`+(x?' · '+x.price_coins*gQty:''); }; tot();
  g.querySelectorAll('.gi').forEach(b=>b.onclick=()=>{ gSel=b.dataset.g; g.querySelectorAll('.gi').forEach(e=>e.classList.toggle('on',e===b)); tot(); });
  g.querySelectorAll('#gq button').forEach(b=>b.onclick=()=>{ gQty=+b.dataset.q; g.querySelectorAll('#gq button').forEach(e=>e.classList.toggle('on',e===b)); tot(); });
  $('#gs').onclick=()=>once($('#gs'),async()=>{ const r=$('#gr').value; if(!r) return toast(t('nogift')); if(!gSel) return;
    const {error}=await sb.rpc('send_gift',{p_room:cur.id,p_receiver:r,p_gift:gSel,p_quantity:gQty,p_idempotency_key:crypto.randomUUID()});
    if(error) return toast(error.message); toast(t('gsent'));
    const {data:w2}=await sb.from('wallets').select('balance').eq('user_id',user.id).maybeSingle(); if($('#bl')) $('#bl').textContent=w2?w2.balance:0; });
}
function fillRecv(){ const r=$('#gr'); if(!r) return; const v=r.value;
  r.innerHTML=members.filter(m=>m.user_id!==user.id).map(m=>`<option value="${m.user_id}">${esc(names[m.user_id]||'?')}</option>`).join(''); if(v) r.value=v; }
async function nameOf(id){
  if(!names[id]){ const {data}=await sb.from('profiles').select('display_name').eq('id',id).single(); names[id]=data?.display_name||'?'; }
  return names[id];
}
async function addGift(e){
  const box=$('#chat'); if(!box) return; if(e.id){ if(seenGift.has(e.id)) return; seenGift.add(e.id); } const [a,b]=await Promise.all([nameOf(e.sender_id),nameOf(e.receiver_id)]);
  const g=giftList.find(x=>x.id===e.gift_id); const gn=(g?gEmoji(g)+' '+(g.name[lang]||g.name.en):'🎁');
  const d=document.createElement('div'); d.className='m gold'; d.textContent=`🎁 ${a} ${t('gmsg')} ${gn} ×${e.quantity} → ${b}`;
  pushChat(box,d);
  const em=gEmoji(g); for(let i=0;i<Math.min(e.quantity||1,8);i++) setTimeout(()=>{ const f=document.createElement('div'); f.className='fly'; f.textContent=em; f.style.left=(8+Math.random()*80)+'vw'; document.body.appendChild(f); setTimeout(()=>f.remove(),2600); },i*180);
}
async function addMsg(m){
  const box=$('#chat'); if(!box) return; if(m.id){ if(seenMsg.has(m.id)) return; seenMsg.add(m.id); } const n=await nameOf(m.sender_id);
  const d=document.createElement('div'); d.className='m'+(m.sender_id===user.id?' me':'')+(user&&names[user.id]&&m.sender_id!==user.id&&(m.body||'').toLowerCase().includes('@'+names[user.id].toLowerCase())?' mn':''); d.innerHTML=`<b>${esc(n)}</b>${lvb(m.sender_id)} ${linkify(m.body)}${m.created_at?`<small class="tm">${new Date(m.created_at).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</small>`:''}`;
  pushChat(box,d);
}

let lmT; function loadSoon(){ clearTimeout(lmT); lmT=setTimeout(loadMembers,200); }
async function loadMembers(){
  if(!cur) return;
  const {data}=await sb.from('room_members').select('user_id,role,seat_index,muted,profiles(display_name,avatar_url)').eq('room_id',cur.id).is('left_at',null);
  members=data||[]; members.forEach(m=>{names[m.user_id]=m.profiles?.display_name||'?'; const a=m.profiles?.avatar_url; avs[m.user_id]=a||'';});
  try{ const need=members.map(m=>m.user_id).filter(u=>!(u in lvls)); if(need.length){ need.forEach(u=>lvls[u]=0); const {data:lv}=await sb.from('user_levels').select('user_id,level').in('user_id',need); (lv||[]).forEach(x=>lvls[x.user_id]=x.level); } }catch(e){}
  if(!$('#seats')||!cur) return;
  const me=members.find(m=>m.user_id===user.id);
  if(me) cur._in=true; else if(cur._in){ if(cur._leaving) return; cur._leaving=true; const {data:rr}=await sb.from('rooms').select('is_live').eq('id',cur.id).maybeSingle(); toast(t(rr&&rr.is_live===false?'closed':'removed')); cleanup(); cur=null; view='rooms'; roomsView(); return; }
  if(me&&vstream&&(me.muted||me.seat_index==null)){ micToggle(); if(me.muted) toast(t('mutedYou')); }
  const st=$('#st'); if(st){ st.hidden=!(me&&rank(me.role)>=3); st.onclick=roomSettings2; }
  fillRecv(); $('#cnt').textContent=`${members.length}/${cur.capacity}`;
  let s=''; for(let i=0;i<cur.seat_count;i++){ const m=members.find(x=>x.seat_index===i);
    s+= m ? `<div class="seat" ${m.user_id!==user.id?`data-u="${m.user_id}"`:''}><div class="avw"><div class="av ${m.role==='owner'?'own':''} ${avCls(m.user_id)}" data-uid="${m.user_id}">${avInner(m.user_id)}</div>${m.muted?'<span class="mu">🔇</span>':''}${m.role==='owner'?'<span class="cr">👑</span>':''}</div><small>${m.role==='moderator'||m.role==='admin'?'🛡 ':''}${esc(names[m.user_id])}${lvb(m.user_id)}</small></div>` : `<div class="seat"><div class="avw"><div class="av empty">+</div></div></div>`; }
  $('#seats').innerHTML=s;
  $('#seats').querySelectorAll('.av.empty').forEach(e=>{ e.setAttribute('role','button'); e.tabIndex=0; e.style.cursor='pointer'; e.setAttribute('aria-label',t('speak'));
    const go=async()=>{ const m2=members.find(x=>x.user_id===user.id); if(!m2||m2.seat_index!=null) return; const {error}=await sb.rpc('request_to_speak',{p_room:cur.id}); toast(error?error.message:t('sent')); };
    e.onclick=go; e.onkeydown=ev=>{ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); go(); } }; });
  $('#lis').innerHTML=members.filter(m=>m.seat_index==null).map(m=>`<span class="chip" ${m.user_id!==user.id?`data-u="${m.user_id}"`:''}><span class="av xs ${avCls(m.user_id)}">${avInner(m.user_id)}</span>${esc(names[m.user_id])}${lvb(m.user_id)}</span>`).join('');
  document.querySelectorAll('[data-u]').forEach(el=>{ el.tabIndex=0; el.setAttribute('role','button'); el.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); userSheet(el.dataset.u); } }; el.onclick=()=>userSheet(el.dataset.u); });
  let a='';
  if(me && me.seat_index==null) a+=`<button class="sec" id="rq">${t('speak')}</button>`;
  if(me && rank(me.role)>=3){
    const {data:q}=await sb.from('speaker_requests').select('id,user_id').eq('room_id',cur.id).eq('status','pending');
    if(q&&q.length) a+=`<h3>${t('requests')}</h3>`+q.map(x=>`<div class="row"><span>${esc(names[x.user_id]||'?')}</span><span><button class="pri" data-a="1" data-id="${x.id}">${t('accept')}</button> <button class="sec" data-a="0" data-id="${x.id}">${t('reject')}</button></span></div>`).join('');
  }
  const acts=$('#acts'); if(!acts) return; acts.innerHTML=a;
  const rq=$('#rq'); if(rq) rq.onclick=async()=>{ const {error}=await sb.rpc('request_to_speak',{p_room:cur.id}); toast(error?error.message:t('sent')); };
  acts.querySelectorAll('button[data-id]').forEach(b=>b.onclick=async()=>{ const {error}=await sb.rpc('resolve_speaker_request',{p_request:b.dataset.id,p_accept:b.dataset.a==='1'}); if(error) toast(error.message); loadMembers(); });
}

sb.auth.onAuthStateChange((_e,s)=>{ const u=s?.user||null; if(u?.id===user?.id && view) return; user=u; if(u) startNotifs(); else stopNotifs(); setTimeout(route,0); });
document.documentElement.dir = lang==='ar'?'rtl':'ltr';

async function inboxView(){
  if(dch){ sb.removeChannel(dch); dch=null; }
  app.innerHTML=hdr(true)+`<main class="c"><div class="row"><button class="ghost" id="bk">← ${t('bk')}</button><h2>${t('dm')}</h2></div><h3>${t('fing')}</h3><div id="fl" class="c" style="padding:0"></div><h3>${t('convs')}</h3><div id="cv" class="c" style="padding:0"></div><h3>⛔ ${t('blkL')}</h3><div id="bl3" class="c" style="padding:0"></div></main>`;
  sb.rpc('list_blocked').then(({data})=>{ const e=$('#bl3'); if(!e) return; e.innerHTML=(data||[]).length?data.map(x=>`<div class="card"><div class="row"><b>${esc(x.display_name||'?')}</b><button class="sec" data-u="${x.user_id}">${t('unblk')}</button></div></div>`).join(''):`<p class="note">${t('nodm')}</p>`;
    e.querySelectorAll('button').forEach(b=>b.onclick=async()=>{ const {error}=await sb.rpc('unblock_user',{p_user:b.dataset.u}); toast(error?error.message:t('unblkd')); if(!error) inboxView(); }); });
  bindHdr(); $('#bk').onclick=()=>{ view='rooms'; roomsView(); };
  const [{data:f},{data:m}]=await Promise.all([sb.from('follow_links').select('followed').eq('follower',user.id),sb.from('dms').select('sender_id,receiver_id').or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`).order('created_at',{ascending:false}).limit(100)]);
  const fl=(f||[]).map(x=>x.followed), cv=[]; (m||[]).forEach(x=>{ const o=x.sender_id===user.id?x.receiver_id:x.sender_id; if(!cv.includes(o)) cv.push(o); });
  const ids=[...new Set([...fl,...cv])]; if(ids.length){ const {data:ps}=await sb.from('profiles').select('id,display_name,avatar_url').in('id',ids); (ps||[]).forEach(p=>{ names[p.id]=p.display_name; avs[p.id]=p.avatar_url||''; }); }
  const card=id=>`<div class="card rc" data-u="${id}"><div class="av sm ${avCls(id)}">${avInner(id)}</div><div class="rb"><b>${esc(names[id]||'?')}</b></div><span>✉</span></div>`;
  const put=(sel,a)=>{ const e=$(sel); if(!e) return; e.innerHTML=a.length?a.map(card).join(''):`<p class="note">${t('nodm')}</p>`; e.querySelectorAll('.card').forEach(c=>c.onclick=()=>dmView(c.dataset.u)); };
  put('#fl',fl); put('#cv',cv);
}
async function dmView(uid){
  cleanup(); cur=null; dmPeer=uid; view='dm'; await nameOf(uid);
  app.innerHTML=hdr(true)+`<main class="c"><div class="row"><button class="ghost" id="bk">← ${t('bk')}</button><b>${esc(names[uid]||'?')}</b></div><div class="chat" id="dc" role="log" aria-live="polite" style="height:55vh"></div><div class="send"><input id="di" enterkeyhint="send" autocomplete="off" maxlength="1000" placeholder="${t('msg')}"><button class="pri" id="ds">➤</button></div></main>`;
  bindHdr(); const box=$('#dc');
  const add=m=>{ const e=document.createElement('div'); const mine=m.sender_id===user.id; e.className='m'+(mine?' me':''); const mm=/\[\[room:([0-9a-f-]{36})\]\]/.exec(m.body||''); if(mm) e.textContent=m.body.replace(mm[0],'').trim(); else e.innerHTML=linkify(m.body); if(m.id) e.dataset.id=m.id;
    if(mm){ const jb=document.createElement('button'); jb.className='pri'; jb.style.cssText='display:block;margin-top:6px;padding:6px 14px'; jb.textContent=t('invJoin'); jb.onclick=async()=>{ const r=await sb.rpc('join_room',{p_room:mm[1],p_password:null}); if(r.error) return toast(r.error.message); cur={id:mm[1]}; view='room'; openRoom(mm[1]); }; e.appendChild(jb); }
    if(mine){ const k=document.createElement('small'); k.className='tk'; k.style.cssText='margin-inline-start:6px;opacity:.9'; k.textContent=m.read_at?'✓✓ '+t('readMark'):'✓'; if(m.read_at) k.style.color='#4dd4e6'; e.appendChild(k); }
    pushChat(box,e); };
  $('#bk').onclick=()=>{ if(dch){ sb.removeChannel(dch); dch=null; } view='inbox'; inboxView(); };
  const {data}=await sb.from('dms').select('id,sender_id,body,read_at').or(`and(sender_id.eq.${user.id},receiver_id.eq.${uid}),and(sender_id.eq.${uid},receiver_id.eq.${user.id})`).order('created_at',{ascending:false}).limit(50);
  (data||[]).reverse().forEach(add);
  sb.rpc('mark_dm_read',{p_peer:uid}).then(()=>refreshUnread());
  dch=sb.channel('dm-'+user.id)
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'dms',filter:'sender_id=eq.'+user.id},p=>{ if(!p.new.read_at) return; const el=box.querySelector('[data-id="'+p.new.id+'"] .tk'); if(el){ el.textContent='✓✓ '+t('readMark'); el.style.color='#4dd4e6'; } })
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'dms',filter:'receiver_id=eq.'+user.id},p=>{ if(p.new.sender_id===uid){ add(p.new); sb.rpc('mark_dm_read',{p_peer:uid}); } }).subscribe();
  const send=async()=>{ const b=$('#di').value.trim(); if(!b) return; if(!navigator.onLine) return toast(t('offline')); $('#di').value=''; const {data:ins,error}=await sb.from('dms').insert({sender_id:user.id,receiver_id:uid,body:b}).select('id,read_at').single(); if(error) toast(error.message); else add({id:ins&&ins.id,sender_id:user.id,body:b,read_at:ins&&ins.read_at}); };
  $('#ds').onclick=send; $('#di').onkeydown=e=>{ if(e.key==='Enter'&&!e.isComposing) send(); };
}

document.documentElement.lang=lang;
Object.assign(T.en,{share:'Share link',offline:'You are offline'});
Object.assign(T.fr,{share:'Partager le lien',offline:'Vous êtes hors ligne'});
Object.assign(T.ar,{share:'مشاركة الرابط',offline:'لا يوجد اتصال بالإنترنت'});
Object.assign(T.en,{showpw:'Show password',micden:'Microphone access was denied. Allow it in your browser settings.'});
Object.assign(T.fr,{showpw:'Afficher le mot de passe',micden:'Accès au micro refusé. Autorisez-le dans les réglages du navigateur.'});
Object.assign(T.ar,{showpw:'إظهار كلمة المرور',micden:'تم رفض الوصول للمايك. اسمح به من إعدادات المتصفح.'});
setInterval(()=>{ if(user&&!document.hidden) refreshUnread(); },60000);
function linkify(x){ return esc(x).replace(/https?:\/\/[^\s<]+/g,u=>`<a href="${u}" target="_blank" rel="noopener noreferrer" style="color:var(--cy)">${u}</a>`); }
function showTyping(u){ if(!u||u===user.id||!names[u]) return; const e=$('#tp'); if(!e) return; e.textContent='✎ '+names[u]+' '+t('typing'); clearTimeout(showTyping.h); showTyping.h=setTimeout(()=>{ const x=$('#tp'); if(x) x.textContent=''; },3000); }
let wlk=null; async function lockOn(){ try{ if(navigator.wakeLock&&!wlk){ wlk=await navigator.wakeLock.request('screen'); wlk.addEventListener('release',()=>{ wlk=null; }); } }catch(e){} }
function lockOff(){ try{ if(wlk) wlk.release(); }catch(e){} wlk=null; }
document.addEventListener('visibilitychange',()=>{ if(!document.hidden&&vjoined) lockOn(); });
function friendly(m){ m=String(m==null?'':m); const r=[[/invalid login/i,'e_cred'],[/already registered/i,'e_exists'],[/at least \d+ char/i,'e_short'],[/not confirmed/i,'e_unconf'],[/failed to fetch|networkerror|load failed/i,'e_net'],[/rate limit|too many/i,'e_rate']]; for(const [x,k] of r) if(x.test(m)) return t(k); return m; }
Object.assign(T.en,{e_cred:'Wrong email or password',e_exists:'This email already has an account',e_short:'Password is too short',e_unconf:'Confirm your email first',e_net:'Connection problem, try again',e_rate:'Too many attempts, wait a moment',notif:'Enable notifications',notOn:'Notifications enabled',notNo:'Notifications are blocked or unsupported'});
Object.assign(T.fr,{e_cred:'E-mail ou mot de passe incorrect',e_exists:'Cet e-mail a déjà un compte',e_short:'Mot de passe trop court',e_unconf:'Confirmez d’abord votre e-mail',e_net:'Problème de connexion, réessayez',e_rate:'Trop de tentatives, patientez',notif:'Activer les notifications',notOn:'Notifications activées',notNo:'Notifications bloquées ou non prises en charge'});
Object.assign(T.ar,{e_cred:'البريد أو كلمة المرور غير صحيحة',e_exists:'هاد البريد عندو حساب من قبل',e_short:'كلمة المرور قصيرة',e_unconf:'أكّد بريدك أولاً',e_net:'مشكل فالاتصال، عاود المحاولة',e_rate:'محاولات كثيرة، تسنى شوية',notif:'تفعيل الإشعارات',notOn:'تم تفعيل الإشعارات',notNo:'الإشعارات محظورة أو غير مدعومة'});
addEventListener('popstate',()=>{ pushed=false; if(!user) return;
  if(document.getElementById('sheet')){ closeSheet(); try{ history.pushState({v:1},''); pushed=true; }catch(e){} return; }
  if(view==='room'&&cur&&$('#lv')){ $('#lv').click(); return; }
  if(view!=='rooms'){ cleanup(); cur=null; view='rooms'; roomsView(); } });
Object.assign(T.en,{retry:'Retry'});Object.assign(T.fr,{retry:'Réessayer'});Object.assign(T.ar,{retry:'إعادة المحاولة'});
if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost')) addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
function netUI(){ const o=document.getElementById('off'); if(o){ o.textContent=t('offline'); o.hidden=navigator.onLine; } }
addEventListener('online',()=>{ netUI(); if(user){ refreshUnread(); if(view==='room'&&cur) loadMembers(); } });
addEventListener('offline',netUI); netUI();
document.addEventListener('visibilitychange',()=>{ if(!document.hidden&&user){ refreshUnread(); if(view==='room'&&cur) loadMembers(); } });
addEventListener('unhandledrejection',e=>{ const m=e.reason&&e.reason.message; if(m&&!/abort/i.test(m)) toast(m); });
