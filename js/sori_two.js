
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