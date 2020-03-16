const MENU=document.getElementById('menu');
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

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

const IMG = document.getElementById('image-grid');
IMG.addEventListener('click', (event) => {
    IMG.querySelectorAll('image-grid').forEach(el => el.classList.remove('active-image-grid'));
    event.target.classList.add('active-image-grid');   
})


let links = new Array(
    "assets/Image1.png",
    "assets/Image2.png",
    "assets/Image3.png",
    "assets/Image4.png",
    "assets/Image5.png",
    "assets/Image6.png",
    "assets/Image7.png",
    "assets/Image8.png",
    "assets/Image9.png",
    "assets/Image10.png",
    "assets/Image11.png",
    "assets/Image12.png"
);
let index = 0;
const IMGCHANGE = document.getElementById('image-change');
IMGCHANGE.addEventListener('click', function () {
    document.getElementById('pic1').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic2').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic3').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic4').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic5').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic6').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic7').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic8').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic9').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic10').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic11').src = links[Math.floor(Math.random() * Math.floor(12))];
    document.getElementById('pic12').src = links[Math.floor(Math.random() * Math.floor(12))];
});
