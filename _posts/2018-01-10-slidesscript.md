---
layout: post
title: "Script for slideshow"
date: 2018-09-03
categories: jekyll update
---

A script to convert md to html, include css, revealjs. Puts each image in the local directory in `<section>` tags. Work in progress, not tested yet.

``` bash
#!/bin/bash
# makes a slideshow slides.html at localhost

write_md_page(){
cat <<- _EOF_ 
	---
	author: azizcodes
	title:  Demo Presentation
	date: Dec 29, 2022
	---
	_EOF_
}
write_CSS(){ 
cat <<- _EOF_
	<style>
	.box { 
		width: 100%;
		height: 500px;
		border: 5px dashed #f7a239;
	}

	img {
		width: 100%; /* takes the 100 % width of its container (.box div)*/
		height: 100%; /* takes the 100 % height of its container (.box div)*/
	}
	</style> 
	_EOF_
}

# write markdown page
write_md_page > slides.md
write_CSS >> slides.md

# get all images
while read line; do 
	echo "<section>" >> slides.md
	echo "<div class='box'><img data-src='$line'/></div>" >> slides.md
	echo "</section>" >> slides.md
done <  <(find . -maxdepth 1 -name '*png' -print0 | xargs --null ls -1)

# pandoc: convert the markdown file to html
pandoc -t revealjs -s -o slides.html slides.md -V revealjs-url=./reveal.js
```
