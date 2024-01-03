import "bootstrap/dist/css/bootstrap.min.css";
import "/src/assets/css/main.css";
import "/src/libs/vendor/scrolling-nav";
import Img from "/images/image.svg";
import my_photo from "/images/eyu.jpg";
$(document).ready(function () {
  ("use strict");

  //adding images
  $("#image_one").attr("src", Img);
  $("#image_two").attr("src", my_photo);
  //Stick Navigation to the top when scrooled
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".navbar").addClass("nav-sticky ");
      } else {
        $(".navbar").removeClass("nav-sticky");
      }
    });
  });
  //Back to top button
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
  //Color of them changer when clicked
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("");
    $("body").toggleClass("dark-mode");
  });
  //change tab in about me page
  $(".tab-links").on("click", function (event) {
    var tabName = $(this).data("tab");
    console.log(tabName);
    $(".tab-links").removeClass("active-link");
    $(".tab-contents").removeClass("active-tab");
    $(this).addClass("active-link");
    $("#" + tabName).addClass("active-tab");
  });
  //navigate tab based on scrool postion
  const sections = $("section[id]");
  const navHighlighter = () => {
    let scrollY = $(window).scrollTop();
    sections.each(function () {
      const sectionHeight = $(this).outerHeight();
      const sectionTop = $(this).offset().top - 75;
      const sectionId = $(this).attr("id");
      console.log(sectionId);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        $(".navbar-nav a[href*=" + sectionId + "]").addClass("active");
      } else {
        $(".navbar-nav a[href*=" + sectionId + "]").removeClass("active");
      }
    });
  };
  $(window).on("scroll", navHighlighter);

  //initialyze auto typing contents
  new Typed(".typing-text", {
    strings: ["Full-Stack Developer", "Web Designer"],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true,
    backDelay: 700,
    backSpeed: 100,
  });
});

//window scrol smooting
window.onload = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
