$('.sub').hide();
$('.sub').eq(0).show();
$('.m_menu>li>a').click(function(){
    var i = $(this).next('.sub').css('display');
    if(i == 'none'){
        $('.sub').slideUp();
        $(this).next('.sub').slideDown();
    }
    else{
        $('.sub').slideUp();
    }
});