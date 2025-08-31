// Burger menu
const nav = document.querySelector('.nav');
document.querySelector('.burger').addEventListener('click', ()=>{
  nav.classList.toggle('open');
});

// IntersectionObserver for scroll reveal
function reveal(elements, cls='visible', rootMargin='-80px'){
  const obs = new IntersectionObserver((entries, observer)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add(cls);
        observer.unobserve(e.target);
      }
    });
  }, {root:null, rootMargin, threshold:0.12});
  elements.forEach(el=>obs.observe(el));
}
reveal(document.querySelectorAll('.section'));
reveal(document.querySelectorAll('.card'));
reveal(document.querySelectorAll('.tl-content'));

// Typewriter effect on about appear
const about = document.querySelector('#about');
const tw = document.getElementById('typewriter');
let typed = false;
const obsTW = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && !typed){
      typed = true;
      typewriter(tw.dataset.text, tw, 22);
      obsTW.disconnect();
    }
  });
},{threshold:0.2});
obsTW.observe(about);

function typewriter(text, el, delay=30){
  el.textContent = '';
  let i = 0;
  (function tick(){
    el.textContent += text.charAt(i);
    i++;
    if(i < text.length){ setTimeout(tick, delay); }
  })();
}

// Smooth scroll
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',(e)=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    nav.classList.remove('open');
  });
});

// Photo placeholders: replace with your images in /assets
// Example:
// document.querySelector('.photos .grid-item:nth-child(1) .ph').style.backgroundImage = "url('assets/photo1.jpg')";
