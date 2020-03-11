---
layout: post
title: "Starting on Perl and CGI"
date: 2018-04-21
categories: jekyll update python
---

I have a server at home for experimentation. Once upon a time I wanted to do a very common application: fill out a form on a webpage and have the results stored on a database. Or a file, what's the difference? Why do websites use databases anyway?

This led me to cgi scripting and perl. Here are some informative and recommended guides on [webservers](https://computer.howstuffworks.com/web-server.htm) and [cgi scripts](https://computer.howstuffworks.com/cgi.htm).

I will update this post with more info once I learn more. But for now here is how to run scripts in perl, as well as some perl resources.

```
azizcodes$ perl p.perl
```
Where p.perl is the following

``` bash
#!/bin/perl -w

$str=6;
if($str>5){print "string is $str\n"}

@arr=(1,2,3);
print "here is an element of an arry $arr[1]\n"
```

## Resources
* [Essential Perl](http://cslibrary.stanford.edu/108/EssentialPerl.html)
* [CPAN](https://www.cpan.org)