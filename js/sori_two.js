
//스크롤
$(window).on("scroll", function () {
    var wrt = $(".slide").offset().top;
    var wrl = $(".slide").offset().left * -1;
    var wid = $(".s_box").width();
    var upn = -1 * ($(window).scrollTop()/500 * wid);

    if ($(window).scrollTop() >= 100) {
        $(".slide").stop().animate({ marginLeft: 0 + upn },1000);
    } else{
        $(".slide").stop().css({ marginLeft: 0 });
    } 
});


// 넘기기 버튼
$(function(){

    var wid = $(".s_box").width() * -1;

    $(".b1").click(function(){
        $(".slide").stop().animate({ marginLeft: 0 + wid },1000);
    });
    $(".b2").click(function(){
        $(".slide").stop().animate({ marginLeft: 0 + wid*2 },1000);
    });
    $(".b3").click(function(){
        $(".slide").stop().animate({ marginLeft: 0 + wid*3 },1000);
    });
    $(".b4").click(function(){
        $(".slide").stop().animate({ marginLeft: 0 + wid*4 },1000);
    });
    $(".s_prev_btn").click(function(){
        $(".slide").stop().animate({ marginLeft: 0 },1000);
    });
})