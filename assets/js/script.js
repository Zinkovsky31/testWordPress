const scrollUp = document.querySelector(".scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.getElementById("openModalBtn").addEventListener("click", function () {
  var myModal = new bootstrap.Modal(document.getElementById("contactModal"));
  myModal.show();
});
