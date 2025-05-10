const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = nav.offsetHeight + "0";
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);


document.addEventListener("DOMContentLoaded", function (event) {
  countdown();
});

const countdown = () => {
  const eventDate = new Date("March 8, 2026 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const distance = eventDate - currentDate;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
};
setInterval(countdown, 1000);
window.onload = countdown;

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});


