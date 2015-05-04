/*登录注册函数调用开始*/
function login(){
    $('#layer_frame').css({'display':'block'});
    $('#register_frame').css({'display':'none'});
}
function closeWindow01(){
    $('#layer_frame').css({'display':'none'});
}
/*登录注册函数调用结束*/
$(document).ready(function(){
    /*输入框获得焦点事件开始*/
          $('.input_test').css({'color':'#ccc'});
          $('.input_test').bind({ 
              focus:function(){ 
                if (this.value == this.defaultValue){ 
                this.value=""; 
                          this.style="color:#333;"
                } 
              }, 
                blur:function(){ 
                  if (this.value == ""){ 
                  this.value = this.defaultValue; 
                  this.style="color:#ccc;"
                  } 
                } 
          });
    /*输入框获得焦点事件结束*/

    //点击清空，input内容清空
    $('.clean').click(function(){
        $('.name_search').attr("value","");
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
      //个人信息页左边侧栏黄色背景变化
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

          $.scrollTo('#person_pic', 700);
      });
      $('#md_02').click(function (){
          $.scrollTo('#area02', 700);
      });
      $('#md_03').click(function (){
          $.scrollTo('#area03', 700);
      });
});