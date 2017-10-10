$('#submit-btn').click(function(e) {
	
	var user = $('#gaymail').val();
	var pass = $('#pass').val();

	try {
		var userDetails = localStorage.getItem(user).parse();

		if (userDetails.pass == pass) {
			localStorage.setItem('currentUser', user);
		} else {
			e.preventDefault();
			$('.error').css('display', 'block');
			$('#gaymail').text('');
			$('#pass').text('');
		}
	} catch(err) {
		
	}

});