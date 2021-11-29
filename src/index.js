const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const textContainer = document.getElementsByClassName('cta-text');
const nav1 = document.getElementsByTagName('nav');


const logoImage = document.getElementById('logo-img');
                            // example below for why brackets
logoImage.src = siteContent.images['logo-img'];

const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent.images['cta-img'];

const accentImage = document.getElementById('middle-img');
accentImage.src = siteContent.images['accent-img'];

const links = document.querySelectorAll('nav a')
const linksArray = Array.from(links);
linksArray[0].textContent = 'Services';
linksArray[1].textContent = 'Product';
linksArray[2].textContent = 'Vision';
linksArray[3].textContent = 'Features';
linksArray[4].textContent = 'About';
linksArray[5].textContent = 'Contact';

const h1Text = document.querySelector('h1');
h1Text.textContent = siteContent.cta.h1;

const buttonText = document.querySelector('button');
buttonText.textContent = siteContent.cta.button;

const h4Content = document.querySelectorAll('h4');
const h4Array = Array.from(h4Content);
h4Array[0].textContent = siteContent['main-content']['features-h4'];
h4Array[1].textContent = siteContent['main-content']['about-h4'];
h4Array[2].textContent = siteContent['main-content']['services-h4'];
h4Array[3].textContent = siteContent['main-content']['product-h4'];
h4Array[4].textContent = siteContent['main-content']['vision-h4'];

const textContent = document.querySelectorAll('p');
const textArray = Array.from(textContent);
textArray[0].textContent = siteContent['main-content']['features-content'];
textArray[1].textContent = siteContent['main-content']['about-content'];
textArray[2].textContent = siteContent['main-content']['services-content'];
textArray[3].textContent = siteContent['main-content']['product-content'];
textArray[4].textContent = siteContent['main-content']['vision-content'];
