let slideIndex = 0;
let slides = Array.from(document.querySelectorAll('.image-container img'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Show initial slide
showSlide(slideIndex);

// Previous slide button click event
prevButton.addEventListener('click', function() {
  changeSlide(-1);
});

// Next slide button click event
nextButton.addEventListener('click', function() {
  changeSlide(1);
});

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

function showSlide(n) {
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });

  slides[n].classList.add('active');
}
const footer = document.createElement("footer");
    footer.style.backgroundColor = "black";

    // Create the footerLeft container
    const footerLeft = document.createElement("div");
    footerLeft.className = "footerLeft";

    // Create the footerMenu elements
    const aboutUsMenu = createFooterMenu("About Us", ["Company", "Contact", "Careers", "Affiliates", "Stores"]);
    const usefulLinksMenu = createFooterMenu("Useful Links", ["Support", "Refund", "FAQ", "Feedback", "Stories"]);
    const productsMenu = createFooterMenu("Products", ["Luxury Watches", "Fashion Watches", "Quartz Watches", "Smart Watches", "Digital Watches"]);

    // Append the footerMenu elements to the footerLeft container
    footerLeft.appendChild(aboutUsMenu);
    footerLeft.appendChild(usefulLinksMenu);
    footerLeft.appendChild(productsMenu);

    // Create the footerRight container
    const footerRight = document.createElement("div");
    footerRight.className = "footerRight";

    // Create the footerRightMenu elements
    const subscribeMenu = createFooterMenu("Subscribe to our newsletter");
    const followUsMenu = createFooterMenu("Follow Us");
    const copyrightMenu = createFooterMenu("");

    // Create the email input and button for the subscribe menu
    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.placeholder = "your@email.com";
    emailInput.className = "fInput";
    const joinButton = document.createElement("button");
    joinButton.innerText = "Join!";
    joinButton.className = "fButton";

    // Append the email input and button to the subscribe menu
    subscribeMenu.appendChild(emailInput);
    subscribeMenu.appendChild(joinButton);

    // Create the social media icons for the followUs menu
    const socialMediaIcons = createSocialMediaIcons();

    // Append the social media icons to the followUs menu
    followUsMenu.appendChild(socialMediaIcons);

    // Append the footerRightMenu elements to the footerRight container
    footerRight.appendChild(subscribeMenu);
    footerRight.appendChild(followUsMenu);
    footerRight.appendChild(copyrightMenu);

    // Append the footerLeft and footerRight containers to the footer
    footer.appendChild(footerLeft);
    footer.appendChild(footerRight);

    // Append the footer to the document body
    document.body.appendChild(footer);

    // Function to create a footer menu with a title and list items
    function createFooterMenu(title, items = []) {
        const menu = document.createElement("div");
        menu.className = "footerMenu";

        const menuTitle = document.createElement("h1");
        menuTitle.className = "fMenuTitle";
        menuTitle.innerText = title;

        const list = document.createElement("ul");
        list.className = "fList";

        items.forEach(itemText => {
            const listItem = document.createElement("li");
            listItem.className = "fListItem";
            listItem.innerText = itemText;
            list.appendChild(listItem);
        });

        menu.appendChild(menuTitle);
        menu.appendChild(list);

        return menu;
    }

    // Function to create social media icons
    function createSocialMediaIcons() {
        const iconsContainer = document.createElement("div");
        iconsContainer.className = "fIcons";

        const iconNames = ["facebook", "twitter", "instagram", "whatsapp"];
        iconNames.forEach(iconName => {
            const icon = document.createElement("img");
            icon.decoding = "async";
            icon.src = `./img/${iconName}.png`;
            icon.alt = "";
            icon.className = "fIcon";
            iconsContainer.appendChild(icon);
        });

        return iconsContainer;
    }