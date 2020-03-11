---
layout: post
title:  "Fast Note-Taking"
date:   2018-03-16
categories: jekyll update
---

A useful addition to shell functions. For fast note-taking in the terminal.
Better than stickies in my opinion.

``` bash 
add() {
	echo use \@ to end your comment. Backspace is not allowed
	LOCATION1=~/reminders.txt
	read -d @
	echo ---- >> $LOCATION1
	date  >> $LOCATION1
	printf "\n$REPLY" >> $LOCATION1
	echo Ok. Note added
}


alias rem='cat ~/reminders.txt'
```
The command `add` adds the notes. The command `rem` (remind) retrieves the notes.
