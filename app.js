function navslide(){
    const threelines = document.querySelector('.ntl');
    const navigation = document.querySelector('.navit');
    threelines.addEventListener('click',()=>{
        navigation.classList.toggle('nav-active')
    });
}
navslide();