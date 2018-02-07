$('#reg-form').submit(function(event){
    var hasErrors = false;
    $('.error_text').remove();
    var $userName = $('#reg-form input[name="username"]');
    if($userName.val() == '') {
        hasErrors = true;
        var error = '<div class="error_text">Field <b>Username</b> is empty</div>';
        $userName.parent().append(error);
    }

    var $password = $('#reg-form input[name="password"]');
    if($password.val() == '' || $password.val().length < 8) {
        hasErrors = true;
        var error = '<div class="error_text">Field <b>Password</b> is empty <br> or have less than 8 symbols</div>';
        $password.parent().append(error);
    }

    var $retype = $('#reg-form input[name="retype"]');
    if($retype.val() != $password.val()){
        hasErrors = true;
        var error = '<div class="error_text"><b>Passwords</b> does not match!</div>';
        $retype.parent().append(error);
    }

    var $firstName = $('#reg-form input[name="firstName"]');
    if($firstName.val() == '') {
        hasErrors = true;
        var error = '<div class="error_text">Field <b>First Name</b> is empty</div>';
        $firstName.parent().append(error);
    }

    if ($('#reg-form input.checkbox_check').is(':checked')) {
        hasErrors = true;
        var error = '<div class="error_text">You need to agree with terms </div>';
        $('#reg-form input.checkbox_check').parent().append(error);
    }

    //var atLeastOneIsChecked = $('#checkArray:checkbox:checked').length > 0;

    if(hasErrors == true){
        event.preventDefault();
    }

});