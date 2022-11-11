const dropdownToggleButton = document.querySelector("#dropdown-toggle-button");

dropdownToggleButton.addEventListener("click", () => {
  const dropdownLinks = document.querySelector("#dropdown-links");

  dropdownLinks.classList.toggle("hide");
  dropdownLinks.classList.toggle("show-flex");

  const isMenuOpen = dropdownLinks.classList.contains("show-flex");

  if (isMenuOpen) {
    dropdownToggleButton.classList.replace("ph-list", "ph-x");
  } else {
    dropdownToggleButton.classList.replace("ph-x", "ph-list");
  }
});
