document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("show");
  });
  
  function fadeToBlack(event) {
    event.preventDefault();
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 500);
  }