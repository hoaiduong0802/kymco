const header = document.querySelector("header");
document.addEventListener('scroll', function (e) {
    if (window.pageYOffset >= 500) {
        header.classList.add("bgheader");
    } else {
        header.classList.remove("bgheader");
    }
})

//Toggle Hamberger Button
function menuMobile() {
    const btnMenu = document.querySelector("header .contact .btnmenu");
    const nav = document.querySelector("nav");

    btnMenu.addEventListener('click', function () {
        btnMenu.classList.toggle("active")
        nav.classList.toggle("active")
    })

    function hideNavbar() {
        btnMenu.classList.remove("active")
        nav.classList.remove("active")
    }
    window.addEventListener('resize', function () {
        let widthwindown = this.window.innerWidth
        if (widthwindown > 992) {
            hideNavbar()
        }
    })
}
menuMobile()