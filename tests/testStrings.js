var testStrings = {}
var multiline = function (fn) {
	return fn.toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
}

testStrings.renameAll = multiline(function () {/*
first-name John
children
 child
  first-name Frank
  children
   child
    first-name mary
 child
  first-name Sue
  children
   child
    first-name Abe      
*/})

testStrings.filter = multiline(function () {/*
john
 age 21
mairi
 age 3
frank
 age 50
bob
 age 21
*/})

testStrings.getByIndexPath = multiline(function () {/*
head
body
 div
 div
 div
  class main
  content yo
 div
 div
  class footer
  content hi
*/})

testStrings.toXml = multiline(function () {/*
html
 head
 body
  div
  div
   class main
   content yo
  div
   class footer
   content hi
*/})

testStrings.toXmlResult = "<html><head></head><body><div></div><div><class>main</class><content>yo</content>" +
  "</div><div><class>footer</class><content>hi</content></div></body></html>"

testStrings.toXmlPrettyResult = "<html>\n\
  <head></head>\n\
  <body>\n\
    <div></div>\n\
    <div>\n\
      <class>main</class>\n\
      <content>yo</content>\n\
    </div>\n\
    <div>\n\
      <class>footer</class>\n\
      <content>hi</content>\n\
    </div>\n\
  </body>\n\
</html>\n\
"

testStrings.toXmlWithAttributes = multiline(function () {/*
html
 attributes
  class main
 content
  head
   content
   attributes
  body
   content
    div
     attributes
      class main
     content Hello world
   attributes
    style color: red;
*/})

testStrings.toXmlWithAttributesResult = "<html class=\"main\">\n\
  <head></head>\n\
  <body style=\"color: red;\">\n\
    <div class=\"main\">Hello world</div>\n\
  </body>\n\
</html>\n\
"

testStrings.shapes = multiline(function () {/*V
OV
OV
 OV
 OV
 OV
  O[]
  O[]
 OV
 OV
  O[]
  O[]
*/})

testStrings.transposeData = multiline(function () {/*
entry
 name SimHighSchool
 youtube http://www.youtube.com/watch?v=12345
 description SimHighSchool lorem ipsum lorem ipsum lorem ipsum.
 website http://simhighschool.com
 leader John Doe
 email johndoe@gmail.com
 phone 123-123-1234
 member Jill Smith jill@gmail.com
 member Luke Johnson luke@gmail.com
entry
 name SimHighSchool2
 youtube http://www.youtube.com/watch?v=123456
 description SimHighSchool2 lorem ipsum lorem ipsum lorem ipsum.
 website http://simhighschool2.com
 leader John Doe
 email johndoe@gmail.com
 phone 123-123-1234
 member Jill Smith jill@gmail.com
 member Luke Johnson luke@gmail.com
*/})

testStrings.transposeTemplate = multiline(function () {/*
h1 name
p description
p
 a
  href website
  content website
iframe
 width 420
 height 315
 src youtube
 frameborder 0
 allowfullscreen
*/})

testStrings.transposeExpected = multiline(function () {/*h1 SimHighSchool
p SimHighSchool lorem ipsum lorem ipsum lorem ipsum.
p
 a
  href http://simhighschool.com
  content http://simhighschool.com
iframe
 width 420
 height 315
 src http://www.youtube.com/watch?v=12345
 frameborder 0
 allowfullscreen
h1 SimHighSchool2
p SimHighSchool2 lorem ipsum lorem ipsum lorem ipsum.
p
 a
  href http://simhighschool2.com
  content http://simhighschool2.com
iframe
 width 420
 height 315
 src http://www.youtube.com/watch?v=123456
 frameborder 0
 allowfullscreen*/})

testStrings.splitTest = multiline(function () {/*
thisWillBe ignored
title This is a test
content Hello world
date 2/25/2014
title This is not a test
content Hello planet
date 2/25/2015
title This is definitely a test
content Hello earth
date 2/25/2016
*/})

testStrings.heredoc = multiline(function () {/*
title This is a test
summary This is a multiline
 string with indentation.
body

This is a multiline string without indentation
==============================================

- When you want to write long things by hand and
  then later parse them.
- This is just an example of a workaround for what
  otherwise would be an annoying limitation in writing space
  objects by hand.
- The upside of this approach is you can still easily extract
  some structured information without having to structure the
  whole document. The downside is that treating the whole
  item as a space doc will include some nonsense.

It will parse fine but does require an operation to combine all of these
pairs.

In this case, we have:

- space.parseHeredoc("body", "endbody")
- space.createHeredoc("body", "endbody")

endbody
date 2/25/2014
*/})

testStrings.toDelimited = multiline(function () {/*0
 id 1
 title One 
  plus one
 summary An expose, on the result of one "plus" one
1
 id 2
 title The answer, my friend, is...
 summary "Two"
*/})

testStrings.toCsvResult = multiline(function () {/*id,title,summary
1,"One 
plus one","An expose, on the result of one ""plus"" one"
2,"The answer, my friend, is...","""Two"""
*/})

testStrings.toSsvResult = multiline(function () {/*id title summary
1 "One 
plus one" "An expose, on the result of one ""plus"" one"
2 "The answer, my friend, is..." """Two"""
*/})

testStrings.toTsvResult = "id\ttitle\tsummary\n\
1\t\"One \n\
plus one\"\t\"An expose, on the result of one \"\"plus\"\" one\"\n\
2\tThe answer, my friend, is...\t\"\"\"Two\"\"\"\n"

testStrings.json = {
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "lowScore": 0,
  "lowestScore": -10,
  "age": 25,
  "height_cm": 167.6,
  "numbers": [12, 132.2, 312, true, null, false, {}, ""],
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100",
    "blankString": ""
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "spouse": null
}

// Export for use in Node.js
if (typeof exports != 'undefined')
  module.exports = testStrings;
