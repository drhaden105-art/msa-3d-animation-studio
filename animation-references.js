/* Sibling Studios — Animation Reference Links */
(function(){
  function addPanel(){
    const studio=document.getElementById('studio');
    if(!studio || document.getElementById('animationReferencePanel')) return;
    const panel=document.createElement('div');
    panel.id='animationReferencePanel';
    panel.className='panel animation-reference-panel';
    panel.innerHTML=`<div class="head">🎬 Animation Style References</div><div class="body"><p class="muted">Add 1, 2, or 3 links showing how you want the animation to look. These are style references for your production.</p><input id="ref1" placeholder="Reference Link 1" type="url"><input id="ref2" placeholder="Reference Link 2 (optional)" type="url"><input id="ref3" placeholder="Reference Link 3 (optional)" type="url"><div class="buttons"><button id="saveRefs">💾 Save References</button><button class="dark" id="clearRefs">Clear</button></div><p id="refStatus" class="status">No references saved.</p></div>`;
    const target=studio.querySelector('.studio');
    if(target) target.appendChild(panel); else studio.appendChild(panel);
    const fields=[panel.querySelector('#ref1'),panel.querySelector('#ref2'),panel.querySelector('#ref3')];
    fields.forEach((f,i)=>f.value=localStorage.getItem('msa-animation-ref-'+(i+1))||'');
    panel.querySelector('#saveRefs').onclick=()=>{fields.forEach((f,i)=>localStorage.setItem('msa-animation-ref-'+(i+1),f.value.trim()));panel.querySelector('#refStatus').textContent='References saved for this project.'};
    panel.querySelector('#clearRefs').onclick=()=>{fields.forEach((f,i)=>{f.value='';localStorage.removeItem('msa-animation-ref-'+(i+1))});panel.querySelector('#refStatus').textContent='References cleared.'};
  }
  const style=document.createElement('style');
  style.textContent='#animationReferencePanel{margin-top:14px}.animation-reference-panel input{display:block;width:100%;margin:7px 0;background:#090d29;color:#fff;border:1px solid #343c72;border-radius:8px;padding:10px}';
  document.head.appendChild(style);
  const timer=setInterval(()=>{if(document.getElementById('studio')){addPanel();clearInterval(timer)}},100);
})();