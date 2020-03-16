const MENU=document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.addEventListener('li').forEach(el => el.classList.remove('active'));
    event.target.clasList.add('active');
})