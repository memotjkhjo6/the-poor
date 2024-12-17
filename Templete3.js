let btn = document.getElementById("btn");

window.onscroll = function () {
  if (scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

scroll();
btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
