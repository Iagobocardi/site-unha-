const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('.main-nav');
const closeMenu=()=>{menuButton.classList.remove('is-active');menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu')};
menuButton.addEventListener('click',()=>{const isOpen=menu.classList.toggle('is-open');menuButton.classList.toggle('is-active',isOpen);menuButton.setAttribute('aria-expanded',String(isOpen));menuButton.setAttribute('aria-label',isOpen?'Fechar menu':'Abrir menu')});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMenu()});
document.getElementById('current-year').textContent=String(new Date().getFullYear());
const items=[...document.querySelectorAll('.gallery-item')];
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightbox-img');
const lightboxCaption=document.getElementById('lightbox-caption');
const closeButton=document.querySelector('.lightbox-close');
let current=0,lastFocus=null;
function renderLightbox(){const card=items[current];const img=card.querySelector('img');lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightboxCaption.textContent=card.querySelector('.gallery-info strong').textContent}
function showLightbox(i){lastFocus=document.activeElement;current=i;renderLightbox();lightbox.classList.add('is-open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('lightbox-open');closeButton.focus()}
function hideLightbox(){lightbox.classList.remove('is-open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('lightbox-open');lightboxImg.removeAttribute('src');if(lastFocus)lastFocus.focus()}
function moveLightbox(step){current=(current+step+items.length)%items.length;renderLightbox()}
items.forEach((card,index)=>card.addEventListener('click',()=>showLightbox(index)));
closeButton.addEventListener('click',hideLightbox);
document.querySelector('.lightbox-prev').addEventListener('click',()=>moveLightbox(-1));
document.querySelector('.lightbox-next').addEventListener('click',()=>moveLightbox(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)hideLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(lightbox.classList.contains('is-open'))hideLightbox();else closeMenu()}if(lightbox.classList.contains('is-open')){if(e.key==='ArrowLeft')moveLightbox(-1);if(e.key==='ArrowRight')moveLightbox(1);if(e.key==='Tab'){e.preventDefault();const focusables=[closeButton,document.querySelector('.lightbox-prev'),document.querySelector('.lightbox-next')];focusables[(focusables.indexOf(document.activeElement)+ (e.shiftKey?-1:1)+focusables.length)%focusables.length].focus()}}});
