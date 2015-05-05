function Save(){
    var Num=$('.make_sure').attr('change');
    $('.c_adviser').each(function (index){
    	    var iIndex=$(this);
    	    var iSelect=iIndex.children('.identity');
    	    var iText=iIndex.children('.i-adviser');
			if(Num==01){
		   	    	$('.make_sure').attr('change','02');
		            $('.make_sure').html('保存');
		            $('.delete').show();
		            $('.make_sure').css("color","blue");
		            /*点击修改select下滑菜单*/
		            iText.hide();
		            iSelect.show();
		   	}
		   	if(Num==02){
		   		    $('.make_sure').attr('change','01');
		            $('.make_sure').html('修改');
		            $('.delete').hide();
		            $('.make_sure').css("color","#6c6c6c");
		            /*点击修改select下滑菜单*/
		            iText.show();
		            var checkText=iSelect.find("option:selected").text();
		            iText.text(checkText);
		            $('.identity').hide();
		   	}
	});
    
}
$(document).ready(function(){
    $('.delete').each(function(){
        $(this).click(function(){
            $(this).parent().parent().remove();
        });
    });
});