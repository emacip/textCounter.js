/*
	Name: jquery.textCounter.js
	Author: Andy Matthews
  Modified: Lesson Planet http://www.lessonplanet.com/
	Website: http://www.andyMatthews.net
	Packed With: http://jsutility.pjoneil.net/
*/
(function($){

	$.fn.textCounter = function(o){
		
		o = $.extend( {}, $.fn.textCounter.defaults, o );
		
		return this.each(function(i, el){

			var $e = $(el);

			$e.html(o.count);
			$(o.target).keyup(function(){
        // target is a tinyMCE editor
        // Get the text and remove html tags
        var targetText = (this.hasOwnProperty('editorId')) ? $(this.getBody()).text().replace(/(<([^>]+)>)/ig,'') : this.value;

				var cnt = targetText.length;

				if (cnt <= (o.count-o.alertAt)) {
					// clear skies
					$e.removeClass('tcAlert tcWarn');
				} else if ( (cnt > (o.count-o.alertAt)) && (cnt <= (o.count-o.warnAt)) ) {
					// getting close
					$e.removeClass('tcAlert tcWarn').addClass('tcAlert');
				} else {
					// over limit
					$e.removeClass('tcAlert tcWarn').addClass('tcWarn');
					if (o.stopAtLimit) targetText = targetText.substring(0, o.count);
				}
				$e.html(o.count-targetText.length);
			}).trigger('keyup');

		});
		
	};

	$.fn.textCounter.defaults = {
		count: 140,
		alertAt: 20,
		warnAt: 0,
		target: '',
		stopAtLimit: false
	};

})(jQuery);
