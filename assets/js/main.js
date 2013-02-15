$(document).ready(function() {
	$('a').smoothScroll();
	
	$('li#nav-partners a.dropdown-toggle').click(function() {
		$('.dropdown-menu').dropdown('toggle');
		return false;
	});
});