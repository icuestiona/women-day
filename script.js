const toggleNav = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
};

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", function (event) {
  countdown();
});

const countdown = () => {
  const eventDate = new Date("March 8, 2024 00:00:00").getTime();
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
