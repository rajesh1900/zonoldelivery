// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// toggle overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// slick slider

$(".slider_container").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    draggable: false,
    prevArrow: '<button class="slick-prev"> </button>',
    nextArrow: '<button class="slick-next"></button>',
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint:360,
            settings: {
                slidesToShow:2,
                slidesToScroll: 2,
            },
        }
    ]
});


// start vertical scroll bar add with javascript
$(window).scroll(function () {
    if($(this).scrollTop() > 50){
        $(".navComp").addClass("addBg")
    }else{
        $(".navComp").removeClass("addBg")
    }
});




// end vertical scroll bar add with javascript
$('#appScreenSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })

//   start smooth scroll
$("#navbarNavAltMarkup a").click(function(event){
    event.preventDefault();

    let sectionId = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(sectionId).offset().top -140
    },200)
    
});
// console.log(navbarNavAltMarkupEle);

$(".overlay-content > a").click(function(event){

    let sectionId = $(this).attr("href");
    console.log("sectionId",sectionId );
    $("html, body").animate({
        scrollTop: $(sectionId).offset().top - 140
    },200)
    
});
// responsive menu
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 50){
        $(".header_section").addClass("fixed-top")
        $(".header_section").addClass("mobileAddBg")
        $(".slider_section ").addClass("transformMove")
      
    }else{
        $(".header_section").removeClass("fixed-top")
        $(".header_section").removeClass("mobileAddBg")
        $(".slider_section ").removeClass("transformMove")


    }
    console.log(scroll)
});