(function ($){
	$.fn.PressNav = function(options){

		var settings = $.extend({
			nextClass: '.pagination > li:first-child > a', //Default bootstrap support
			prevClass: '.pagination > li:last-child > a', // Default bootstrap support
		}, options);
		this.addClass('pagination-lg');
		$(document).on('keyup',function(e){
			switch(e.keyCode){
				case 37:
				window.location = $(settings.nextClass).attr('href');
				break;
				case 39:
				window.location = $(settings.prevClass).attr('href');
				break;
			}
		});
	}
}(jQuery));
