/*   Name: jquery.textCounter.js 
 *  Author: Andy Matthews 
 *  https://github.com/commadelimited/textCounter.js 
 *  Modified: Lesson Planet http://www.lessonplanet.com/
 *  Modified: Enrique Macip http://www.emacip.com/ 
 *  Copyright (c) 2012 andy matthews 
 *  Licensed under the MIT, GPL licenses. 
 */
(function ($) {

    $.fn.textCounter = function (o) {

        o = $.extend({}, $.fn.textCounter.defaults, o);

        return this.each(function (i, el) {

            var $e = $(el);

            $e.html(o.count);
            $(o.target).keyup(function () {
                // target is a tinyMCE editor
                // Get the text and remove html tags
                var targetText = (this.hasOwnProperty('editorId')) ? $(this.getBody()).text().replace(/(<([^>]+)>)/ig, '') : this.value;

                var cnt = targetText.length;
                if (o.order == 'DESC' ) {

                    if (cnt <= (o.count - o.alertAt)) {
                        // clear skies
                        $e.removeClass('tcAlert tcWarn');
                    } else if ((cnt > (o.count - o.alertAt)) && (cnt <= (o.count - o.warnAt))) {
                        // getting close
                        $e.removeClass('tcAlert tcWarn').addClass('tcAlert');
                    } else {
                        // over limit
                        $e.removeClass('tcAlert tcWarn').addClass('tcWarn');
                        if (o.stopAtLimit) targetText = targetText.substring(0, o.count);
                    }
                    $e.html(o.count - targetText.length);
                }else if (o.order == 'ASC' ){
                    if (cnt<= (o.count - 1) && (cnt != 0)){
                        // flag is red, under the limit
                        $e.removeClass('tcGood tcWarn').addClass('tcWarn');
                    }else if (cnt >= (o.count)){
                        // pass or equal the limit, flag is green
                        $e.removeClass('tcGood tcWarn').addClass('tcGood');}
                    $e.html(this.value.length);
                }
            }).trigger('keyup');

        });

    };

    $.fn.textCounter.defaults = {
        order: 'DESC',
        count: 140,
        alertAt: 20,
        warnAt: 0,
        target: '',
        stopAtLimit: false
    };

})(jQuery);
