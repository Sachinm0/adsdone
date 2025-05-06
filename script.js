// Products with offer % added
const products = [
  {
    link: "https://amzn.to/44puEux",
    image: "https://m.media-amazon.com/images/I/6186Xb7H1TL._SL1200_.jpg",
    offer: "80% OFF"
  },
  {
    link: "https://amzn.to/3RPU4Ks",
    image: "https://m.media-amazon.com/images/I/51C14VcBgyL._SL1500_.jpg",
    offer: "46% OFF"
  },
  {
    link: "https://amzn.to/4d7ILqL",
    image: "https://m.media-amazon.com/images/I/61z8wnO6gSL._SX679_.jpg",
    offer: "78% OFF"
  },
  {
    link: "https://amzn.to/43h7EwI",
    image: "https://m.media-amazon.com/images/I/81Y+gtQJ1pL._SY679_.jpg",
    offer: "79% OFF"
  },
  {
    link: "https://amzn.to/42LmvPZ",
    image: "https://m.media-amazon.com/images/I/810LeYsd6pL._SX679_.jpg",
    offer: "50% OFF"
  }
];

// Shuffle products
const shuffled = products
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const grid = document.getElementById("productGrid");

// Insert promo boxes every 3 products
shuffled.forEach((product, index) => {
  if (index % 3 === 0 && index !== 0) {
    const promo = document.createElement("div");
    promo.className = "promo-box";
    promo.innerText = "🎯 Buy Product Place – Promote Your Link Here!";
    grid.appendChild(promo);
  }

  const item = document.createElement("div");
  item.className = "grid-item";
  item.innerHTML = `
    <a href="${product.link}" target="_blank" rel="noopener">
      <span class="offer-badge">${product.offer}</span>
      <img src="${product.image}" alt="Affiliate Product" />
    </a>
  `;
  grid.appendChild(item);
});
