const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header-desktop");
const crossicon = document.querySelector(".cross-icon");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const portfolio = document.getElementById("portfolio");

import cardCreator from "./modules/cardCreator.js";
import projects from "../data/projects.js";
import createPopup from "./modules/popupCreator.js";

hamburger.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  const visibility = header.getAttribute("data-visible");
  if (visibility === "false") {
    header.setAttribute("data-visible", "true");
    console.log("header is false");
  } else if (visibility === "true") {
    header.setAttribute("data-visible", "false");
    console.log("header is true");
  }
});

crossicon.addEventListener("click", () => {
  header.setAttribute("data-visible", "onRight");
  setTimeout(() => {
    header.setAttribute("data-visible", "false");
  }, 400);
  document.body.style.overflow = "auto";
});

portfolio.addEventListener("click", () => {
  header.setAttribute("data-visible", "false");
  document.body.style.overflow = "auto";
});

about.addEventListener("click", () => {
  header.setAttribute("data-visible", "false");
  document.body.style.overflow = "auto";
});

contact.addEventListener("click", () => {
  header.setAttribute("data-visible", false);
  document.body.style.overflow = "auto";
});

window.addEventListener("load", () => {
  cardCreator(projects);
  createPopup();
});
