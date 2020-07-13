/**
 * Template Name: Techie - v2.0.0
 * Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (
    e
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($("#header").length) {
          scrollto -= $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == "#header") {
          scrollto = 0;
        }

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Effect Card

  // $(document).ready(function(){
  //   $("#effect-slide").hover(function(){
  //     $(this).parent().children("h4").child().css('color', 'transparent').css('transition', 'all 5s');
  //      console.log($(this).parent().children("h4").eq(0)[0]);
  //     }, function(){

  //   });
  // });

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button id="sandwitch" style="margin-top: -25px; z-index: 20000;" type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 90;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // $(window).scroll(function() {
  //   // console.log($(this).scrollTop());
  //   if ($(this).scrollTop() > 580) {
  //     $('.header-scrolled').css('background-color', '#8254EA').css('transition', 'all 0.5s');
  //   }

  //   if ($(this).scrollTop() < 580) {
  //     $('.header-scrolled').css('background-color', 'black').css('transition', 'all 1s');
  //   }

  //   if ($(this).scrollTop() < 100) {
  //     $('.header-scrolled').css('background-color', 'transparent').css('transition', 'all 1s');
  //   }

  //   if ($(this).scrollTop() > 1275) {
  //     $('.header-scrolled').css('background-color', '#39cefd').css('transition', 'all 0.5s');
  //   }

  //   if ($(this).scrollTop() > 2627) {
  //     $('.header-scrolled').css('background-color', '#01579B').css('transition', 'all 0.5s');
  //   }

  //   if ($(this).scrollTop() > 3510) {
  //     $('.header-scrolled').css('background-color', '#546E7A').css('transition', 'all 0.5s');
  //   }

  //   if ($(this).scrollTop() > 4222) {
  //     $('.header-scrolled').css('background-color', '#FF4081').css('transition', 'all 0.5s');
  //   }

  //   if ($(this).scrollTop() > 5700) {
  //     $('.header-scrolled').css('background-color', '#00C853').css('transition', 'all 0.5s');
  //   }

  //   if ($(this).scrollTop() > 6504) {
  //     $('.header-scrolled').css('background-color', '#004D40').css('transition', 'all 0.5s');
  //   }

  //   if ($(this).scrollTop() > 7428) {
  //     $('.header-scrolled').css('background-color', '#212121').css('transition', 'all 0.5s');
  //   }

  // });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
      $("#logo-img").attr("src","assets/img/multicolor-logo-wide.png");
      $("#sandwitch").css("margin-top", "0").css("transition", "all 0.5s");
    } else {
      $("#header").removeClass("header-scrolled");
      $("#logo-img").attr("src","/assets/img/white-logo-wide.png");
      $("#sandwitch").css("margin-top", "-25px").css("transition", "all 0.5s");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Initi AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  aos_init();
})(jQuery);
