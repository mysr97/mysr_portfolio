// page1 스크롤 버튼 호버시 마우스 바뀌게
$(function(){
  $(".p1_scroll > img").hover(function(){
    $(".cursor").css("opacity","0");
  },function(){
    $(".cursor").css("opacity","1");
  });

  $(".p1_scroll").hover(function(){
    $(".cursor").css("opacity","0");
  },function(){
    $(".cursor").css("opacity","1");
  });
});


// page1 스크롤 버튼 애니메이션
$(document).ready(function ($) {
  $(".p1_scroll").click(function (event) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: $(".page2").offset().top }, 700);

  });
});