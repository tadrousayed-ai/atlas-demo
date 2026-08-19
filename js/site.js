// تغيير لون النافبار عند النزول بالصفحة
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#000";
        navbar.style.borderBottom = "1px solid #D4AF37";
    } else {
        navbar.style.backgroundColor = "rgba(5, 5, 5, 0.95)";
        navbar.style.borderBottom = "1px solid rgba(212, 175, 55, 0.2)";
    }
});