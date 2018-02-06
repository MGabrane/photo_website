$(document).ready(function(){
    $(".grouped_elements").fancybox();
    $(".grouped_elements").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
        
  
})  
   position: function( event, ui ){
	ui.$(".article-text").position({
		my: 'left',
		at: 'rightr',
		of:$(".pictures"),
	})
}