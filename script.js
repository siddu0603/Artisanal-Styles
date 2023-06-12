let images = [
  {
    url: 'anwatch1.webp',
    description: 'FOSSIL GRANT SPOR Analog Watch - For Men FS5268I',
    price: 5999,
    wishlist: false,
    htmlPage: 'awatch1.html'
  },
  {
    url: 'anwatch2.webp',
    description: ' CASIO Analog Watch - For Men A1889',
    price: 3999,
    wishlist: false,
    htmlPage: 'awatch2.html'
  },
  {
    url: 'anwatch3.webp',
    description: 'FOSSIL GRANT SPOR Analog Watch - For Men FS5268I',
    price: 5999,
    wishlist: false,
    htmlPage: 'awatch3.html'
  },
  {
    url: 'anwatch4.webp',
    description: 'PETER ENGLAND Analog Watch - For Men PE000036B',
    price: 699,
    wishlist: false,
    htmlPage: 'awatch4.html'
  },
  {
    url: 'anwatch5.webp',
    description: 'wrogn',
    price: 799,
    wishlist: false,
    htmlPage: 'awatch5.html'
  },
  {
    url: 'anwatch6.webp',
    description: ' CAT Bolt Digital Watch - For Men OA.167.21.141',
    price: 3499,
    wishlist: false,
    htmlPage: 'awatch6.html'
  },
  {
    url: 'anwatch7.webp',
    description: ' CASIO G-Shock Bluetooth Connect Carbon Core Guard Analog-Digital Watch - For Men G1242 ',
    price: 10999,
    wishlist: false,
    htmlPage: 'awatch7.html'
  },
  {
    url: 'anwatch8.webp',
    description: ' CASIO Vintage ( A168WGG-1ADF ) Digital Watch - For Men & Women',
    price: 4765,
    wishlist: false,
    htmlPage: 'awatch8.html'
  },
  {
    url: 'anwatch9.webp',
    description: 'SCUDERIA FERRARI Digital Watch - For Men 0830858',
    price: 4999,
    wishlist: false,
    htmlPage: 'awatch9.html'
  },
  {
    url: 'anwatch10.webp',
    description: ' United Colors of Benetton Digital Watch - For Men & Women UWUCG0502',
    price: 2075,
    wishlist: false,
    htmlPage: 'awatch10.html'
  },
  {
    url: 'anwatch11.webp',
    description: 'Fastrack Revoltt FS1|1.83" Display|BT Calling|Fastcharge|110+ Sports Mode|200+ WatchFaces Smartwatch ',
    price: 5999,
    wishlist: false,
    htmlPage: 'awatch11.html'
  },
  {
    url: 'anwatch12.webp',
    description: ' realme Watch 3 - 1.8 inch Horizon Curved Display with Bluetooth Calling Smartwatch ',
    price: 3499,
    wishlist: false,
    htmlPage: 'awatch12.html'
  },
  {
    url: 'anwatch13.webp',
    description: 'SAMSUNG Galaxy Watch4 LTE (4.4cm) - Health Monitoring, Sleep Tracking  ',
    price: 17500,
    wishlist: false,
    htmlPage: 'awatch13.html'
  },
  {
    url: 'anwatch14.webp',
    description: 'APPLE Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking ',
    price: 27900,
    wishlist: false,
    htmlPage: 'awatch14.html'
  },
  {
    url: 'anwatch15.webp',
    description: 'Seiko PREMIER Analog Watch - For Men SNP091P1',
    price: 59359,
    wishlist: false,
    htmlPage: 'awatch15.html'
  },
  {
    url: 'anwatch16.webp',
    description: ' GARMIN Epix Gen 2, Sapphire, Up to 16 days Battery, AMOLED Display, Real Time Stamina Smartwatch ',
    price: 3999,
    wishlist: false,
    htmlPage: 'awatch16.html'
  }
  
  // Add more image objects here with their respective HTML pages
];

shuffleArray(images);

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  createImageHTML(image);
}

function createImageHTML(image) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-item');

  const linkElement = document.createElement('a');
  linkElement.href = image.htmlPage; // Redirect to the respective HTML page

  const imgElement = document.createElement('img');
  imgElement.src = image.url;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = image.description;

  const wishlistElement = document.createElement('button');
  wishlistElement.classList.add('wishlist', 'empty');
  wishlistElement.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleWishlist(image, wishlistElement);
  });

  const priceElement = document.createElement('p');
  priceElement.classList.add('price-tag');
  priceElement.textContent = `${convertToIndianRupees(image.price)}`;

  linkElement.appendChild(imgElement);
  linkElement.appendChild(descriptionElement);
  linkElement.appendChild(priceElement);

  imageContainer.appendChild(linkElement);
  imageContainer.appendChild(wishlistElement);
  document.getElementById('image-container').appendChild(imageContainer);
}

function toggleWishlist(image, wishlistElement) {
  image.wishlist = !image.wishlist;
  wishlistElement.classList.toggle('empty');
}

function convertToIndianRupees(price) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
document.getElementById("lth").onclick=function()
{   let n=imaages.length;
  let swap;
  for (let c = 0 ; c < n - 1; c++)
  {
    for (let d = 0 ; d < n - c - 1; d++)
    {
      if (images[d] > images[d+1]) /* For decreasing order use '<' instead of '>' */
      {
        swap       = images[d];
        images[d]   = images[d+1];
        images[d+1] = swap;
      }
    }
  }
}
