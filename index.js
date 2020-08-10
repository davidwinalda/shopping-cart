// Declare default data product
let data = [
  {
    name: "Gaming Mouse",
    price: 1000000,
    id: 1,
  },
  {
    name: "Keyboard Mechanic",
    price: 2000000,
    id: 2,
  },
  {
    name: "Laptop Asus",
    price: 3000000,
    id: 3,
  },
];

// Menampung data Cart
let cart = [];


// Generate data for view default product in product page
function generateData() {
  let result = '';

  for (let i = 0; i<data.length; i++) {
    result += `<li> 
    <p id="productName">Product Name: ${data[i].name} </p>
    <p id="price"> Price: ${data[i].price} </p>
    <button type="submit" onclick="addCart(${data[i].id})">Add to cart</button>
    </li>`;
  }

  document.getElementById('container').innerHTML = result;

  return result;
}

// addCart for push product data to Cart
function addCart(id) {
  let result = data.find(element => element.id === id);

  cart.push(result); // Push ke array

  localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
}