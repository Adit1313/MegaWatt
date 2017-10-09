$('#submit-btn').click(function() {
	console.log('Yo');

	$('#login-form').submit(function(e) {
		alert('Prevented submit');
		return false;
	});

	var user = 'john.doe@gmail.com'
	var pass = 'Tsrs@1234';

	if ($('#pass').val() == pass && $('#gaymail').val() == user) {
		window.open('main.html');
	} else {
		$('.error').css('display', 'block');
	}
});