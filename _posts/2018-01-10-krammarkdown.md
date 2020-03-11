---
layout: post
title:  "kramdown: Markdown to HTML"
date:   2018-05-08
categories: jekyll update 
---

I have discussed before how to convert Markdown to HTML using [pandoc]({% post_url 2018-01-10-tesseract %}), and [Showdown]({% post_url 2018-01-10-showdownjs %}). There is a third method using [kramdown](https://kramdown.gettalong.org/index.html), which I will talk about in this post. 

The reason I looked into kramdown is, AFAIK, pandoc is not available for Termux yet (May 2019) and I can use my showdown converter but I find kramdown to be much easier to use. 

## Installation
[Installation instructions are here](https://kramdown.gettalong.org/installation.html). Basically, get it from the package manager for Ruby,
```
gem install kramdown
```
and you are done.

### Note 
For Termux users, use the manual installation.

## Usage
This is the quickest method to convert markdown
```
kramdown filename.md
```
prints the output to stdout, which can be redirected to any file.
