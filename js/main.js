$(document).ready(function(){

 	createjs.Sound.registerSound("./sound/tkt.mp3", "sound");
 	createjs.Sound.registerSound("./sound/servietsky-petard.mp3", "sound");
 	createjs.Sound.registerSound("./sound/epatE.mp3", "sound");
 	createjs.Sound.registerSound("./sound/sacfait.mp3", "sound");
 	createjs.Sound.registerSound("./sound/Oh putain.mp3", "sound");
	
	console.log("coucou");
	var son = "son"
	
	
	$(".uk-overlay").click(function(){
	var instance = null;
	
	son = $(this).children("img").attr("id");
	var instance = createjs.Sound.play("./sound/"+son+".mp3");
	});
	
	
});