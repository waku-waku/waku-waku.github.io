$(function() {

	var address = 'street.change.97@gmail.com';
	var subject;
	var body;

	$('.mail').click(function () {
		$('.overlay').fadeIn();
		$('.contact-form').fadeIn();
	});

	$('.overlay').click(function () {
		$('.overlay').fadeOut();
		$('.contact-form').fadeOut();
	});

	$('.submit').click(function () {
		subject = $(':text[name="subject"]').val();
		body = $('#mailbody').val();
		location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
	});

});