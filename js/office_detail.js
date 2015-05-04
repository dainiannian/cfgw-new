$(document).ready(function(){
	//照片遮罩
            $('.person_picture').each(function (index){
              console.log(556);
                $(this).hover(function(){
                    $(this).find('.mask').addClass('show');
                },function(){
                    $(this).find('.mask').removeClass('show');
                });
            });
            //点击导航菜单下面的黄色条移动
            $('.hw_item a').each(function (index){
                $(this).click(function(){
                    var left=index*180;
                    $('.orange_item').css({'left':left});
                });
            });
            //点击导航菜单滚动到相应的内容
            $('#hw_o_d').click(function (){
                $.scrollTo('#office_introduce', 700);
            });
            $('#hw_a_a').click(function (){
                $.scrollTo('#an_advisory', 700);
            });
            $('#hw_r_p').click(function (){
                $.scrollTo('#related_products', 700);
            });
            $('#hw_v_i').click(function (){
                $.scrollTo('#view_interact', 700);
            });
            //当页面滚动到一定高度的时候导航菜单悬浮
            $(window).scroll(function(){
                var Height=$(window).scrollTop();
                if(Height >=310){
                   $('.o_d_model_02').addClass('position');
                }else{
                   $('.o_d_model_02').removeClass('position');
                }
            });
            //照片人物遮罩
})