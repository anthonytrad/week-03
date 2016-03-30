/* global $ */
$(document).ready(function(){
	$("ul.tabs li").click(function(){
		var id = $(this).attr("id").split("-")[1];
		
		$(".page, ul.tabs li").removeClass("current");

		$("#page-" + id + ", #tab-" + id).addClass("current");
	});
});