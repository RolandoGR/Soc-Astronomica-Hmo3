import { aboutUs } from "./aboutUs";
import logo3 from "./img/LOGO3.png";
import { navigation } from "./navigation.js";
import { hideMenu } from "./mobileMenuTransition";
import { showMenu } from "./mobileMenuTransition";
import { hero } from "./hero";

// Add your JavaScript code here
console.log("Hello, world!");

// get body element
const content = document.getElementById("content");

// call the navigation function and append the nav element to the hero section
const nav = navigation();
content.appendChild(nav);

const heroSection = hero();
content.appendChild(heroSection);

// create aboutUs section
const aboutUsSection = aboutUs();
content.appendChild(aboutUsSection);
