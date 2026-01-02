import {mightAlsoLikeItem} from '../data/might-also-like-data.js';

let mightAlsoLikeCards = "";

const mightAlsoLikeContainer = document.querySelector('.js-might-also-like');

mightAlsoLikeItem.forEach(item => {
    mightAlsoLikeCards += `
        <product-card 
            title="${item.title}" 
            img="asset/img/main/main-prod-category-card/${item.img}" 
            link="${item.link}">
        </product-card>
    `;
});

console.log(mightAlsoLikeCards);

console.log("hillo");
