$(function(){
	firstSet();
	secondSet();
	mainSet();
	initClick();
	var textAnimate = eval(Jscex.compile("async", function () {
           
            $("#wenZi").show().typewriter();
            
            while (true) {
                $await(Jscex.Async.sleep(1000));
            }
        }));

        var runAsync = eval(Jscex.compile("async", function () {
           

            textAnimate().start();

        }));

        runAsync().start();
})
var count = 1;
function firstSet(){
	for(var i = 1;i <=7;i++){
		if(i > 2 && i <6) continue;
		count = decide(count);
		$("table tr:eq(0) td:eq("+i+")").html('<img src="imageCircle/'+ count++ +'.jpg" height="55" width="55" alt="">')
	}
}

function secondSet(){
	for(var i = 0;i <=8;i++){
		if(i == 4) continue;
		count = decide(count);
		$("table tr:eq(1) td:eq("+i+")").html('<img src="imageCircle/'+ count++ +'.jpg" height="55" width="55" alt="">')
	}
}

function mainSet(){
	for(var i = 2;i <= 6;i++){
		for(var j = 8-i+2;j >=i-2;j--){
			count = decide(count);
			$("table tr:eq("+ i +") td:eq("+j+")").html('<img src="imageCircle/'+ count++ +'.jpg" height="55" width="55" alt="">')
		}
	}
}

function decide(count){
	if(count > 4){
			return 1;
		}
		return count

}

function initClick(){
	$("td").click(function(){
		var src = $(this).children('img').attr("src");
		$("#change").fadeOut(1000, function() {
			$("#change").attr("src",src);
		});

		$("#change").fadeIn(1000);
	})
}





