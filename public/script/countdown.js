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

  const container = document.querySelector('.carousel-container');
  const images = document.querySelectorAll('.carousel img');

  function setActiveImage() {
    const center = container.scrollLeft + container.offsetWidth / 2;
    let closest = null;
    let closestDistance = Infinity;

    images.forEach(img => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const distance = Math.abs(center - imgCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = img;
      }
    });

    images.forEach(img => img.classList.remove('active'));
    if (closest) closest.classList.add('active');
  }

  container.addEventListener('scroll', () => {
    clearTimeout(container._scrollTimeout);
    container._scrollTimeout = setTimeout(setActiveImage, 50);
  });

  window.addEventListener('load', setActiveImage);

  // Desktop drag-to-scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => isDown = false);
  container.addEventListener('mouseup', () => isDown = false);

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
