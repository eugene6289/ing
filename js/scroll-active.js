//about
$(document).ready(function () {
    var aboutEl = $('div.about');
    var aboutElOffset = aboutEl.offset().top / 2;
    var  documentEl = $(document);

    documentEl.on('scroll', function () {
      if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });
  })

  $(document).ready(function () {
    var aboutEl = $('div.about-2');
    var aboutElOffset = aboutEl.offset().top / 2;
    var  documentEl = $(document);

    documentEl.on('scroll', function () {
      if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')){
          aboutEl.removeClass('hidden');
      } 
    });
  })

  //login about
  $(document).ready(function () {
    var aboutEl = $('.section-3 .login-about');
    var aboutElOffset = aboutEl.offset().top /1.2;
    var  documentEl = $(document);

    documentEl.on('scroll', function () {
      if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')){
          aboutEl.removeClass('hidden');
      } 
    });
  })

  //login UI
  $(document).ready(function () {
    var aboutEl = $('.section-3 .container-login');
    var aboutElOffset = aboutEl.offset().top /1.2;
    var  documentEl = $(document);

    documentEl.on('scroll', function () {
      if (documentEl.scrollTop() > aboutElOffset ){
        aboutEl.css({
          "transform" : "translateX(0)",
          "opacity" : "1"
        })
      } 
    });
  })

  //register about
  $(document).ready(function () {
    var aboutEl = $('.section-4 .register-about');
    var aboutElOffset = aboutEl.offset().top / 1.2;
    var  documentEl = $(document);

    documentEl.on('scroll', function () {
      if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')){
          aboutEl.removeClass('hidden');
      } 
    });
  })

  //register form
  $(document).ready(function () {
    var aboutEl = $('.section-4 .container-register');
    var aboutElOffset = aboutEl.offset().top /1.2;
    var  documentEl = $(document);

    documentEl.on('scroll', function () {
      if (documentEl.scrollTop() > aboutElOffset ){
          aboutEl.css({
            "transform" : "translateX(0)",
            "opacity" : "1"
          })
        } 
      });
    })

  //weather-about
  $(document).ready(function () {
    var aboutEl = $('.section-6 .weather-about');
    var aboutElOffset = aboutEl.offset().top-400;
    var  documentEl = $(document);

    documentEl.on('scroll', function () {
      if (documentEl.scrollTop() > aboutElOffset ){
          aboutEl.addClass("animated bounceInDown").css({
            "opacity" : "1"
          })
        } 
      });
    })

