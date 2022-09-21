var pageloader = document.querySelector('.header_part');
var header = document.querySelector('.head');
var search = document.querySelector('.searchb');
var questions = document.querySelector('.questions');

window.onscroll = function(){
    if(window.pageYOffset > 50){
        pageloader.classList.add('active')
        header.classList.add('heading')
        search.classList.add('searchbar')
    }else{
        pageloader.classList.remove('active')
        header.classList.remove('heading')
        search.classList.remove('searchbar')
    }
}
