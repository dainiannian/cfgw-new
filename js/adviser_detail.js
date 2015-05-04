$(document).ready(function(){
           $('#contact_me').click(function(){
                $('#contact_me span').css({'background':'#ebebeb','color':'#333'})
           });
           $('.or_div').each(function (index){
                $(this).click(function(){
                    var mun=$('.or_div').eq(index);
                    var litter=$('.lit_p').eq(index);
                    var bg=$('.icon_picture').eq(index);
                    $('.or_div').removeClass('bgcolor');
                    mun.addClass('bgcolor');
                    $('.lit_p').removeClass('appear');
                    litter.addClass('appear');
                });
                $('.pic_01').addClass('bg_01');
                $('.or_div').eq(0).click(function(){
                     $('.pic_01').addClass('bg_01');
                     $('.pic_02').removeClass('bg_02');
                     $('.pic_03').removeClass('bg_03');
                });
                $('.or_div').eq(1).click(function(){
                     $('.pic_02').addClass('bg_02');
                     $('.pic_01').removeClass('bg_01');
                     $('.pic_03').removeClass('bg_03');
                });
                $('.or_div').eq(2).click(function(){
                     $('.pic_03').addClass('bg_03');
                     $('.pic_02').removeClass('bg_02');
                     $('.pic_01').removeClass('bg_01');
                });
           });
           //链接滚动
            $('#md_01').click(function (){
                $.scrollTo('#ban_pic', 700);
            });
            $('#md_02').click(function (){
                $.scrollTo('#area02', 700);
            });
            $('#md_03').click(function (){
                $.scrollTo('#area03', 700);
            });
           //导航固定fixed
           $(window).scroll(function(){
                var fix=$(window).scrollTop();
                if(fix >=210){
                   $('#model_002 .m_002_l').addClass('fixed');
                }else{
                   $('#model_002 .m_002_l').removeClass('fixed');
                }
            });
	   });