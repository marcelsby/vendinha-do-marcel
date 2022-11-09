const dropdownToggleButton = document.querySelector("#dropdown-toggle-button");

dropdownToggleButton.addEventListener("click", () => {
  const dropdownLinks = document.querySelector("#dropdown-links");

  dropdownLinks.style.display =
    dropdownLinks.style.display != "flex" ? "flex" : "none";

  const isMenuOpen = dropdownLinks.style.display == "flex";

  if (isMenuOpen) {
    dropdownToggleButton.classList.replace("ph-list", "ph-x");
  } else {
    dropdownToggleButton.classList.replace("ph-x", "ph-list");
  }
});
