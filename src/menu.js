import { createElement } from './helper.js'

function createLi(text, ...classList) {
    return createElement('li', text, ...classList);
}

function menu() {
    const menuContainer = createElement('div', null, 'menu');

    menuContainer.appendChild(createElement(
        'h1',
        'Boba',
        'title'
    ));

    const list = createElement('ul', null, 'drinks');
    list.appendChild(createLi('Strawberry Matcha'));
    list.appendChild(createLi('Thai'));
    list.appendChild(createLi('Original'));
    list.appendChild(createLi('Sparkling Rose Matcha'));


    menuContainer.appendChild(list)

    return menuContainer
};

export default menu;