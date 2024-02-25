let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};
span.onClick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
