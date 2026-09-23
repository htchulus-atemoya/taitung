
(() => {
 const photos=[...document.querySelectorAll('.card img')].filter(img=>!img.closest('a'));
 if(!photos.length || document.querySelector('#viewer'))return;
 const modal=document.createElement('dialog');modal.className='site-lightbox';modal.setAttribute('aria-label','照片放大檢視');
 const close=document.createElement('button');close.textContent='關閉照片';close.type='button';
 const full=document.createElement('img'), caption=document.createElement('p');
 modal.append(close,full,caption);document.body.append(modal);
 close.addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
 photos.forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');img.style.cursor='zoom-in';
 const show=()=>{full.src=img.currentSrc||img.src;full.alt=img.alt;caption.textContent=img.alt;modal.showModal()};
 img.closest('.card').addEventListener('click',show);
 img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show()}});
 });
})();
