/* Presentation enhancements. Course data, scoring and saved progress stay in bundle.js. */
const groupNames={0:'01 / BONDING & STRUCTURE',8:'02 / MATTER & MIXTURES',12:'03 / REACTIONS & ENERGY',16:'04 / EQUILIBRIUM & ELECTRONS',19:'THE FINAL CHALLENGE'};
function polishNavigation(){
 const buttons=[...document.querySelectorAll('#nav > button')];
 buttons.forEach((button,i)=>{
  if(button.dataset.styled)return;
  button.dataset.styled='true';const label=button.textContent.replace(/^✓ /,'');
  button.innerHTML='<span class="lesson-number">'+(button.textContent.startsWith('✓')?'✓':String(i+1).padStart(2,'0'))+'</span><span>'+label+'</span>'+(button.disabled?'<span class="lock" aria-label="Locked">⌑</span>':'');
  if(button.classList.contains('on'))button.setAttribute('aria-current','step');
  if(groupNames[i]){const heading=document.createElement('p');heading.className='unit-label';heading.textContent=groupNames[i];button.before(heading)}
 });
}
function polishLesson(){
 document.querySelectorAll('.challenge-title > span').forEach(el=>{if(!el.querySelector('svg'))el.innerHTML='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M15 5h10m-8 0v12L8 31q-2 5 4 5h16q6 0 4-5l-9-14V5M13 25h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="19" cy="29" r="2" fill="currentColor"/></svg>'});
 document.querySelectorAll('.game .fb.good,.game .fb.bad').forEach(el=>{if(!el.querySelector('.feedback-illustration')){const img=document.createElement('img');img.className='feedback-illustration';img.src=el.classList.contains('good')?'/assets/success.svg':'/assets/spill.svg';img.alt=el.classList.contains('good')?'Scientist with goggles, bubbling beaker and thumbs-up':'Tipped beaker and spilled liquid';el.prepend(img)}});
 const active=document.querySelector('#nav .on');
 document.querySelector('#learnTab').classList.toggle('active',!document.querySelector('.game.mission'));
 document.querySelector('#missionBtn').classList.toggle('active',!!document.querySelector('.game.mission'));
}
polishNavigation();polishLesson();
if(matchMedia('(max-width:760px)').matches)document.querySelector('.course-list').open=false;
document.querySelector('#startupStatus').textContent='Your progress is saved on this device.';
new MutationObserver(polishNavigation).observe(document.querySelector('#nav'),{childList:true});
new MutationObserver(polishLesson).observe(document.querySelector('#main'),{childList:true,subtree:true});
document.querySelector('#learnTab').onclick=()=>{lesson();document.querySelector('#main').scrollIntoView({behavior:'smooth',block:'start'})};
document.querySelector('#askAtom').onclick=()=>document.querySelector('#helperLaunch').click();
document.querySelector('#helper').addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('#helper').hidden=true;document.querySelector('#helperLaunch').focus()}});
