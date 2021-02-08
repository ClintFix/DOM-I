const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


//Creating Selectors
const navLinks = document.querySelectorAll('nav a'); //New array like object that includes all nav links
const logoImg = document.querySelector('#logo-img');
const ctaHeaderText = document.querySelector('.cta-text h1');
const ctaButtonText = document.querySelector('.cta-text button');
const ctaImgSrc = document.querySelector('#cta-img');
const mainContentH4 = document.querySelectorAll('h4');
const mainContentP = document.querySelectorAll('.main-content .text-content p');
const middleImg = document.querySelector('#middle-img');
const contactContent = document.querySelectorAll('.contact p');
const footerP = document.querySelector('footer p');

//Update Nav Links
for(let i = 0; i < navLinks.length; i++){ //for loop to assign text to the anchor tags in nav and iterate through site content object
  navLinks[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

//add logo image source to header
logoImg.src = siteContent.nav["img-src"];

// CTA attributes
ctaHeaderText.textContent = siteContent.cta["h1"]; //add text to h1 header
ctaButtonText.textContent = siteContent.cta["button"]; //add text to button
ctaImgSrc.src = siteContent.cta["img-src"];

// Main Content Headers
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

// Main Content Paragraphs
mainContentP[0].textContent = siteContent['main-content']['features-content'];
mainContentP[1].textContent = siteContent['main-content']['about-content'];
mainContentP[2].textContent = siteContent['main-content']['services-content'];
mainContentP[3].textContent = siteContent['main-content']['product-content'];
mainContentP[4].textContent = siteContent['main-content']['vision-content'];

//middle image
middleImg.src = siteContent['main-content']['middle-img-src'];

//contact content
mainContentH4[5].textContent = siteContent['contact']['contact-h4'];
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

//footer content
footerP.textContent = siteContent['footer']['copyright'];

