$(document).ready(function () {
  ("use strict");
  // window.sr = ScrollReveal();

  // sr.reveal(
  //   ".cardd-box",
  //   {
  //     duration: 600,
  //     distance: "10px",
  //     easing: "ease-out",
  //     origin: "bottom",
  //     reset: true,
  //     scale: 2,
  //     viewFactor: 0,
  //     afterReveal: revealChildren,
  //   },
  //   150
  // );

  // var revealChildren = sr.reveal(
  //   ".cardd-title, .cardd-text",
  //   {
  //     duration: 500,
  //     scale: 1,
  //     distance: "10px",
  //     origin: "bottom",
  //     reset: true,
  //     easing: "ease-out",
  //     viewFactor: 1,
  //   },
  //   75
  // );
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  // var scrollLink = $(".page-scroll");

  // // Active link switching
  // $(window).scroll(function () {
  //   var scrollbarLocation = $(this).scrollTop();

  //   scrollLink.each(function () {
  //     var sectionOffset = $($(this).attr("href")).offset().top - 73;

  //     if (sectionOffset <= scrollbarLocation) {
  //       $(this).parent().addClass("active");
  //       $(this).parent().siblings().removeClass("active");
  //     }
  //   });
  // });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      { scrollTop: 0 },
      500,
      "easeInOutExpo",
      function () {
        $(".back-to-top").fadeOut("slow");
      }
    );
    return false;
  });

  //hideing the nav links when thye are clicked and link indicator
  // $(".navbar-nav .nav-link").click(function () {
  //   $(".navbar-collapse").collapse("hide");
  // });
  // $(".navbar-nav .nav-link").click(function () {
  // $(".navbar-nav .nav-link").removeClass("active");
  // $(this).addClass("active");
  // });

  // chage nav bar color when scrooled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0.1) {
      $(".navbar").addClass("navbar-scrolled navbarb-nav ");
      var myDiv = $("#aboutME");
      myDiv.addClass("");
    } else {
      $(".navbar").removeClass("navbar-scrolled navbarb-nav p-2");
    }
  });
});
window.onload = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/* 
  Tab contenet manager
*/
var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
const opentab = (tab_name) => {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tab_name).classList.add("active-tab");
};
