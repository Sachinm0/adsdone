// Real or demo affiliate products
const products = [
  {
    link: "https://amzn.to/4jHP6eQ",
    image: "https://m.media-amazon.com/images/I/713gRUj4l7L._SL1500_.jpg"
  },
  {
    link: "https://amzn.to/3GCqTIx",
    image: "https://m.media-amazon.com/images/I/71nOmAy-OlL._SL1500_.jpg"
  },
  {
    link: "https://amzn.to/3St5SlT",
    image: "https://m.media-amazon.com/images/I/71grcs4BY-L._SY741_.jpg"
  },
  {
    link: "https://amzn.to/42O8G3m",
    image: "https://m.media-amazon.com/images/I/51vSSbNMkfL._SX679_.jpg"
  },
  {
    link: "https://amzn.to/4k4Wn8k",
    image: "https://m.media-amazon.com/images/I/51z9ig1sQrL._SY625_.jpg"
  }
];

// Shuffle products
const shuffled = products
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const grid = document.getElementById("productGrid");

// Insert promo blocks every 3 products
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
      <img src="${product.image}" alt="Affiliate Product" />
    </a>
  `;
  grid.appendChild(item);
});
