// Real or demo affiliate products
const products = [
  {
    link: "https://amzn.to/3V5KXgG",
    image: "https://m.media-amazon.com/images/I/71dNGEQb9wL._AC_UL320_.jpg"
  },
  {
    link: "https://amzn.to/4aPNE3u",
    image: "https://m.media-amazon.com/images/I/71K7QchMezL._AC_UL320_.jpg"
  },
  {
    link: "https://amzn.to/3V7W9Pu",
    image: "https://m.media-amazon.com/images/I/6113L1UOCJL._AC_UL320_.jpg"
  },
  {
    link: "https://amzn.to/3Wv8Tm2",
    image: "https://m.media-amazon.com/images/I/81p4D2QKQZL._AC_UL320_.jpg"
  },
  {
    link: "https://amzn.to/3xE5lV1",
    image: "https://m.media-amazon.com/images/I/710Rj1y0DBL._AC_UL320_.jpg"
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
