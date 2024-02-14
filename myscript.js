$(document).ready(function() {
	$("#button1").click(function(){
		$(".WrongAns1").hide(3000);
		$(".WrongAns1").animate({opacity: '0'}, "slow");
		$("#RightAns1").animate({fontSize: '200%'}, "slow");
		$("#RightAns1").css({"list-style-type": "none"});	
	});
	
	$("#button2").click(function(){
		// $(".WrongAns2").animate({overflow: 'hidden'}, "slow");
		$(".WrongAns2").hide(3000);
		$(".WrongAns2").animate({opacity: '0'}, "slow");
		$("#RightAns2").animate({fontSize: '200%'}, "slow");	
		$("#RightAns2").css({"list-style-type": "none"});	
// 		$("#RightAns2").css({"list-style-type": "none"});	
	});
	
	$("#button3").click(function(){
		$(".WrongAns3").hide(3000);
		$(".WrongAns3").animate({opacity: '0'}, "slow");
		$("#RightAns3").animate({fontSize: '200%'}, "slow");	
		$("#RightAns3").css({"list-style-type": "none"});	
	});
	
	$("#button1").dblclick(function(){
		$(".WrongAns1").show(3000);
		$(".WrongAns1").animate({opacity: '1'}, "slow");
		$("#RightAns1").animate({fontSize: '100%'}, "slow");
		$("#RightAns1").css({"list-style-type": "upper-alpha"});	
	});
	
	$("#button2").dblclick(function(){
		$(".WrongAns2").show(3000);
		$(".WrongAns2").animate({opacity: '1'}, "slow");
		$("#RightAns2").animate({fontSize: '100%'}, "slow");
		$("#RightAns2").css({"list-style-type": "upper-alpha"});	
	});
	
	$("#button3").dblclick(function(){
		$(".WrongAns3").show(3000);
		$(".WrongAns3").animate({opacity: '1'}, "slow");
		$("#RightAns3").animate({fontSize: '100%'}, "slow");
		$("#RightAns3").css({"list-style-type": "upper-alpha"});	
	});
});
