// wishlist.js

// Retrieve wishlist items from the images array
const wishlistItems = images.filter((image) => image.wishlist);

// Get the wishlist container element
const wishlistContainer = document.getElementById('wishlist-container');

// Loop through the wishlist items and create HTML elements to display them
wishlistItems.forEach((item) => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('wishlist-item');

  const imgElement = document.createElement('img');
  imgElement.src = item.url;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = item.description;

  const priceElement = document.createElement('p');
  priceElement.textContent = convertToIndianRupees(item.price);

  itemContainer.appendChild(imgElement);
  itemContainer.appendChild(descriptionElement);
  itemContainer.appendChild(priceElement);

  wishlistContainer.appendChild(itemContainer);
});
