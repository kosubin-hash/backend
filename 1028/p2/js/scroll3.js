$(function(){
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        $('.s_top').text(sct);
        if(sct >= 50 && sct <=500){
            $('.area1').addClass('on');
        }else{
            $('.area1').removeClass('on');
        }
        if(sct >= 500 && sct <=1000){
            $('.area2').addClass('on');
        }else{
            $('.area2').removeClass('on');
        } 
        if(sct >= 1000){
            $('.area3').addClass('on');
        }else{
            $('.area3').removeClass('on');
        }
        if(sct >= 1800){
            $('.area4').addClass('on');
        }else{
            $('.area4').removeClass('on');
        }
        if(sct >= 2300){
            $('.area5').addClass('on');
        }else{
            $('.area5').removeClass('on');
        }
    });
});