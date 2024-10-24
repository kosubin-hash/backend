$(function(){
    // 화면 사이즈 조절하기
    $(window).resize(function(){
        var w = $(this).width();  // 현재 넓이를 w에 저장
        console.log(w);
        if(w < 850){
        }else{
            if($('.mobile_nav').hasClass('active')==true){
                $('.mobile_nav').removeClass('active');
                $('.transparency').removeClass('active');
                $('.mobile_nav .sub').css('display','none'); 
            }
        }
    });

    $('.nav > ul').mouseenter(function(){
        $(this).addClass('over');``
    });
    $(".nav ul").mouseleave(function(){
        $(this).removeClass('over');
    });
    // ↑ hover를 자바로 스크롤 내리기

    // active 클래스 지정하기
    $('.mobile_tab').click(function(){
        $('.mobile_nav').addClass('active');
        $('.transparency').addClass('active');
        return false;
    });
    $('.close').click(function(){
        $('.mobile_nav').addClass('active');
        $('.transparency').addClass('active');
        $('.mobile_nav .sub').css('display','none');
        return false;
    });

    // 모바일 탭 화면에서 가로 줄 3개 누르면 닫히게 하기
    $('.mobile_nav > ul > li >a').click(function(){
        if($(this).next('.sub').css('display') == 'none'){
            $('.mobile_nav .sub').slideUp(300);
            $(this).next('.sub').slideDown(300);
        }else{
            $(this).next('.sub').slideUp(300);
        }
        return false;
    });
});