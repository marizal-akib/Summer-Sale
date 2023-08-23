// let function ar vitor dile loop ar moto code ghurte thake..
let totalPrice = 0;
let discountAmount = 0;

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
function addToCart4() {
    const price = getPrice("price4");
    // console.log(price);

    addToCart('Sports Black Cap', price);
    addPrice(price);
}
function addToCart5() {
    const price = getPrice("price5");
    // console.log(price);

    addToCart('Full Jersey Set', price);
    addPrice(price);
}
function addToCart6() {
    const price = getPrice("price6");
    // console.log(price);

    addToCart('Sports cates', price);
    addPrice(price);
}
function addToCart7() {
    const price = getPrice("price7");
    // console.log(price);

    addToCart('Single Relax Chair', price);
    addPrice(price);
}
function addToCart8() {
    const price = getPrice("price8");
    // console.log(price);

    addToCart('Children play', price);
    addPrice(price);
}
function addToCart9() {
    const price = getPrice("price9");
    // console.log(price);

    addToCart('Flexible Sofa', price);
    addPrice(price);
}




// add price
function addPrice(everyPrice) {
    totalPrice += everyPrice;
    const totalElement = document.getElementById('total-price');
    totalElement.innerHTML = `${totalPrice.toFixed(2)}`;
    calculateTotal();
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
    p.innerHTML = `${count + 1}. ${productName}`;

    productEntry.appendChild(p);
}

// get coupon

function addPromo() {
    const coupon = 'SELL200';
    const couponField = document.getElementById('coupon');
    couponField.value = coupon;

}

// get discount & active coupon
function getDiscount() {
    const couponField = document.getElementById('coupon');
    const couponValue = couponField.value;
    if (totalPrice > 200 && couponValue === 'SELL200') {
        discountAmount = totalPrice * 0.2;
    } else {
        discountAmount = 0;
    }
    const discountElement = document.getElementById('discount');
    discountElement.innerHTML = `${discountAmount.toFixed(2)}`;
    calculateTotal();
}

function calculateTotal() {
    const total = totalPrice - discountAmount;
    const totalElement = document.getElementById("total");
    totalElement.innerText = `${total.toFixed(2)}`;
}


