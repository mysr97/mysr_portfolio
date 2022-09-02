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



//컬러 변경

function rgbToHex ( rgbType ){ 
  /* 
  ** 컬러값과 쉼표만 남기고 삭제하기. 
  ** 쉼표(,)를 기준으로 분리해서, 배열에 담기. 
  */ 
  var rgb = rgbType.replace( /[^%,.\d]/g, "" ).split( "," ); 
  
  rgb.forEach(function (str, x, arr){ 
  
      /* 컬러값이 "%"일 경우, 변환하기. */ 
      if ( str.indexOf( "%" ) > -1 ) str = Math.round( parseFloat(str) * 2.55 ); 
      
      /* 16진수 문자로 변환하기. */ 
      str = parseInt( str, 10 ).toString( 16 ); 
      if ( str.length === 1 ) str = "0" + str; 
      
      arr[ x ] = str; 
  }); 
  
  return "#" + rgb.join( "" ); 
};

$(document).ready(function () {
  $(".page2 .p2_wr ul li").mouseover(function () {
    var color = $(this).children();
    var color2 = color.css("color");
    var colorhex = rgbToHex(color2);
    var colorch = colorhex.substring(0, 7);

  console.log(color2)
    $(this).children().fadeIn("slow");
    $(this).css("color",colorch);
    $(this).children().css("color",colorch);
  })
});