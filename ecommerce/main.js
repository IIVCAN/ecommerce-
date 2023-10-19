const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const discountBanner = document.querySelector(".discount-banner");

  // Display the discount banner after a delay (e.g., 5 seconds)
  setTimeout(function () {
      discountBanner.style.display = "block";
  }, 5000);


  // Close the banner when clicked
  discountBanner.addEventListener("click", function () {
      discountBanner.style.display = "none";
  });
});

function moveText(element, duration) {
  const start = -100; // Starting position off-screen to the left
  const end = 0;     // Ending position, which is the original position

  let startTime;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / duration;
    element.style.left = start + progress * (end - start) + '%';

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const h4 = document.getElementById('animate-h4');
const h2 = document.getElementById('animate-h2');
const h1 = document.getElementById('animate-h1');
const p = document.getElementById('animate-p');

moveText(h4, 1000); // Adjust the duration (in milliseconds) as needed
moveText(h2, 1500);
moveText(h1, 2000);
moveText(p, 2500);




const shopNowButtons = document.querySelectorAll('.shop-now');
shopNowButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
