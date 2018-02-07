$(document).ready(function(){
    $("a.grouped_elements").fancybox();
    $("a.grouped_elements").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
        
  
})  
$('.single_image').fancybox();

	document.messages('#button-send')
.addEventListener('click', function(){
    document.
    querySelector('.entered-message')
    .innerHTML = document.messages('.show-last-message');
})