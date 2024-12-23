import createElement from './helper.js'

function home() {
    const homeContainer = createElement('div', null, 'home');

    const title = createElement('h1', 'Welcome to my Zest & Zephyr!', 'title');
    const description = createElement('h2', 'Sip, Relax, Repeat.', 'description');

    homeContainer.appendChild(title);
    homeContainer.appendChild(description);

    return homeContainer
}

export default home