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
