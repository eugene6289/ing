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