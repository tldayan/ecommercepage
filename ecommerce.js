"use strict"

const hamburgerIcon = document.querySelector(`.hamburgerIcon`)
const closeIcon = document.querySelector(`.closeIcon`)
const nav = document.querySelector(`nav`)

hamburgerIcon.onclick = () => {
   nav.classList.toggle(`openNav`)
}

closeIcon.onclick = () => {
    nav.classList.toggle(`openNav`)
}

/* SWIPER JS BUTTON FUNCTIONALITY */
const swiper = new Swiper(".swiper",{
    loop:true,
    navigation : {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`
    }
})


/* PC IMAGE SELECT PREVIEW */
const imageElement = document.querySelector(`.preview_image`)
const thumbnails = document.querySelectorAll(`.thumbnails`)

thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", () => {

        thumbnails.forEach(thumbnail => { 
            thumbnail.style.border = "none"
            thumbnail.style.opacity = `1`
        });

        thumbnail.style.border = `3px solid hsl(26, 100%, 55%)`
        thumbnail.style.opacity = `0.5`
        imageElement.src = thumbnail.src.replace("-thumbnail","")
        imageElement.classList.add(`image_animation`)
        setTimeout(() => {
            imageElement.classList.remove(`image_animation`)
        },500)

    })
})


/* QUANTITY LEVEL */
const quantityLevel = document.querySelector(`.quantity_level`)
const plusIcon = document.querySelector(`.plus_icon`)
const minusIcon = document.querySelector(`.minus_icon`)

plusIcon.onclick = () => {
    quantityLevel.innerHTML = Number(quantityLevel.innerHTML) + 1
}

minusIcon.onclick = () => {
    if (quantityLevel.innerHTML > 0) {
        quantityLevel.innerHTML = Number(quantityLevel.innerHTML) - 1
    } else {return;}
}


/* ADD TO CART FUNCTIONALITY */
const addToCart = document.querySelector(`.addToCart_btn`)
const addToCartQuantity = document.querySelector(`.profile_cart_logo_counter`)
const deleteIcon = document.querySelector(`.delete_icon`)
const cartLogo = document.querySelector(`.profile_cart_logo`)
const cartModal = document.querySelector(`.cart_modal`)
const cartQuantity = document.querySelector(`.cart_quantity`)
const cartTotalElement = document.querySelector(`.cart_total`)
const cartEmptyElement = document.querySelector(`.cart_empty`)
const cartItem = document.querySelector(`.cart_item`)
const checkoutButton = document.querySelector(`.checkout_btn`)
const cartCounter = document.querySelector(`.profile_cart_logo_counter`)

let cartTotal = 0


cartLogo.onclick = () => {
    cartModal.classList.toggle(`modal_animation_open`)
}


addToCart.onclick = () => {

    if (quantityLevel.innerHTML == 0) {
        deleteCart()
        return;
    } 
    
    else {
        cartEmptyElement.style.display = `none`
        cartItem.style.display = `flex`
        checkoutButton.style.display = `flex`
        addToCartQuantity.innerHTML = quantityLevel.innerHTML
        cartQuantity.innerHTML = addToCartQuantity.innerHTML
        cartTotal = 125 * addToCartQuantity.innerHTML
        cartTotalElement.innerHTML = `$${cartTotal}`
        addToCartQuantity.style.display = `flex`
        setTimeout(() => {
            document.body.scrollIntoView({ behavior: "smooth" });
        },250)
        
    }
}

/* DELETE CART */
const deleteCart = () => {
    cartEmptyElement.style.display = `block`
        cartItem.style.display = `none`
        checkoutButton.style.display = `none`
        cartCounter.style.display  = `none`
        quantityLevel.innerHTML = `0`
}

deleteIcon.onclick = () => {
    deleteCart()
}

/* CHECKOUT */
checkoutButton.onclick = () => {
    deleteCart()
}