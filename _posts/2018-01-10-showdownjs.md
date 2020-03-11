---
layout: post
title: "Showdown, A Javascript Library"
date: 2018-04-23
categories: jekyll update
---

A library converts markdown to html.

[This program]({% post_url 2018-01-10-prioritizer %}) that I wrote earlier prints its output to the terminal in Markdown, which is pretty readable, but not as readable as HTML. One easy option to convert Markdown to HTML is `pandoc`, but since that's unavailable for Termux (and because I want to learn using JavaScript) I made this converter using Showdown.

[A link to Showdown](https://github.com/showdownjs/showdown).   

``` bash
#!/bin/bash

cd 
# create the javascript
cat << EOF1 > node1.js
var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = 
\`
EOF1

jrn >> node1.js

cat << EOF2 >> node1.js
\`,
    html      = converter.makeHtml(text);

console.log(html)
EOF2

# create the html
cat << EOF3 > index.html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Creepster+Caps" />
<style>
h1 {font-family: "Times New Roman", Times, serif;}
h2 {font-family: Creepster Caps; font-size: 28px}
h3 {font-family: "Times New Roman", Times, serif;}
p {font-family: "Times New Roman", Times, serif;}
li {font-family: "Times New Roman", Times, serif;}
</style>
</head>
<body>
EOF3

# convert markdown (using the above javascript) and write it to and html file
node node1.js >> index.html && rm node1.js

cat << EOF4 >> index.html
</body>
</html>
EOF4


# start the server
python -m http.server 4000
```