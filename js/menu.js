$(document).ready(function() {
	$('#navTrigger').click(function(){
		if($('#mobileNav').hasClass('hidden'))
		{
			$('#mobileNav').fadeIn().removeClass('hidden');
		}
		else
		{
			$('#mobileNav').fadeOut().addClass('hidden');
		}
	});
});