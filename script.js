const MENU=document.getElementById('menu');

MENU.querySelectorAll('li');

MENU.addEventListener('click', (event) => {
    MENU.addEventListener('li').forEach(el => el.classList.remove('active'));
    event.target.clasList.add('active');
})