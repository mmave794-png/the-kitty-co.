let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🐾");
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>$${item.price}</span>
      </div>
    `;
  });

  totalEl.innerText = "$" + total;
}let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCartWithQty(name) {
  const qty = parseInt(document.getElementById("qty").value);
  const product = inventory[name];

  if (!product) {
    alert("Product not found");
    return;
  }

  if (qty > product.stock) {
    alert("Sorry! Only " + product.stock + " left in stock 🐾");
    return;
  }

  const existing = cart.find(item => item.name === name);

  if (existing) {
    if (existing.quantity + qty > product.stock) {
      alert("Not enough stock available 🐱");
      return;
    }
    existing.quantity += qty;
  } else {
    cart.push({
      name,
      price: product.price,
      quantity: qty
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 💜");
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} (x${item.quantity})</span>
        <span>$${item.price * item.quantity}</span>
      </div>
    `;
  });

  totalEl.innerText = "$" + total;
}
