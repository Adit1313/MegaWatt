$('#submit-btn').click(function(e) {
	
	var user = $('#gaymail').val();
	var pass = $('#pass').val();

	try {
		if (localStorage.getItem(user) == pass) {

		} else {
			e.preventDefault();
			$('.error').css('display', 'block');
			$('#gaymail').text('');
			$('#pass').text('');
		}
	} catch(err) {
		
	}

});