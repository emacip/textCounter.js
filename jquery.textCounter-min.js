/*   Name: jquery.textCounter.js 
 *  Author: Andy Matthews 
 *  https://github.com/commadelimited/textCounter.js 
 *  Modified: Lesson Planet http://www.lessonplanet.com/
 *  Modified: Enrique Macip http://www.emacip.com/ 
 *  Copyright (c) 2012 andy matthews 
 *  Licensed under the MIT, GPL licenses. 
 */
(function(e){e.fn.textCounter=function(t){t=e.extend({},e.fn.textCounter.defaults,t);return this.each(function(n,r){var i=e(r);i.html(t.count);e(t.target).keyup(function(){var n=this.hasOwnProperty("editorId")?e(this.getBody()).text().replace(/(<([^>]+)>)/ig,""):this.value;var r=n.length;if(t.order=="DESC"){if(r<=t.count-t.alertAt){i.removeClass("tcAlert tcWarn")}else if(r>t.count-t.alertAt&&r<=t.count-t.warnAt){i.removeClass("tcAlert tcWarn").addClass("tcAlert")}else{i.removeClass("tcAlert tcWarn").addClass("tcWarn");if(t.stopAtLimit)n=n.substring(0,t.count)}i.html(t.count-n.length)}else if(t.order=="ASC"){if(r<=t.count-1&&r!=0){i.removeClass("tcGood tcWarn").addClass("tcWarn")}else if(r>=t.count){i.removeClass("tcGood tcWarn").addClass("tcGood")}i.html(this.value.length)}}).trigger("keyup")})};e.fn.textCounter.defaults={order:"DESC",count:140,alertAt:20,warnAt:0,target:"",stopAtLimit:false}})(jQuery)