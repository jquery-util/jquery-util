jQuery Util Plugin
===========

isEmpty()

Examples

```javascript

$.date().adjust("M", +3).format("yyyy-dd-MM"); // same as .setFormat("yyyy-dd-MM").format()

$.date().adjust("M", +3).format();

$.date().adjust("D", -3).format();

$.date("October 1, 1984", "MMMM dd, yyyy").adjust("M", 3).adjust("Y", 5).adjust("D", -1).format();

$.preferCulture("ar");

$.date().adjust("M", +3).format();

```