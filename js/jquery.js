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


/* <h4>Jānis<em>08.02.2018 18:55</em></h4>
<p id="demo">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quibusdam consequatur expedita assumenda beatae possimus consequuntur illo omnis dolorem veniam labore similique mollitia voluptas velit quae et pariatur itaque sed?
</p> */

// 	$('#button-send').click(function(){
// 		var date = new Date();
// var username = $('.username').val();
// var message = $('.entered-message').val();
// var chat_message =$('<div class="entered-message">'+'<h4>'+ username +'<em></h4>'+ date +'</em>'+'<p>'+message+'</p>'+'</div>');
// $('.new-message').append(chat_message);
	

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
	

	
	