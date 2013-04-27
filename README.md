### Utils and Examples

isEmpty, deleteSpace, trimSpace, lpad, rpad

```javascript
# isEmpty

1) $.isEmpty(selector)

if($.isEmpty("input#test1"))
{
	alert("is empty");
}
else
{
	alert("is not empty");
}

<input type="text" id="test1" value="" />

2) $(selector).isEmpty()

if($("input#test2").isEmpty())
{
	alert("is empty");
}
else
{
	alert("is not empty");
}

<input type="text" id="test2" value="a" />

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
```

### Authors and Contributors
Chi-dong Kim, [Seong-hoon Jeong](http://www.signpen.net)

### Support or Contact
Send your request to jqueryutil@gmail.com and we’ll help you sort it out.