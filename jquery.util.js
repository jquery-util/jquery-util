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
		},
		trimSpace:function() {
			var val = $(this).val();
			val = $.trim(val);
			$(this).val(val);
		},
		lpad:function(totalLen, strRepl) {
			var strAdd = "";
			var diffLen = totalLen - $(this).val().length;

			for(var i = 0; i < diffLen; i++) {
				strAdd += strRepl;
			}

			var val = strAdd + $(this).val();

			$(this).val(val);
		},
		rpad:function(totalLen, strRepl) {
			var strAdd = "";
			var diffLen = totalLen - $(this).val().length;

			for(var i = 0; i < diffLen; i++) {
				strAdd += strRepl;
			}

			var val = $(this).val() + strAdd;

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

			return val;
		},
		trimSpace:function(sel) {
			var val = $(sel).val();
			val = $.trim(val);

			return val;
		},
		lpad:function(str, totalLen, strRepl) {
			var strAdd = "";
			var diffLen = totalLen - str.length;

			for(var i = 0; i < diffLen; i++) {
				strAdd += strRepl;
			}

			return strAdd + str;
		},
		rpad:function(str, totalLen, strRepl) {
			var strAdd = "";
			var diffLen = totalLen - str.length;

			for(var i = 0; i < diffLen; i++) {
				strAdd += strRepl;
			}

			return str + strAdd;
		}
	});
})(jQuery);