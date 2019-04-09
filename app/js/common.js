$(function() {
  $('.home-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true
  });
  var specSlider = $('.spec-slider.owl-carousel');
  specSlider.owlCarousel({
    responsive: {
      0: {
        items: 3
      },
      1400: {
        items: 5
      }
    },
    margin: 10,
    loop: true,
    center: true,
    smartSpeed: 400,
  });
  specSliderGo();

  var factSlider = $('.facts-slider.owl-carousel');
  factSlider.owlCarousel({
    responsive: {
      0: {
        items: 3
      },
      1400: {
        items: 5
      }
    },
    margin: 10,
    loop: true,
    center: true,
    smartSpeed: 400,
  });
  factSliderGo();

  $('.s-specialists .zoom .next').click(function(e){
    e.preventDefault();
    $('.spec-slider .owl-next').trigger('click');
    specSliderGo();
    $('.s-specialists .zoom').removeClass('active');
    $('.s-specialists .zoom').addClass('deact');
    setTimeout(function(){
      $('.s-specialists .zoom').removeClass('deact');
      $('.s-specialists .zoom').addClass('active');
    }, 200);
  });
  $('.s-specialists .zoom .prev').click(function(e){
    e.preventDefault();
    $('.spec-slider .owl-prev').trigger('click');
    specSliderGo();
    $('.s-specialists .zoom').removeClass('active');
    $('.s-specialists .zoom').addClass('deact');
    setTimeout(function(){
      $('.s-specialists .zoom').removeClass('deact');
      $('.s-specialists .zoom').addClass('active');
    }, 200);
  });

  $('.s-facts .zoom .next').click(function(e){
    e.preventDefault();
    $('.facts-slider .owl-next').trigger('click');
    factSliderGo();
    $('.s-facts .zoom').removeClass('active');
    $('.s-facts .zoom').addClass('deact');
    setTimeout(function(){
      $('.s-facts .zoom').removeClass('deact');
      $('.s-facts .zoom').addClass('active');
    }, 200);
  });
  $('.s-facts .zoom .prev').click(function(e){
    e.preventDefault();
    $('.facts-slider .owl-prev').trigger('click');
    factSliderGo();
    $('.s-facts .zoom').removeClass('active');
    $('.s-facts .zoom').addClass('deact');
    setTimeout(function(){
      $('.s-facts .zoom').removeClass('deact');
      $('.s-facts .zoom').addClass('active');
    }, 200);
  });

  $('.reviews-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: true
  });
  $('.gallery-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  });

  $('.consult').click(function(e){
    e.preventDefault();
    $('.popup-wrapper').fadeIn().css('display','flex');
  });
  $('.close').click(function(e){
    e.preventDefault();
    $('.popup-wrapper').fadeOut();
  });
  $('.popup-wrapper').click(function(e){
    $(this).fadeOut();
  });
  $('.popup-wrapper .form').click(function(e){
    e.stopPropagation();
  });

  $('a[href^="#"]').mPageScroll2id({
    scrollEasing: 'swing'
  });
  $('form').submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
      th.trigger("reset");
    });
    return false;
  });

  function specSliderGo() {
    var img = $('.spec-slider .owl-item.center .img').html();
    $('.s-specialists .zoom .img').html(img);
    var name = $('.spec-slider .owl-item.center .name').html();
    $('.s-specialists .zoom .name').html(name);
    var who = $('.spec-slider .owl-item.center .who').html();
    $('.s-specialists .zoom .who').html(who);
    var about = $('.spec-slider .owl-item.center .about').html();
    $('.s-specialists .zoom .about').html(about);
    var number = $('.spec-slider .owl-item.center .number').html();
    $('.s-specialists .zoom .number').html(number);
  }
  function factSliderGo() {
    var img = $('.facts-slider .owl-item.center .img').html();
    $('.s-facts .zoom .img').html(img);
    var text = $('.facts-slider .owl-item.center .text').html();
    $('.s-facts .zoom .text').html(text);
  }
});
