/*!
 * jQuery Util 1.0.0
 * http://jqueryutil.com
 *
 * Copyright 2013 jQuery Util
 * Released under the MIT license.
 */

(function($, undefined) {
	$.isEmpty = function(sel) {
		if($(sel).val() == "") {
			return true;
		}
		else {
			return false;
		}
	};

	$.deleteSpace = function(sel) {
		var val = $(sel).val();
		val = $.trim(val);
		val = val.replace(/ /g, "");
		$(sel).val(val);
	};
})(jQuery);