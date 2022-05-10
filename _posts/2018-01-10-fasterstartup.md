---
layout: post
title: "Faster emacs startup"
date: 2018-08-14
categories: linux jekyll update
---

Bash functions enable faster workflows. Say you want to use the emacs calculator for a fast unit conversion. Instead of opening emacs and waiting for it to startup, then using `C-x * *`, you can write the following in your `~/.bashrc` (or whatever your startup file is)

``` bash
c(){
    emacs -Q -f calc
}	 
```

after logging in to bash again, entering `c` as a command will start the calculator. You take this a step further and execute a lisp expression

``` bash
c(){
	emacs -Q --execute "(progn (calc)(delete-other-windows))"
}

```
To see just the calculator buffer and not the others.

``` bash
emacs --help
```
Shows a summary of options when starting emacs.
