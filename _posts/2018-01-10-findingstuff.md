---
layout: post
title: "Find, finding stuff"
date: 2018-08-07
categories: linux jekyll update
---

Suppose you are looking for a file in your documents whose name contains the pattern "passport". You don't know if there is something before or after that word, and if the `P` is capitalized or not.

Here is how to search for it

``` bash
find ~/ -type f -iname '*passport*'
```

This will perform a *regex* (regular expression) search probably take a long time going through all subfolders of your home folder. The more specific you are, excluding folders and types of files you don't need, the better. The `-type f` is to tell `find` you are looking for a regular file (not a directory, `d`). 

I prefer going to the folder where I am searching first. Say it is in the `~/Documents` folder and we know the word `passport` is for sure it's in lowercase. 

``` bash
cd ~/Documents
find . -type f -name '*passport*'
```

What if you want the resulting links to be clickable? Here is an easy way:

``` bash
find . -type f -name '*passport*' | sed 's/\(.*\)/[[\1]]/' > passport_files.org
```

Open `passport_files.org` with the GUI version of emacs. The links are clickable because the file is in org-mode.
