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
        'icons/icon_twitter.png',
        'icons/icon_facebook.png',
        'icons/icon_rss.png',
        'icons/icon_pinterest.png',
        'icons/icon_google+.png',
        'icons/icon_dribbble.png',
        'icons/icon_linkedin.png',
        'icons/icon_flickr.png',
    ],
};

const dbImagesList = [
    "img/img_history.png",
    "img/img_browser-screen-1.png",
    "img/img_browser-screen-2.png",
    "img/img_browser-screen-3.png",
    "img/img_browser-screen-4.png"
];

window.addEventListener('DOMContentLoaded', () => {
    const iconList = document.querySelector('.icon_list'),
          carouselImage = document.querySelector('.carousel_image'),
          carouselImagesList = document.querySelectorAll('.carousel_images_list_item');

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

    carouselImagesList.forEach((elem, index) => {
        // console.log(elem);
        elem.addEventListener('click', () => {
            carouselImage.innerHTML = `<img src="${dbImagesList[index]}" alt="History">`;
            // carouselImage.style.src = `${dbImagesList[index]}`;
            // dbImagesList.forEach((elem, index) => {
            //     // carouselImage.style.src = `${dbImagesList[index]}`;
            //     carouselImage.innerHTML = `
            //     <picture><source srcset=" ../img/img_history.webp " type="image/webp "><img src="${dbImagesList[index]}" alt="History"></picture>`;
            // });
            console.log(carouselImage.style.src);
        });
    });

    
});
