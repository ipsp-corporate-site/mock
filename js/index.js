$(function(){
	$(".btn-gnavi").on("click", function(){
		// ハンバーガーメニューの位置を設定するための変数
		var rightVal = 0;
		if($(this).hasClass("btn-open")) {
			$(this).removeClass("btn-open");
          $("nav").removeClass("nav-open");
		} else {
			$(this).addClass("btn-open");
          $("nav").addClass("nav-open");
		}
	});
});