// -=-=-=-=-=-=-=-=- DOM -=-=-=-=-=-=-=-=-

// get element from document
//document.getSelection('body .box');
const block = document.getElementById('main-block');

// manage element content
block.innerHTML += '<mark>some text</mark>';

// add event handlers
//block.addEventListener('click', () => { /* code */});
block.onclick = () => {
    console.log("Clicked!");
};

// -=-=-=-=-=-=-=-=- working with products -=-=-=-=-=-=-=-=- 
const addBtn = document.getElementById('add-btn');
const prodList = document.getElementById('prod-list');
const nameInput = document.getElementById('name-in');
const priceInput = document.getElementById('price-in');
const clearBtn = document.getElementById('clear-list-btn');

let products = [];

addBtn.onclick = () => {

    const name = nameInput.value;
    const price = priceInput.value;

    // TODO: add new product to collection

    prodList.innerHTML += `<li>${name} ${price}$</li>`;
}
clearBtn.onclick = () => {
    prodList.innerHTML = '';
};