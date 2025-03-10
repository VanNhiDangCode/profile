document.addEventListener("mousemove", function (event) {
    let glow = document.querySelector(".glow");

    // Lấy tọa độ chuột và cộng thêm độ cuộn để tránh lệch
    let mouseX = event.clientX;
    let mouseY = event.clientY + window.scrollY;

    // Cập nhật vị trí glow
    glow.style.left = `${mouseX}px`;
    glow.style.top = `${mouseY}px`;
});
document.querySelector(".navexperiences").addEventListener("click", function () {
    document.querySelector(".experiences").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".about").addEventListener("click", function () {
    document.querySelector(".star").scrollIntoView({
        behavior: "smooth"
    });
});
document.querySelector(".projects").addEventListener("click", function () {
    document.querySelector(".fullprojectss").scrollIntoView({
        behavior: "smooth"
    });
});
