"use strict";
//making a responsive and interactive nav bar
const burgerIcon = document.querySelector("#hamburger");
const ulMobile = document.querySelector(".ul-mobile");
const xmarkIcon = document.getElementById("xmark");

burgerIcon.addEventListener("click", function () {
  ulMobile.style.display = "block";
  burgerIcon.style.display = "none";
  xmarkIcon.style.display = "block";
});

xmarkIcon.addEventListener("click", () => {
  ulMobile.style.display = "none";
  burgerIcon.style.display = "block";
  xmarkIcon.style.display = "none";
});

//switching the review section
const switchReviewsLeft0 = document.querySelector(".btn-left-0");
const switchReviewsRight0 = document.querySelector(".btn-right-0");
const switchReviewsLeft1 = document.querySelector(".btn-left-1");
const switchReviewsRight1 = document.querySelector(".btn-right-1");
const review1 = document.querySelector(".reviews-0");
const review2 = document.querySelector(".reviews-1");

const reviewToggle = function () {
  if (review1.classList.contains("hidden")) {
    review1.classList.toggle("hidden");
    review2.classList.toggle("hidden");
  } else {
    review1.classList.toggle("hidden");
    review2.classList.toggle("hidden");
  }
};

switchReviewsRight0.addEventListener("click", reviewToggle);
switchReviewsLeft0.addEventListener("click", reviewToggle);
switchReviewsRight1.addEventListener("click", reviewToggle);
switchReviewsLeft1.addEventListener("click", reviewToggle);
