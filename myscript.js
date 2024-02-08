$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").css({"color":"purple", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	
// 	$("div").animate({left: '250px'});
	$("#p1").click(function(){
		$(".disappear").hide();
	});
	$(".disappear").dblclick(function(){
		$("#img1").css({"border":"10px inset red","display": "block", "margin": "auto"});
		$("#img1").fadeOut("slow");
	});
});
