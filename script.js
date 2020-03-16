const MENU=document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

const MODELV = document.getElementById('iPhone-V')
MODELV.addEventListener('click', function () {
    if (document.getElementById('pic-V').hidden == true) document.getElementById('pic-V').hidden = false;
        else document.getElementById('pic-V').hidden = true;
}, false);

const MODELH = document.getElementById('iPhone-H')
MODELH.addEventListener('click', function () {
    if (document.getElementById('pic-H').hidden == true) document.getElementById('pic-H').hidden = false;
    else document.getElementById('pic-H').hidden = true;
}, false);

//const CHANGE = document.getElementById('prev-slide')
//CHANGE.addEventListener('click', function () {
//    CHANGE.querySelectorAll('Slider').
//};

const CHANGEP = document.getElementById('prev-slide')
CHANGEP.addEventListener('click', function () {
    if (document.getElementById('Slide-1').hidden == true) {
        document.getElementById('Slide-1').hidden = false;
        document.getElementById('Slide-2').hidden = true;
    }
    else {
        document.getElementById('Slide-1').hidden = true;
        document.getElementById('Slide-2').hidden = false;
    }
}, false);

const CHANGEN = document.getElementById('next-slide')
CHANGEN.addEventListener('click', function () {
    if (document.getElementById('Slide-1').hidden == true) {
        document.getElementById('Slide-1').hidden = false;
        document.getElementById('Slide-2').hidden = true;
    }
    else {
        document.getElementById('Slide-1').hidden = true;
        document.getElementById('Slide-2').hidden = false;
    }
}, false);
