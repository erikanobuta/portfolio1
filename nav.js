$(function () {
  $('.menu').on('click', function (){
    $(this).toggleClass('active');
    $(".blockNav").toggleClass('active');
  })
})
$(function () {
  $('.blockNav a').on('click', function (){
    $('.blockNav').toggleClass('active');
    $(".menu").toggleClass('active');
  })
})