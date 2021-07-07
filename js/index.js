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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// selects nav
let navMain= document.querySelector('nav');

// changes nav background-color
navMain.style.backgroundColor = 'green';

// collects all anchors on the page
let navItems = document.querySelectorAll('a')

// changes anchor title depending on the index number
navItems[0].textContent=siteContent["nav"]["nav-item-1"]
navItems[1].textContent=siteContent["nav"]["nav-item-2"]
navItems[2].textContent=siteContent["nav"]["nav-item-3"]
navItems[3].textContent=siteContent['nav']["nav-item-4"]
navItems[4].textContent=siteContent["nav"]["nav-item-5"]
navItems[5].textContent=siteContent["nav"]["nav-item-6"]

// creates 2 new anchors
const newAnchor= document.createElement('a');
newAnchor.textContent='Meet the Team';
navMain.appendChild(newAnchor)

const nuevoAnchor= document.createElement('a');
nuevoAnchor.textContent='Random Link';
navMain.prepend(nuevoAnchor);


// selects the one h1 on the page
let title = document.querySelector('h1')

// changes what the h1 says
title.textContent=siteContent["cta"]["h1"];

// selects button
const button = document.querySelector('button');

//chagnges the button content
button.textContent=siteContent["cta"]["button"];

// selects the img
const ctaImg = document.getElementById('cta-img')

// changes the img src
ctaImg.setAttribute('src',siteContent["cta"]["img-src"]);

//selects all h4 on the page
const subTitles = document.querySelectorAll('h4')

// changes what each h4 says depending on the index
subTitles[0].textContent=siteContent["main-content"]["features-h4"];

subTitles[1].textContent=siteContent["main-content"]['about-h4'];

subTitles[2].textContent=siteContent['main-content']['services-h4'];

subTitles[3].textContent=siteContent['main-content']['product-h4'];

subTitles[4].textContent=siteContent['main-content']['vision-h4'];

subTitles[5].textContent=siteContent['contact']['contact-h4'];


// selects the middle img
const stretchImg = document.getElementById('middle-img')

// changes the img src
stretchImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])

// selects p tags on the page
const pageText = document.querySelectorAll('p');


// p tags of the main content
pageText[0].textContent=siteContent["main-content"]["features-content"];

pageText[1].textContent=siteContent["main-content"]["about-content"];

pageText[2].textContent=siteContent['main-content']['services-content'];

pageText[3].textContent=siteContent['main-content']['product-content'];

pageText[4].textContent=siteContent['main-content']['vision-content']


// p tags of the contact
pageText[5].textContent=siteContent['contact']['address']

pageText[6].textContent=siteContent['contact']['phone']

pageText[7].textContent=siteContent['contact']['email']

// p tag of the footer
pageText[8].textContent=siteContent['footer']['copyright']
