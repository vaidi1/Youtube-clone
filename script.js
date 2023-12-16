let menuIcon = document.querySelector('.menu-icon');
let sideabar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

menuIcon.onclick = function(){
    sideabar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

