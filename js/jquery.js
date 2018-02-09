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


$('#send-chat-message').click(function(){
	var username = $('#chat-username-input').val();
	// document.querySelector('#chat-username-input').value // <-- vanilla JS
	var comment = $('#chat-message-input').val();
	// document.querySelector('#chat-message-input').value // <-- vanilla JS

	var date = new Date();
	var commentElement = $('<div class="chat-message">' +
		username +':  ' + '<em>' +''+ date + '</em>' +
		'<p class="message-text">' +
		comment +
		 '</p>' +
	 '</div>');
	$('#chat-window').append(commentElement);
	$('#chat-message-input').val('');
});
	

	
	