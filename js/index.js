$(function(){
	$(".btn-gnavi").on("click", function(){
		if($(this).hasClass("btn-open")) {
			$(this).removeClass("btn-open");
		} else {
			$(this).addClass("btn-open");
		}
      if($(".global-navi").hasClass("nav-open")){
          $(this).removeClass("nav-open");
        } else {
          $(this).addClass("nav-open");
        }
	});
});