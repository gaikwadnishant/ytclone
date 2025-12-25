const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});