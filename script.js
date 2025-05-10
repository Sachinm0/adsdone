const sizes = [
  { w: 120, h: 120 },
  { w: 120, h: 150 },
  { w: 180, h: 180 },
  { w: 200, h: 200 },
  { w: 200, h: 240 },
];

const products = [
  {
    link: "https://amzn.to/42SE2FZ",
    image: "https://m.media-amazon.com/images/I/71AXSIdO4oL._SL1500_.jpg",
    offer: "7% OFF"
  },
  {
    link: "https://amzn.to/3Zev4Ar",
    image: "https://m.media-amazon.com/images/I/71g4CMwdYyL._SL1500_.jpg",
    offer: "63% OFF"
  },
  {
    link: "https://amzn.to/4maieNu",
    image: "https://m.media-amazon.com/images/I/51o3dOFhfsL._SL1000_.jpg",
    offer: "25% OFF"
  },
  {
    link: "https://amzn.to/3GPH1Gw",
    image: "https://m.media-amazon.com/images/I/71zdJZU7w0L._SL1500_.jpg",
    offer: "22% OFF"
  },
  {
    link: "https://amzn.to/4jZEBne",
    image: "https://m.media-amazon.com/images/I/51QCRhUJ1IL.jpg",
    offer: "11% OFF"
  }
];

// Shuffle array
const shuffled = products
  .map(p => ({...p, size: sizes[Math.floor(Math.random() * sizes.length)]}))
  .sort(() => Math.random() - 0.5);

const grid = document.getElementById("productGrid");

shuffled.forEach((product, index) => {
  const item = document.createElement("div");
  item.className = "pixel-item";
  item.style.width = product.size.w + "px";
  item.style.height = product.size.h + 30 + "px"; // +30 for offer text

  item.innerHTML = `
    <a href="${product.link}" target="_blank" rel="noopener">
      <img src="${product.image}" width="${product.size.w}" height="${product.size.h}" />
    </a>
    <div class="offer-text">${product.offer}</div>
  `;

  grid.appendChild(item);
});
