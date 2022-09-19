//main mouse event
const container = document.querySelector(".p1_txt_mask");

document.body.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY - 450;
  gsap.to(container, {
    y: y
  });
  gsap.to(".p1_txt_mask_in", {
    y: -y
  });
});

// page1 스크롤 버튼 호버시 마우스 바뀌게
$(function(){
  $(".menu").hover(function(){
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


//page2 클릭시 내용 보이게
$(function(){
  $(".p2_box2 > div > div > ul > li:nth-of-type(odd)").click(function(){
    $(".p2_box2 > div > div > ul > li:nth-of-type(even)").css("display","none");
    $(this).next().slideToggle();
    $(".p2_box2 > div > div > ul > li:nth-of-type(odd)").css("color","#333");
    $(this).css("color","#ccc");
    $(this).children().eq(1).css("display","none"); //click 없애기
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
  $(".page3 .p3_wr ul li span:nth-of-type(1)").mouseover(function () {
    var color = $(this).siblings();
    var color2 = color.css("color");
    var colorhex = rgbToHex(color2);
    var colorch = colorhex.substring(0, 7);

    $(this).siblings().fadeIn("slow");
    $(this).css("color",colorch);
    $(this).siblings().css("color",colorch);
  })
});


//풀페이지
$(document).ready(function(){
	fullset();
	quickClick();
});

function fullset(){
	var pageindex = $("#wrap > .full").size(); 

	for(var i=1;i<=pageindex;i++){
		$("#wrap > .quick > ul").append("<li></li>");
	}
	$("#wrap > .quick > ul >li:first-child").addClass("on"); 

	//마우스 휠 이벤트
	$(window).bind("mousewheel", function(event){
		var page = $(".quick ul li.on");

		if($("body").find("#wrap:animated").length >= 1) return false;
	
		if(event.originalEvent.wheelDelta >= 0) {
			var before=page.index();
			if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");
			var pagelength=0;
			for(var i=1; i<(before); i++)
			{
				pagelength += $(".page"+i).height();
			}
			if(page.index() > 0){ 
				page=page.index()-1;
				$("#wrap").animate({"top": -pagelength + "px"},1000, "swing");
			}

		}else{ // 마우스 휠을 아래로	
			var nextPage=parseInt(page.index()+1); 
			var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호

			if(page.index() <= $(".quick ul li").size()-1){ 
				page.next().addClass("on").siblings(".on").removeClass("on");
			}
			
			if(nextPage < lastPageNum){ 
				var pagelength=0;
				for(var i = 1; i<(nextPage+1); i++){ 

					pagelength += $(".page"+i).height();
				}
				$("#wrap").animate({"top": -pagelength + "px"},1000, "swing");
			}
			
		}
	});
	$(window).resize(function(){ 

		var resizeindex = $(".quick ul li.on").index()+1;
		
		var pagelength=0;
		for(var i = 1; i<resizeindex; i++){ 

			pagelength += $(".page"+i).height();
		}

		$("#wrap").animate({"top": -pagelength + "px"},0);
	});
}
// 사이드 퀵버튼 클릭 이동
function quickClick(){
	$(".quick li").click(function(){
		var gnbindex = $(this).index()+1;
		var length=0;
		for(var i=1; i<(gnbindex); i++)
		{
			length+=$(".page"+i).height();
		}
		if($("body").find("#wrap:animated").length >= 1) return false;
		$(this).addClass("on").siblings("li").removeClass("on");
		
		$("#wrap").animate({"top": -length + "px"},800, "swing");
		return false;
	});
}