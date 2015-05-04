$(document).ready(function() {
  //上一页，下一页样式
    $('.b_page').each(function (index){
       $(this).click(function(){
       	   $('.b_page').removeClass('b_color');
           $(this).addClass('b_color');
           $('##next_above span').css({'margin-right':'32px'})
       });
    });
    //点击所在城市、擅长领域子菜单背景色变化
    $('.c_name').each(function (index){ 
        var Children=$(this).children();
        Children.each(function(){
        	$(this).click(function(){
                $(this).siblings().removeClass('c_all');
                $(this).addClass('c_all');
        	});
        });
    });
    //工作室翻页点击效果
    $('.o_page').each(function (index){
        $(this).click(function(){
            $('.o_page').removeClass('border');
            $(this).addClass('border');
        });
    });
   
});