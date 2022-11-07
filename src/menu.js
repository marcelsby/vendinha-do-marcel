const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", () => {
  const header = document.querySelector("header");
  const menuLinks = document.querySelector("#menu-links");

  menuLinks.style.display = menuLinks.style.display != "flex" ? "flex" : "none";

  const isMenuOpen = menuLinks.style.display == "flex";

  menuButton.style.color = isMenuOpen ? "#ACACAC" : "#FBFBFB";
  header.style.borderRadius = isMenuOpen ? "0 0 12px 12px" : "0 0 0 0";
});
