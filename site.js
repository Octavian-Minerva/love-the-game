
function quickExit(){try{location.replace('https://www.bom.gov.au/');}catch(e){location.href='https://www.bom.gov.au/';}}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){quickExit();}});
document.querySelectorAll('.pledge form').forEach(function(f){
  var box=f.closest('.pledge'),c=box.querySelector('.count');
  if(localStorage.getItem('ltg-pledged')){box.classList.add('done');if(c)c.textContent='1';}
  f.addEventListener('submit',function(e){e.preventDefault();try{localStorage.setItem('ltg-pledged','1');}catch(x){}
    box.classList.add('done');if(c)c.textContent='1';});
});
