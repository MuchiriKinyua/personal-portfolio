
function adjustLayout() {
    const formElement = document.querySelector('form');

    if (window.innerWidth < 600) {

        formElement.style.padding = '1rem';
    } else {

        formElement.style.padding = '2rem';
    }
}

window.onload = adjustLayout;

window.onresize = adjustLayout;
