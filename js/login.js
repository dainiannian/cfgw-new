
function register(){
    $('#layer_frame').css({'display':'none'});
    $('#register_frame').css({'display':'block'});
}


function closeWindow02(){
    $('#register_frame').css({'display':'none'});
}
function closeWindow03(){
    $('#agreement_frame').css({'display':'none'});
}
function closeWindow04(){
    $('#forget_password_frame').css({'display':'none'});
    $('#agreement_frame').css({'display':'none'});
}
function closeWindow05(){
    $('#reset_password').css({'display':'none'});
}
function agreement(){
    $('#agreement_frame').css({'display':'block'})
}
function forgetPassword(){
    $('#layer_frame').css({'display':'none'});
    $('#forget_password_frame').css({'display':'block'});
}
function reset_password(){
    $('#forget_password_frame').css({'display':'none'});
    $('#reset_password').css({'display':'block'});

}
function reset_pass(){
    $('#reset_password').css({'display':'none'});
}
$(document).ready(function(){
   /* $("a,input,button").focus(function(){this.blur()});*/
        //点击登录
        $('#charge').click(function(){
            var Html=$('#password').val();
            if(Html==""){
                $('.four_div p').html('*密码不能为空');
            }else if(Html!==""){
                
            }

        });

});

            
