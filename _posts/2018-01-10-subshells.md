---
layout: post
title:  "Subshells"
date:   2018-04-15
categories: jekyll update
---
## Subshells
The below is a script I was working on to navigate Termux more quickly. It was supposed to work as follows
1. `goto` on its on lists the directories and their number
2. `goto *number*` goes to a directory specified by *number*

``` bash
#!/bin/bash

# goto: go to a directory

if [ $# -ne 1 ]; then
	echo "
		Choose directory on this phone:
		1. home
		2. 'sdcard' (internal storage)
		3. documents
		4. downloads
		5. music
		6. external card
		0. quit
		"
fi

#read -p "Enter selection [0-6] > "
case $1 in  
	1)
		g=
		;;
	2) 
		g=/sdcard
		;;
	3)
		g=/sdcard/Documents
		;;
	4)
		g=/sdcard/Download
		;;
	5)
		g=/sdcard/Music
		;;
	6)
		g=/media/
		;;
	0)
		exit
		;;
esac

cd $g            # this command gets executed, 
echo cd $g       # this command is returned to the terminal
```
The script commands execute in a subshell, which doesn't affect the parent process (i.e. the shell). The program executes the `cd` command, but the value of the current directory in the parent process does not change.

A solution is to execute the script this way `$(goto 2)`.
