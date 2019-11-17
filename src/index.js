import './main.scss';
import Icon from './assets/img/whatsapp.png';
import toggle from './toggle.js'

const createP = () => {
    const p = document.createElement('div');
    p.id = 'text';
    const pText = document.createTextNode('Hey there! I\'m using Whatsapp!');
    p.appendChild(pText);
    p.classList.add('p');

    return p;
};

const createButton = () => {
    const b = document.createElement('button');
    b.id = 'toggle';
    b.onclick = toggle;
    const bText = document.createTextNode('toggle');
    b.appendChild(bText);
    b.classList.add('button');

    return b;
};

const createImage = () => {
    const wIcon = new Image();
    wIcon.src = Icon;

    return wIcon;
};

document.body.appendChild(createP());
document.body.appendChild(createButton());
document.body.appendChild(createImage());