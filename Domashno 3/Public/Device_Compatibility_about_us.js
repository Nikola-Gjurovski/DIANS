// JavaScript code to adjust flex direction and container width based on window width
function updateLayout() {
    var aboutUsContainer = document.getElementById('aboutUs');
    var aboutUsDivs = aboutUsContainer.getElementsByTagName('div');
    var tailDivs = document.getElementsByClassName('tail');

    if (window.innerWidth < 1000) {
        aboutUsContainer.style.flexDirection = 'column';

        aboutUsContainer.style.width = '100%';

        for (var i = 0; i < aboutUsDivs.length; i++) {
            aboutUsDivs[i].style.width = '100%';
        }

        for (var j = 0; j < tailDivs.length; j++) {
            tailDivs[j].style.position = 'fixed';
            tailDivs[j].style.bottom = '0';
        }
    } else {
        aboutUsContainer.style.flexDirection = 'row';
        aboutUsContainer.style.width = 'auto';
        for (var i = 0; i < aboutUsDivs.length; i++) {
            aboutUsDivs[i].style.width = 'auto';
        }
        for (var j = 0; j < tailDivs.length; j++) {
            tailDivs[j].style.position = 'initial';
            tailDivs[j].style.bottom = 'initial';
        }
    }
}


window.addEventListener('DOMContentLoaded', updateLayout);

window.addEventListener('resize', updateLayout);