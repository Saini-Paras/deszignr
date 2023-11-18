const overlay=document.querySelector('.overlay');
const closeBtn=document.querySelector('.close-btn');
const openBtn=document.querySelector('.open-btn');
const toggleMenu=document.querySelector('.toggle-menu');

openBtn.addEventListener('mousemove',()=>{
  cursor.classList.add('menu-active')
})
openBtn.addEventListener('mouseout',()=>{
  cursor.classList.remove('menu-active')
})
closeBtn.addEventListener('mousemove',()=>{
    cursor.classList.add('menu-active')
  })
  closeBtn.addEventListener('mouseout',()=>{
    cursor.classList.remove('menu-active')
  })

const menuCloseFunc=()=>{
    overlay.style.display='none';
    toggleMenu.classList.remove('show')
    openBtn.style.opacity='1'
}
const menuOpenFunc=()=>{
    overlay.style.display='block';
    toggleMenu.classList.add('show')
    openBtn.style.opacity='0'
}

closeBtn.addEventListener('click',menuCloseFunc)
overlay.addEventListener('click',menuCloseFunc)
openBtn.addEventListener('click',menuOpenFunc)


const cursor=document.querySelector('.cursor')

window.addEventListener('mousemove',function(e){
    cursor.style.display ='flex' ;
    const top=e.clientY;
    const left=e.clientX;
    const random=Math.floor(Math.random()*50)
    cursor.style.left = `${left}px`;
  cursor.style.top = `${top}px`;
})
window.addEventListener('mouseout',()=>{
    // cursor.style.display='none'
})


// =============PROJECTS 
const projectsCard=document.querySelectorAll('.project');
const projectCursor=document.querySelector('.project-cursor')

projectsCard.forEach(pCard=>{
    pCard.addEventListener('mousemove',function(e){
        cursor.classList.add('project-active')
    })
    pCard.addEventListener('mouseleave',()=>{
        cursor.classList.remove('project-active')
    })
})

// SMOOTH SCROLLING
const navLinks=document.querySelectorAll('.toggle-menu ul li a')
const footerLinks=document.querySelectorAll('.f-top ul li a')

const smoothScrollingFunc=(e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href");
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: "smooth" });
}

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", smoothScrollingFunc);
  navLink.addEventListener("click", menuCloseFunc);
});
footerLinks.forEach((footerLink) => {
  footerLink.addEventListener("click", smoothScrollingFunc);
});