
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}   

const totop = document.querySelector(".to-top");
window.addEventListener("scroll",( )=>{
  if (window.pageYOffset>100 ){
      totop.classList.add("active");
  }else{
      totop.classList.remove("active");
  }
})
