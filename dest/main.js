// Test Hieght
const pageY = document.addEventListener('scroll', function () {
    console.log(window.pageYOffset)
})

//Scroll Background Header
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




//Slider
let $carousel = $(".slider .slider__item");
$carousel.flickity({
    //option
    prevNextButtons: false,
    contain:true,
    wrapAround:true,
    autoPlay: true,
    pageDots: false,
    on:{
        change: function(index){
            let number = $(".slider .slider__bottom-right .current_page");
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2,0));
        }
    }
})
