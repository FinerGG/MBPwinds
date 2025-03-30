document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text-name h1');
    const descriptionElement = document.querySelector('.description p');
    const text = 'MATTHAYOM BANBANGKAPI';
    const description = 'WINDS SYMPHONY';
    let index = 0;
    let descIndex = 0;
  
    // ฟังก์ชันพิมพ์ข้อความ
    function typeText() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index); // เพิ่มตัวอักษรทีละตัว
        textElement.style.opacity = 1; // แสดงข้อความ
        index++;
        setTimeout(typeText, 100); // เพิ่มความล่าช้า
      } else {
        setTimeout(typeDescription, 500); // เว้นช่วงก่อนแสดง description
      }
    }
  
    // ฟังก์ชันพิมพ์ข้อความสำหรับ description
    function typeDescription() {
      if (descIndex < description.length) {
        descriptionElement.textContent += description.charAt(descIndex);
        descriptionElement.style.opacity = 1;
        descIndex++;
        setTimeout(typeDescription, 100);
      }
    }
  
    // รอ 2 วินาที ก่อนเริ่มพิมพ์ข้อความ
    setTimeout(typeText, 1500);
  });

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

function toggleMenu() {
  const menu = document.querySelector('.mobile-menu');
  const content = document.querySelector('.content');
  const body = document.querySelector('body');
  menu.classList.toggle('active');
  content.classList.toggle('blur');
  body.classList.toggle('no-scroll');
}