function toggleReview(button) {
  const dots = button.previousElementSibling.querySelector('.dots');
  const moreText = button.previousElementSibling.querySelector('.more-text');

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    button.textContent = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    button.textContent = "Read Less";
  }
}