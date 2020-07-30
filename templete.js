/*change navbar on resize*/

var hamburger = document.querySelector('#navbar-toggle');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
})

/**/
const heroText = document.querySelector('.hero-text-1');
const barber = document.querySelector('.barber');
const homeBtn = document.querySelector('.home-btn');

const timeline = new TimelineMax(); 

timeline.fromTo(heroText, 1, { opacity: 0, y: -100}, {opacity: 1, y: 0}, "+=1.5")
.fromTo(homeBtn, 1, { opacity: 0, y: 100}, {opacity: 1, y: 0}, "-=1")
.fromTo(barber, 0.8, {color: "white"}, {color: "#96885f"}, "-=0.5")
.fromTo(heroText, 1,{textShadow: "none"}, {textShadow: "1px 5px 5px rgba(0, 0, 0, 0.19)"}, "-=0.5")

const scrollBtn = document.getElementById("scrollTop");
const navbar = document.getElementById("navbar");

window.onscroll = function () {
    scrollTop()
};
scrollTop();

function scrollTop() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
        scrollBtn.style.display = "block";
        navbar.style.backgroundColor = "rgba(7, 7, 7, 0.92)";
        navbar.style.transition = ".3s ease-in";
    } else {
        scrollBtn.style.display = "none";
        navbar.style.background = "transparent";
    }
}
function Top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




var ctrl = new ScrollMagic.Controller();
$(".fade").each(function (i) {
    var section = $(this);
    var tl = new TimelineMax();
    tl.fromTo(section, 0.9, {y: 150}, {y: 0});
    new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.85
        })
        .setTween(tl)
        .removeIndicators()
        .addTo(ctrl);
});

//smooth scroll to target section
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $(".link-item").on('click', function (event) {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        $(".nav-links").find(".link-item.active").removeClass('active');
        currentLink.addClass('active');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    }); 
});


	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('li .link-item').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$(".navbar .nav-links").find(".link-item.active").removeClass('active');
        currentLink.addClass('active');
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}


//Gallery img
var modal = $("#myModal");
var span = $(".close");
var img = $(".container-gallery");
var modalImg = $("#imgModal");
var captionText = $("#caption");
img.on('click', function(){
    var $this = $(this);
    modal.css("display" , "block");
    var srcs = $this.children('img').attr("src");
     var alt = $this.find('.text-img').html();
    modalImg.attr("src" , srcs);
    $("#caption").text(alt);
}) 
  span.on('click', function(){
      modal.hide();
  })

/*TimelineMax*/


