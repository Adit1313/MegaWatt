$('#submit-btn').click(function(e) {
	
	var user = 'john.doe@gmail.com'
	var pass = 'Tsrs@1234';

	if ($('#pass').val() == pass && $('#gaymail').val() == user) {
		
	} else {
		e.preventDefault();
		$('.error').css('display', 'block');
	}

});