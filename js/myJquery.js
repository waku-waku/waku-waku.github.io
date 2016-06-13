$(function () {
	$('.about').click(function () {
		$('#category').fadeIn();
		$('#about').fadeIn();
	});

	$('.skill').click(function () {
		$('#category').fadeIn();
		$('#skill').fadeIn();
	});

	$('.portfolio').click(function () {
		$('#category').fadeIn();
		$('#portfolio').fadeIn();
	});

	$('.community').click(function () {
		$('#category').fadeIn();
		$('#community').fadeIn();
	});

	$('.contact').click(function () {
		$('#category').fadeIn();
		$('#contact').fadeIn();
	});

	$('#modal-overlay').click(function () {
		$('#category').fadeOut();
		$('#skill').fadeOut();
		$('#about').fadeOut();
		$('#portfolio').fadeOut();
		$('#community').fadeOut();
		$('#contact').fadeOut();
	});
});
