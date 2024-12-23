import './reset.css';
import './styles.css';

import routeToHome from './home.js'

const homeButton = document.querySelector('button.home');
const menuButton = document.querySelector('button.menu');
const aboutButton = document.querySelector('button.about');

const content = document.querySelector('#content');

content.appendChild(routeToHome());

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(routeToHome());
});

menuButton.addEventListener('click', () => {
    
});

aboutButton.addEventListener('click', () => {
    
});