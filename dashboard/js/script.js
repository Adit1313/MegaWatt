$('#dash').click(function() {
	$('#julia-chatbot').css('display', 'none');
	$('#important-devices').css('display', 'none');
	$('#dashboard').css('display', 'block');
	$('#settings').css('display', 'none');
	$('#community').css('display', 'none');
});

$('#julia').click(function() {
	$('#dashboard').css('display', 'none');
	$('#important-devices').css('display', 'none');
	$('#julia-chatbot').css('display', 'block');
	$('#settings').css('display', 'none');
	$('#community').css('display', 'none');
});

$('#devices').click(function() {
	$('#julia-chatbot').css('display', 'none');
	$('#dashboard').css('display', 'none');
	$('#important-devices').css('display', 'block');
	$('#settings').css('display', 'none');
	$('#community').css('display', 'none');
});

$('#comm').click(function() {
	$('#julia-chatbot').css('display', 'none');
	$('#dashboard').css('display', 'none');
	$('#important-devices').css('display', 'none');
	$('#settings').css('display', 'none');
	$('#community').css('display', 'block');
});

$('#setting').click(function() {
	$('#dashboard').css('display', 'none');
	$('#important-devices').css('display', 'none');
	$('#settings').css('display', 'block');
	$('#julia-chatbot').css('display', 'none');
	$('#community').css('display', 'none');
});

$('#add-dev').click(function() {
	var name = $('#dev-name').val();
	var brand = $('#brand').val();
	var room = $('#room').val();

	var markup = "<tr><td>" + name + "</td><td>" + brand + "</td><td>" + room + "</td></tr>";
	$('#device-list').append(markup);
});

$('#fnChange').click(function() {
	$('#fnChangeable').text($('#fn').val());
});

$('#lnChange').click(function() {
	$('#lnChangeable').text($('#ln').val());
});

$('#gaymailChange').click(function() {
	$('#gaymailChangeable').text($('#gaymail').val());
});

$('#passChange').click(function() {
	var finalPass = "";

	for (i = 0; i < $('#pass').val().length; i++) {
		finalPass += '*';
	}

	$('#passChangeable').text(finalPass);
});