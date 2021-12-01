// Next function checks browser support WEBP format ********************************************************************************************************
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
        console.log('use webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
        console.log('not use webp');
    }
});

const dbIconList = {
    iconName: [
        'twitter',
        'facebook',
        'rss',
        'pinterest',
        'google',
        'dribbble',
        'linkedin',
        'flickr',
    ],
    iconSrc: [
        '../icons/icon_twitter.webp',
        '../icons/icon_facebook.webp',
        '../icons/icon_rss.webp',
        '../icons/icon_pinterest.webp',
        '../icons/icon_google+.webp',
        '../icons/icon_dribbble.webp',
        '../icons/icon_linkedin.webp',
        '../icons/icon_flickr.webp',
    ],
};

console.log(dbIconList);

window.addEventListener('DOMContentLoaded', () => {
    const iconList = document.querySelector('.icon_list');
    iconList.innerHTML = '';
    dbIconList.iconName.forEach((elem, index) => {
        iconList.innerHTML += `
            <li>
                <a href="#">
                    <img src="${dbIconList.iconSrc[index]}" alt="${elem}">
                </a>
            </li>
        `;
    });
});
