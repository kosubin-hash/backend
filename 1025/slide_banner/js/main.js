$(function(){
    var visual = $('#brandVisual>ul>li'); // 큰사진
    var button1 = $('#buttonList>li'); // 페이지버튼
    var current = 0; // 현재
    var id;

    button1.click(function(){
        var i = $(this).index();
        button1.removeClass('on');
        button1.eq(i).addClass('on');
        // 클릭 하는 순간 버튼 색 변함(css에서 포지션 줬기 때문)
        move(i); // 지역변수기때문에 함수 안에서만 존재 밖에서도 쓰려면 move 써야댐(매개변수)
    });
    
    // 저번에했던 setInterval auto 말고 다른 버전
    function timer(){
        id = setInterval(function(){
            var n = current + 1;
            if(n==3){
                n=0;
            }
            button1.eq(n).trigger('click');
            // 버튼1 3초마다 n에 값에 따라 클릭하겠다.
        },2000)
      };
    timer();

    function move(i){
        if(current==i) return;
        // 현재 활성화 된 button과 클릭 한 버튼이 같으면 빠져나감
        var cu = visual.eq(current);
        var ne = visual.eq(i);
        cu.css('left','0').stop().animate({'left':'-100%'},500);
        ne.css('left','100%').stop().animate({'left':'0%'},500);
        current = i;
    };
});