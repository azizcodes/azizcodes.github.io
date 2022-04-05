---
layout: post
title: "Find, finding files"
date: 2018-08-07
categories: linux jekyll update
---

Suppose you are looking for a file in your documents whose name contains the pattern "passport". You don't know if there is something before or after that word, and if the `P` is capitalized or not.

Here is a way to search for it, from [GNU's find](https://www.gnu.org/software/findutils/manual/html_mono/find.html):

``` bash
find ~/ -type f -iname '*passport*'
```

This will perform a _case insensitive_ search probably take a long time going through all subfolders of your home folder. The more specific you are, excluding folders and types of files you don't need, the better. The `-type f` is to tell `find` you are looking for a regular file (not a directory, `d`). 

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

## Time filters

[This section](https://www.gnu.org/software/findutils/manual/html_mono/find.html#Time) of the find manual describes filtering search results with time. 

Suppose you want to find files you accessed in the last 24 hours in the current directory

``` bash
find . -atime 0
```

or the files created in the 24 hours before yesterday

``` bash
find . -ctime 1
```

to list the regular files in your home directory that were modified yesterday, do

``` bash
find ~/ -daystart -type f -mtime 1
```



## Null Characters

You can use `-print0` instead of `-print` (the default action) to print the output of the `find` command with *null character* separators instead of whitespace. This helps with filenames that have whitespace in them.

This can be then fed to `-xargs --null` for further processing. 


## Using `-ok`

You can use `-ok` instead of `-exec` to it prompts you for confirmation. 
