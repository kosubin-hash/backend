$(function(){
    var clone = $('.imgs li').eq(0).clone();
    $('.imgs').append(clone);

    var i = 0;
    var repeat;

    $('.pager li').click(function(){
        i = $(this).index();
        $('.imgs').stop().animate({'margin-left':-i*100+"%"},600);
        $('.pager li').removeClass('on');
        $(this).addClass('on');
    });
    $('.next').click(function(){
        i++;
        if(i==5){
            $('.imgs').stop().animate({'margin-left':-i*100+"%"},600,
                function(){$('.imgs').css('margin-left','0');
              });
              i=0;
        }else{
            $('.imgs').stop().animate({'margin-left':-i*100+"%"},600);
        };
        $('.pager li').removeClass('on');
        $('.pager li').eq(i).addClass('on');
    });

    // if(i == 5){
    //     i=0;
    //     $(".imgs").css("margin-left",0);
    // }
    // i++;
    // $(".imgs").stop().animate({
    //     "margin-left":-i*100+"%"
    // },600);
    // if(i==5){
    //     $(".pager li").removeClass("on");
    //     $(".pager li").eq(0).addClass("on");
    // }else{
    //     $(".pager li").removeClass("on");
    //     $(".pager li").eq(i).addClass("on");
    // }

    $(".prev").click(function(){
        if(i == 0){
            i=5;
            $(".imgs").css("margin-left",-i*100+"%");
        }
        i--;
        $(".imgs").stop().animate({
            "margin-left":-i*100+"%"
        },600);
        $(".pager li").removeClass("on");
        $(".pager li").eq(i).addClass("on");
    });

    function timer(){
        if(i == 5){
            i=0;
            $(".imgs").css("margin-left",'0');
        }
        i++;
        $(".imgs").stop().animate({"margin-left":-i*100+"%"},600);
        if(i==5){
            $(".pager li").removeClass("on");
            $(".pager li").eq(0).addClass("on");
        }else{
            $(".pager li").removeClass("on");
            $(".pager li").eq(i).addClass("on");
        };
       };
       var id = setInterval(timer,2000);
       $('#wrap').mouseover(function(){
        clearInterval(id);
      });
      $('#wrap').mouseleave(function(){
        id = setInterval(timer,2000);
    });
  });