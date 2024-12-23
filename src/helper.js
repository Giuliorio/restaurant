const createElement = (type, text, ...classNames) => {
    const element = document.createElement(type);

    if (text) element.textContent = text;
    if(classNames.length) element.classList.add(...classNames);

    return element
}

export default createElement;