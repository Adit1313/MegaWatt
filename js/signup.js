$('#submit-btn').click(function(e) {
	var gaymail = $('#gaymail').val();
	var pass = $('#pass').val();
	var conPass = $('#con-pass').val();
	var errors = false;

	if (pass != conPass) {
		$('#diff-pass').css('display', 'block');
		errors = true;
		e.preventDefault();
	}

	if (!errors) {
		localStorage.setItem(gaymail, pass);
	$('#success').css('display', 'block');
	}
});