function setActive(element) {
        // ลบคลาส 'active' จากลิงก์ที่มีอยู่เดิม
        document.querySelectorAll('.hhm').forEach(link => link.classList.remove('active'));
        
        // เพิ่มคลาส 'active' ให้กับลิงก์ที่ถูกคลิก
        element.classList.add('active');
    }

function delayRedirect(url, delay) {
        setTimeout(function() {
            window.location.href = filePath;
        }, delay);
    }

let previousScrollPosition = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  let currentScrollPosition = window.pageYOffset;
  
  // เปลี่ยนสีพื้นหลังของ navbar และสีของลิงก์ตามตำแหน่งการเลื่อน
  if (currentScrollPosition === 0) {
    navbar.classList.remove("scrolled"); // โปร่งใสเมื่ออยู่บนสุด
  } else {
    navbar.classList.add("scrolled"); // สีขาวเมื่อเลื่อนลง
  }
}

