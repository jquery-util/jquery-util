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
		isLengthBetween:function(min, max) {
			var length = $(this).val().length;

			if(min <= length && length <= max) {
				return true;
			}
			else {
				return false;
			}
		},
		isByteBetween:function(min, max) {
			var byteSize = $(this).byteSize();

			if(min <= byteSize && byteSize <= max) {
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
		},
		byteSize:function() {
			var val = $(this).val();
			var byteSize = 0;

			for(var i = 0; i < val.length; i++)
			{
				if(val.charCodeAt(i) > 255)
				{
					byteSize += 2;
				}
				else
				{
					byteSize += 1;
				}
			}

			return byteSize;
		}
	});

	$.extend({
		isEmpty:function(str) {
			if(str == "") {
				return true;
			}
			else {
				return false;
			}
		},
		isLengthBetween:function(str, min, max) {
			var length = str.length;

			if(min <= length && length <= max) {
				return true;
			}
			else {
				return false;
			}
		},
		isByteBetween:function(str, min, max) {
			var byteSize = $.byteSize(str);

			if(min <= byteSize && byteSize <= max) {
				return true;
			}
			else {
				return false;
			}
		},
		deleteSpace:function(str) {
			var val = str.replace(/ /g, "");	//space
			val = val.replace(/	/g, "");	//tab

			return val;
		},
		trimSpace:function(str) {
			var val = $.trim(str);

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
		},
		byteSize:function(str) {
			var val = str;
			var byteSize = 0;

			for(var i = 0; i < val.length; i++)
			{
				if(val.charCodeAt(i) > 255)
				{
					byteSize += 2;
				}
				else
				{
					byteSize += 1;
				}
			}

			return byteSize;
		}
	});
})(jQuery);