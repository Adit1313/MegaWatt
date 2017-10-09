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