$(document).ready(function(){
	$(".about-container").hover(function(){
    $("img").fadeIn(1500);
  })
  $(".form-container").mouseenter(function(){
    $(".sldup").slideDown(1000);
  })
  $(".form-container").mouseleave(function(){
    $(".sldup").slideUp(100);
  })
  $(".btn").click(function(){
  	alert("are you agree");
  })
})