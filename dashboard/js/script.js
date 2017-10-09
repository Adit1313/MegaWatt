$('#dash').click(function(e) {
	console.log('PLS 1');
	$('#julia-chatbot').css('display', 'none');
	$('#important-devices').css('display', 'none');
	$('#dashboard').css('display', 'block');
	$('#settings').css('display', 'none');
});

$('#julia').click(function() {
	console.log('PLS 2');
	$('#dashboard').css('display', 'none');
	$('#important-devices').css('display', 'none');
	$('#julia-chatbot').css('display', 'block');
	$('#settings').css('display', 'none');
});

$('#devices').click(function() {
	console.log('PLS 3');
	$('#julia-chatbot').css('display', 'none');
	$('#dashboard').css('display', 'none');
	$('#important-devices').css('display', 'block');
	$('#settings').css('display', 'none');
});

$('#setting').click(function() {
	console.log('PLS 4');
	$('#dashboard').css('display', 'none');
	$('#important-devices').css('display', 'none');
	$('#settings').css('display', 'block');
	$('#julia-chatbot').css('display', 'none');
});