var indexHtml =  {
	count: 1,
	clickMe:function(){

		$("#heart").click(function(){
			if(indexHtml.count != 1){
				return;
			};
			indexHtml.count++;
		   var childrenCount = $("nav").children().length
		   var du = 360/childrenCount;
		   $("nav").css("transform","scale(0.4)")
		   $(".marry").css("opacity","1");
		    for(var i = 0;i < childrenCount; i++){
       		   $("nav").children().eq(i).css("left",(250 + Math.cos((du*(i))*(Math.PI/180))*250) + "px")
       		   $("nav").children().eq(i).css("top" , (250 + Math.sin((du*(i))*(Math.PI/180))*250) + "px")
       		}
       		setTimeout(indexHtml.xuanZhuan, 2000)
		})
		
	},
	xuanZhuan:function(){
		$("nav").css("transform","scale(1)")
	      $("nav").css("transform","rotate(-180deg)");
	      setTimeout(indexHtml.xuanZhuanPicture, 2000)
	},
	xuanZhuanPicture:function(){
		for(var i = 0;i < $("nav").children().length; i++){
       		   $("nav").children().eq(i).css("transform","rotateZ(-180deg)");
       		}
	}
}


$(document).ready(function($) {
	indexHtml.clickMe();
});