---
layout: post
title: "Revealjs with Pandoc"
date: 2018-05-01
categories: jekyll update
---

This javascript library helps make presentations using nothing more than HTML. Do your presentations the open-source way. Here is [a sample](http://shuklan.com/haskell/lec01.html#/) (many more [here](https://github.com/hakimel/reveal.js/wiki/Example-Presentations)).

## Using Pandoc

### Online

If the presentation is going to go on an online page, use this

``` bash
pandoc -t revealjs -s -o myslides.html myslides.md -V revealjs-url=https://revealjs.com
```

### Offline

If the presentation is going to go to an offline page, use this

``` bash
pandoc -t revealjs -s -o myslides.html myslides.md -V revealjs-url=./reveal.js
```

## Resources

* [Revealjs GitHub Page](https://github.com/hakimel/reveal.js) 
* [Using pandoc to produce reveal.js slides](https://github.com/jgm/pandoc/wiki/Using-pandoc-to-produce-reveal.js-slides)
