function setActive(element) {
        // ลบคลาส 'active' จากลิงก์ที่มีอยู่เดิม
        document.querySelectorAll('.hhm').forEach(link => link.classList.remove('active'));
        
        // เพิ่มคลาส 'active' ให้กับลิงก์ที่ถูกคลิก
        element.classList.add('active');
    }

function delayRedirect(url, delay) {
        setTimeout(function() {
            window.location.href = url;
        }, delay);
    }