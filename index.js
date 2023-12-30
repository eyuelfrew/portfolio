$(document).ready(function () {
  ("use strict");
  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 100;

      if (sectionOffset <= scrollbarLocation) {
        // $(this).parent().addClass("active");
        // $(this).parent().siblings().removeClass("active");
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
  window.sr = ScrollReveal();

  sr.reveal(
    ".cardd-box",
    {
      duration: 600,
      distance: "10px",
      easing: "ease-out",
      origin: "top",
      reset: true,
      scale: 2,
      viewFactor: 0,
      // afterReveal: revealChildren,
    },
    150
  );

  sr.reveal(
    ".cardd-title, .cardd-text",
    {
      duration: 500,
      scale: 4,
      distance: "10px",
      origin: "top",
      reset: true,
      easing: "ease-out",
      viewFactor: 5,
    },
    75
  );
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

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

  // hideing the nav links when thye are clicked and link indicator

  // chage nav bar color when scrooled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0.1) {
      $("#navbar").addClass("navbar-scrolled navbarb-nav ");
      var myDiv = $("#aboutME");
      console.log("test worked");
      myDiv.addClass("");
    } else {
      $("#navbar").removeClass("navbar-scrolled navbarb-nav p-2");
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
var typed = new Typed(".typing-text", {
  strings: ["Full-Stack Developer", "Web Designer"],
  typeSpeed: 100,
  smartBackspace: true,
  loop: true,
  backDelay: 700,
  backSpeed: 100,
});
