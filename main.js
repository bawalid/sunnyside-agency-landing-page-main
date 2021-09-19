const selectElement = (elemet) => document.querySelector(elemet);

selectElement(".nav-item-mobile").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});