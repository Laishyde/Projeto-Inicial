window.addEventListener('scroll', () =>{
    //console.log(window.scrollY);
    //recuperar o nav-bar
    const header = document.querySelector('.nav-bar');
    header.classList.toggle('active-scroll', window.scrollY > 100 );
})