const inventory = {
  "Pastel Cozy Sweater": {
    price: 42,
    stock: 12
  },
  "Lavender Cat Pillow": {
    price: 28,
    stock: 8
  },
  "Soft Vanilla Candle": {
    price: 22,
    stock: 15
  }
};

function getStock(product) {
  return inventory[product]?.stock || 0;
}
