"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementsByClassName("togglemenu")

  for(const menuElement of menuToggle) {
    menuElement.addEventListener("click", (event) => {
      const menuBody = menuElement.nextElementSibling

      menuBody.classList.toggle("toggleopen")

    })
  }
}) 