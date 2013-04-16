### Utils and Examples
```javascript
# isEmpty

if($.isEmpty("input#test1"))
{
	alert("is empty");
}
else
{
	alert("is not empty");
}

=> <input type="text" id="test1" value="" /> : true
   <input type="text" id="test2" value="a" /> : false

---------------------------------------------------------------------------------------------------------------------

# deleteSpace

$.deleteSpace("input#test1");

=> <input type="text" id="test1" value=" te s  t     " />
   -> <input type="text" id="test1" value="test" />
```

### Authors and Contributors
Chi-dong Kim, [Seong-hoon Jeong](http://www.signpen.net)

### Support or Contact
Send your request to jqueryutil@gmail.com and we’ll help you sort it out.