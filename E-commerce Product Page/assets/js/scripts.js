const btnMenuMobile = document.getElementById('btn-menu-mobile');
const menuMobileContainer = document.getElementById('menu-mobile-container');
const backdropContainer = document.getElementById('backdrop');

const btnShoppingCart = document.getElementById('shopping-cart');
const shoppingCartContainer = document.getElementById('shopping-cart-container');
let quantityItemsIcon = document.getElementById('item-quantity-icon');
const informationsCart = document.getElementById('cart-items-info');
const cartEmptyMessage = document.getElementById('message-cart-empty');
let itemsInCart = document.getElementById('items-in-cart');
let totalPriceProductsElement = document.getElementById('total-price-product');

const btnAddItem = document.getElementById('add-item');
const btnRemoveItem = document.getElementById('remove-item');

let quantityItemsElement = document.getElementById('quantity-items')
let quantityItems = Number(quantityItemsElement.textContent);

const btnAddItemCart = document.getElementById('add-cart');
const btnDeleteItemsCart = document.getElementById('btn-remove-cart');

let totalCartItems = 0;
let totalPriceProducts = 0;

const containerOverlay = document.getElementById('container-overlay');
const btnCloseContainerOverlay = document.getElementById('button-close-container');
let containerSliderOne = document.getElementById('container-main-image');
const containerImages = document.querySelectorAll('.container-image');

const imagesOverlayThumbnail = document.querySelectorAll('.image-overlay');
// const containerSliderOverlay = document.querySelectorAll('.swiper-slide');
const imagesSwiper = document.querySelectorAll('#container-overlay .swiper-slide img');

let currentImage = document.getElementById('current-image');



containerSliderOne.addEventListener('click', () => {
    containerOverlay.classList.toggle('hidden');
    containerOverlay.classList.toggle('flex');

    currentImage.src = containerSliderOne.src
});

btnCloseContainerOverlay.addEventListener('click', () => {
    containerOverlay.classList.toggle('hidden');
    containerOverlay.classList.toggle('flex');
});

containerImages.forEach(item => {

    item.addEventListener('click', () => {
        containerSliderOne.src = item.src;
    });

});


// functions

const toggleMenuMobile = () => {
    menuMobileContainer.classList.toggle('hidden');
    menuMobileContainer.classList.toggle('max-tablet:menu-mobile');


    if (menuMobileContainer.classList.contains('hidden')) {

        btnMenuMobile.src = './assets/image/icon-menu.svg';

        backdropContainer.classList.remove('max-tablet:backdrop');

    } else {

        btnMenuMobile.src = './assets/image/icon-close.svg';

        backdropContainer.classList.add('max-tablet:backdrop');
    }
}


const addItem = () => {
    quantityItems++;
    quantityItemsElement.textContent = quantityItems;

    totalCartItems++;
};


const removeItem = () => {

    if (quantityItemsElement.textContent <= 0) {

        quantityItemsElement.textContent = 0;

    } else {
        quantityItems--;
        quantityItemsElement.textContent = quantityItems;

        totalCartItems--;
    }
};


const toggleCartInformation = () => {

    if (totalCartItems > 0) {

        informationsCart.classList.remove('hidden');
        informationsCart.classList.add('flex');
        cartEmptyMessage.classList.add('hidden');

    } else {

        informationsCart.classList.add('hidden');
        informationsCart.classList.remove('flex');
        cartEmptyMessage.classList.remove('hidden');

    }

};


const showProductInformationCart = () => {
    totalPriceProducts = (totalCartItems * 125).toFixed(2);
    totalPriceProductsElement.textContent = '$' + totalPriceProducts;

    itemsInCart.textContent = totalCartItems;
};


const showCartWithProductInformation = () => {

    if (quantityItems > 0) {
        // ? reset the item counter after adding them to the cart
        quantityItems = 0;
        quantityItemsElement.textContent = quantityItems;


        // ? shows the current quantity of cart items in my cart icon
        quantityItemsIcon.textContent = totalCartItems;


        quantityItemsIcon.classList.remove('hidden');
        quantityItemsIcon.classList.add('flex');

        toggleCartInformation();
        showProductInformationCart();
    }
    
};


const deleteCartInformation = () => {
    informationsCart.classList.add('hidden');
    cartEmptyMessage.classList.remove('hidden');

    totalCartItems = 0;

    quantityItemsIcon.textContent = totalCartItems;


    quantityItemsIcon.classList.add('hidden');
    quantityItemsIcon.classList.remove('flex');
}


// events

btnMenuMobile.addEventListener('click', toggleMenuMobile);


btnShoppingCart.addEventListener('click', () => shoppingCartContainer.classList.toggle('hidden'));


// * handle clicks outside containers

document.addEventListener('click', (event) => {

    if (!shoppingCartContainer.contains(event.target) && event.target !== btnShoppingCart) {

        shoppingCartContainer.classList.add('hidden');

    }

    if (!menuMobileContainer.contains(event.target) && event.target !== btnMenuMobile) {

        menuMobileContainer.classList.add('hidden');

        btnMenuMobile.src = './assets/image/icon-menu.svg';

        backdropContainer.classList.remove('max-tablet:backdrop');

        menuMobileContainer.classList.remove('max-tablet:menu-mobile');

    }

});


btnAddItem.addEventListener('click', addItem);


btnRemoveItem.addEventListener('click', removeItem);


btnAddItemCart.addEventListener('click', showCartWithProductInformation);


btnDeleteItemsCart.addEventListener('click', deleteCartInformation);



// Swiper JS

const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});