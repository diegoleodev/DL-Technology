let button = document.querySelector('.btn');
button.addEventListener('click', btnClick)



function btnClick(){
    let menu = document.querySelector('.navBar02');
    menu.classList.toggle('navBar02-active');
    button.classList.toggle('btn-active')
}