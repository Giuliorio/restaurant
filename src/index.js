import './reset.css';
import './styles.css';

import routeToHome from './home.js';
import routeToMenu from './menu.js';
import routeToAbout from './about.js';

const homeButton = document.querySelector('button.home');
const menuButton = document.querySelector('button.menu');
const aboutButton = document.querySelector('button.about');

const content = document.querySelector('#content');

function resetContent() {
    content.innerHTML = '';
}

content.appendChild(routeToHome());

homeButton.addEventListener('click', () => {
    resetContent();
    content.appendChild(routeToHome());
});

menuButton.addEventListener('click', () => {
    resetContent();
    content.appendChild(routeToMenu());
});

aboutButton.addEventListener('click', () => {
    resetContent();
    content.appendChild(routeToAbout());
});