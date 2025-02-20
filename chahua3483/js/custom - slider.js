let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.rslides li');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    // 移除所有幻灯片的 active 类
    slides.forEach((slide) => slide.classList.remove('active'));
    // 为当前幻灯片添加 active 类
    slides[slideIndex - 1].classList.add('active');
}