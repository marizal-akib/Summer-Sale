// let function ar vitor dile loop ar moto code ghurte thake..
let totalPrice = 0;

function addToCart1() {
    const price = getPrice("price1");
    // console.log(price);

    addToCart('K. Accessories 1', price);
    addPrice(price);
}

function addToCart2() {
    const price = getPrice("price2");
    // console.log(price);

    addToCart('K. Accessories 2', price);
    addPrice(price);
}
function addToCart3() {
    const price = getPrice("price3");
    // console.log(price);

    addToCart('K. Accessories 3', price);
    addPrice(price);
}




// add price
function addPrice(everyPrice) {
    totalPrice += everyPrice;
    const totalElement = document.getElementById('total-price');
    totalElement.innerHTML = `${totalPrice.toFixed(2)}`
    return (totalPrice);
}
// active Purchase btn 
function openModal() {
    if (totalPrice > 0) {
        const modal = document.getElementById('my_modal_2');
        modal.showModal();
    }
}

// get price
function getPrice(priceId) {
    const productPrice = document.getElementById(priceId);
    const productPriceText = productPrice.innerText;
    const price = parseFloat(productPriceText);
    return (price);

}

// add to cart
function addToCart(productName, price) {
    // console.log(productName +" "+ price);
    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${productName}`

    productEntry.appendChild(p);
}

// get coupon

function addPromo() {
    const coupon = 'SELL200';
    const couponField = document.getElementById('coupon');
    couponField.value = coupon;
    
}
