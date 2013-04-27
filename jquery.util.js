/*!
 * jQuery Util 1.0.0
 * http://jqueryutil.com
 *
 * Copyright 2013 jQuery Util
 * Released under the MIT license.
 */

(function($, undefined) {
	$.fn.extend({
		isEmpty:function() {
			if($(this).val() == "") {
				return true;
			}
			else {
				return false;
			}
		},
		deleteSpace:function() {
			var val = $(this).val();
			val = val.replace(/ /g, "");	//space
			val = val.replace(/	/g, "");	//tab
			$(this).val(val);
		}
	});

	$.extend({
		isEmpty:function(sel) {
			if($(sel).val() == "") {
				return true;
			}
			else {
				return false;
			}
		},
		deleteSpace:function(sel) {
			var val = $(sel).val();
			val = val.replace(/ /g, "");	//space
			val = val.replace(/	/g, "");	//tab
			$(sel).val(val);
		}
	});
})(jQuery);