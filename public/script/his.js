function makeScreenWhite(event) {
  event.preventDefault(); // หยุดการนำทางชั่วคราว
  document.body.style.backgroundColor = "white"; // เปลี่ยนพื้นหลังเป็นสีขาว
  document.body.innerHTML = ""; // ลบเนื้อหาทั้งหมดในหน้าเว็บ

  // รอเวลาเล็กน้อยก่อนเปลี่ยนหน้า
  setTimeout(() => {
      window.location.href = event.target.href; // นำทางไปยัง href
  }, 500); // รอ 500 มิลลิวินาที (0.5 วินาที)
}

function fadeToBlack(event) {
event.preventDefault(); // หยุดการนำทางชั่วคราว

// สร้างองค์ประกอบสำหรับการเฟด
const fadeOverlay = document.createElement("div");
fadeOverlay.className = "fade";
document.body.appendChild(fadeOverlay);

// เริ่มการเฟดโดยเปลี่ยนค่า opacity
setTimeout(() => {
    fadeOverlay.style.opacity = "1";
}, 10); // ใช้เวลาเล็กน้อยเพื่อให้ transition ทำงาน

// รอให้การเฟดเสร็จสิ้นก่อนเปลี่ยนหน้า
setTimeout(() => {
    window.location.href = event.target.href; // นำทางไปยัง href
}, 1000); // เวลาเดียวกับ transition (1 วินาที)
}

// สไลด์รูป
const slider = document.getElementById("slider");
const images = document.querySelectorAll(".slideshow-wrapper img");
const totalImages = images.length;
let currentIndex = 0;

const firstImageClone = images[0].cloneNode(true);
slider.appendChild(firstImageClone);

function slideImages() {
  currentIndex++;

  const offset = currentIndex * -65;
  slider.style.transform = `translateX(${offset}%)`;

  if (currentIndex === totalImages) {
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(0%)`;
      currentIndex = 0;

      setTimeout(() => {
        slider.style.transition = "transform 1.3s ease-in-out";
      }, 10);
    }, 1300);
  }
}

setInterval(slideImages, 4000);

function toggleMenu() {
  const menu = document.querySelector('.mobile-menu');
  const content = document.querySelector('.content');
  const body = document.querySelector('body');
  menu.classList.toggle('active');
  content.classList.toggle('blur');
  body.classList.toggle('no-scroll');
}