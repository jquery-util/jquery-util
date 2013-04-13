/*!
 * jQuery Util 1.0.0
 * http://jqueryutil.com
 *
 * Copyright 2013 jQuery Util
 * Released under the MIT license.
 */

(function($, undefined) {
	$.isEmpty = function(s) {
		if($(s).val() == "")
		{
			return true;
		}
		else
		{
			return false;
		}
	};
})(jQuery);