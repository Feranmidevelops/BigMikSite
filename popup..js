document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const contactPopup = document.getElementById("contactPopup");
  const closeBtn = document.querySelector(".close-btn");

  if (contactBtn && contactPopup && closeBtn) {
    contactBtn.addEventListener("click", function () {
      contactPopup.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      contactPopup.style.display = "none";
    });
  } else {
    console.error("Elements not found");
  }
});
