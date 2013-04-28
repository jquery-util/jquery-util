### Utils

isEmpty, deleteSpace, trimSpace, lpad, rpad, byteSize

### Examples

```javascript
# isEmpty

1) $.isEmpty(str)

var is = $.isEmpty($("input#test1").val());

alert(is);

<input type="text" id="test1" value="" />
-> true

2) $(selector).isEmpty()

var is = $("input#test2").isEmpty();

alert(is);

<input type="text" id="test2" value="a" />
-> false

----------------------------------------------------------------------------

# isLengthBetween

1) $.isLengthBetween(str)

var is = $.isLengthBetween($("input#test1").val(), 3, 5);

alert(is);

<input type="text" id="test1" value="1234" />
-> true

2) $(selector).isLengthBetween()

var is = $("input#test2").isLengthBetween(3, 5);

alert(is);

<input type="text" id="test2" value="12" />
-> false

----------------------------------------------------------------------------

# isByteBetween

1) $.isByteBetween(str)

var is = $.isByteBetween($("input#test1").val(), 3, 5);

alert(is);

<input type="text" id="test1" value="a가나다" />
-> false

2) $(selector).isByteBetween()

var is = $("input#test2").isByteBetween(3, 5);

alert(is);

<input type="text" id="test2" value="a가" />
-> true

----------------------------------------------------------------------------

# deleteSpace

1) $.deleteSpace(str)

alert("'" + $.deleteSpace($("input#test1").val()) + "'");

<input type="text" id="test1" value=" te s  t     " />
-> 'test'

2) $(selector).deleteSpace()

$("input#test2").deleteSpace();

<input type="text" id="test2" value=" te s  t     " />
-> <input type="text" id="test2" value="test" />

----------------------------------------------------------------------------

# trimSpace

1) $.trimSpace(str)

alert("'" + $.trimSpace($("input#test1").val()) + "'");

<input type="text" id="test1" value=" te s  t     " />
-> 'te s  t'

2) $(selector).trimSpace()

$("input#test2").trimSpace();

<input type="text" id="test2" value=" te s  t     " />
-> <input type="text" id="test2" value="te s  t" />

----------------------------------------------------------------------------

# lpad

1) $.lpad(str, totalLen, strRepl)

alert($.lpad($("input#test1").val(), 5, "0"));

<input type="text" id="test1" value="123" />
-> '00123'

2) $(selector).lpad(totalLen, strRepl)

$("input#test2").lpad(5, "0");

<input type="text" id="test2" value="123" />
-> <input type="text" id="test2" value="00123" />

----------------------------------------------------------------------------

# rpad

1) $.rpad(str, totalLen, strRepl)

alert($.rpad($("input#test1").val(), 5, "0"));

<input type="text" id="test1" value="123" />
-> '12300'

2) $(selector).rpad(totalLen, strRepl)

$("input#test2").rpad(5, "0");

<input type="text" id="test2" value="123" />
-> <input type="text" id="test2" value="12300" />

----------------------------------------------------------------------------

# byteSize

1) $.byteSize(str)

var size = $.byteSize($("input#test1").val());

alert(size);

<input type="text" id="test1" value="a가" />
-> 3

2) $(selector).byteSize()

var size = $("input#test2").byteSize();

alert(size);

<input type="text" id="test2" value="a가" />
-> 3
```

### Authors and Contributors
Chi-dong Kim, [Seong-hoon Jeong](http://www.signpen.net)

### Support or Contact
Send your request to jqueryutil@gmail.com and we’ll help you sort it out.