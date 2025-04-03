
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  // Toggle the visibility of the mobile menu
  mobileMenu.classList.toggle("hidden");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        document.getElementById("sctop").style.opacity = "1";
        document.getElementById("sctop").style.transition = "1.5s";
      } else {
        document.getElementById("sctop").style.opacity = "0";
      }
}

function scrollTopp() {
    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    perPage: 3,  // แสดง 3 ภาพพร้อมกัน
    perMove: 1,  // เลื่อนไปทีละ 1 ภาพ
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    gap: "1rem",  // ระยะห่างระหว่างภาพ
    breakpoints: {
      1024: { perPage: 2 }, // หน้าจอเล็กแสดง 2 ภาพ
      768: { perPage: 1 }   // มือถือแสดง 1 ภาพ
    }
  }).mount();
});