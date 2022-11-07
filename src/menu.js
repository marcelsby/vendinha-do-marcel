const menuButton = document.querySelector("#menu-toggle-button");

menuButton.addEventListener("click", () => {
  const menuLinks = document.querySelector("#menu-links");

  menuLinks.style.display = menuLinks.style.display != "flex" ? "flex" : "none";

  const isMenuOpen = menuLinks.style.display == "flex";

  if (isMenuOpen) {
    menuButton.classList.replace("ph-list", "ph-x");
  } else {
    menuButton.classList.replace("ph-x", "ph-list");
  }
});
