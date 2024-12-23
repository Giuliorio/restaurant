import { createElement } from './helper.js'

function about() {
    const element = createElement('div', null, 'about');

    element.appendChild(createElement(
        'h1',
        'About Us',
        'title'
    ));

    element.appendChild(createElement(
        'p',
        "At Zest & Zephyr, we blend vibrant flavors with a refreshing vibe to bring you the perfect boba experience. Inspired by life’s simple joys, every cup is crafted with care, using only the finest ingredients. Whether you’re craving a zesty twist or a breezy classic, we’re here to make your day a little brighter—one sip at a time.",
        'description'
    ));

    return element;
}

export default about;