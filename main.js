import $ from "jquery";
import "jquery.easing";
import "jquery.appear";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/assets/css/main.css";
import Img from "/images/homepage.png";
import my_photo from "/images/eyu.jpg";
import test_pic_1 from "/images/test_photo_1.png";
$(document).ready(function () {
  ("use strict");
  // Smooth scrolling when a navigation link is clicked
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      ); // Adjust the duration (in milliseconds) for the scrolling animation
    }
  });
  /*========================
  =========pre-loader element====
  ================*/
  $(window).on("load", function () {
    $(".preloader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  });

  /*========================
  =========adding images====
  ================*/
  $("#home_image").attr("src", Img);
  $("#image_two").attr("src", my_photo);
  $("#devOps").attr("src", test_pic_1);

  /*========
  ========Stick Navigation to the top when scrooled
  ========*/

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".navbar").addClass("nav-sticky ");
      } else {
        $(".navbar").removeClass("nav-sticky");
      }
    });
  });

  /*===========================
  ========Back to top button===
  =============================*/
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

  /*===================================
  ========Tab menu for about me page===
  =====================================*/
  $(".tab-links").on("click", function (event) {
    var tabName = $(this).data("tab");
    console.log(tabName);
    $(".tab-links").removeClass("active-link");
    $(".tab-contents").removeClass("active-tab");
    $(this).addClass("active-link");
    $("#" + tabName).addClass("active-tab");
  });

  /*===================================================
  ========nav tab color beased on sections or scroll===
  =====================================================*/
  const sections = $("section[id]");
  const navHighlighter = () => {
    let scrollY = $(window).scrollTop();
    sections.each(function () {
      const sectionHeight = $(this).outerHeight();
      const sectionTop = $(this).offset().top - 75;
      const sectionId = $(this).attr("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        $(".navbar-nav a[href*=" + sectionId + "]").addClass("active");
      } else {
        $(".navbar-nav a[href*=" + sectionId + "]").removeClass("active");
      }
    });
  };
  $(window).on("scroll", navHighlighter);

  /*===================================
  ====initialyze auto typing contents===
  =====================================*/
  new Typed(".typing-text", {
    strings: ["Full-Stack Developer", "Web Designer"],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true,
    backDelay: 700,
    backSpeed: 100,
  });

  /* Progress bar width length*/
  var progressBar = $(".progress-bar");
  if (progressBar.length) {
    progressBar.appear(function () {
      progressBar.each(function () {
        var each_bar_width = $(this).attr("aria-valuenow");
        $(this).width(each_bar_width + "%");
      });
    });
  }
});

window.onload = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
