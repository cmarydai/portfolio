$(document).ready(function() {
	$('#navigation_menu').click(function() {
		$('#navigation').slideToggle();
	});

	$('#navigation_menu').hover(function() {
		$(this).css('cursor', 'pointer');
	});
});