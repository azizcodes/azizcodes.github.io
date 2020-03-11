---
layout: post
title:  "Markup, Markdown and Groff"
date:   2018-03-20
categories: jekyll update
---

This script is an organizer for tasks and projects. It's also a nice sed reference.

When this script is called without options, 

```
jrn
```
it filters certain patterns through the text, and displays prioritized tasks and projcts on the screen. 

When called with the -o option, 
```
jrn -o
```
it prints the output to pdf using pdfmom. [Click here for info on groff and mom](http://www.schaffter.ca/mom/momdoc/toc.html).

*Note: These sed and gawk commands might be slightly different on different operating systems. Note that I was working on a macOS when I wrote this script..* 

## jrn

The full script is below. Here is a [a sample input](), and [a sample output]().

``` bash
#!/bin/bash

# jrn: reports on the journal file
# sorts tasks, projects, etc by order of importance
# converts the result from markdown to groff

makereport(){
	printf "${RED}## UNPRIORITIZED ${NC}\n\n"

	# Filter unacategorized (Task|Project|etc)
	# with end of line
	sed -n -E '/#Task($| |\.)/p' $FILEIN
	sed -n -E '/#Project($| |\.)/p' $FILEIN
	sed -n -E '/#Done($| |\.)/p' $FILEIN
	sed -n -E '/#Work($| |\.)/p' $FILEIN

	# Filter Tasks
	printf "\n${RED}## TASKS${NC}\n\n"

	# High priority
	echo $'### High Priority\n'
	sed -n '/#TaskH/p' $FILEIN
	# Medium
	echo $'\n### Medium Priority\n'
	sed -n '/#TaskM/p' $FILEIN
	# Low
	echo $'\n### Low Priority\n'
	sed -n '/#TaskL/p' $FILEIN

	# Filter Projects
	printf "\n${RED}## PROJECTS${NC}\n\n"

	# High priority
	echo $'\n### High Priority\n'
	sed -n '/#ProjectH/p' $FILEIN
	# Medium
	echo $'\n### Medium Priority\n'
	sed -n '/#ProjectM/p' $FILEIN
	# Low
	echo $'\n### Low Priority\n'
	sed -n '/#ProjectL/p' $FILEIN

	# Filter Work-Related
	printf "\n${RED}## WORK-RELATED${NC}\n\n"

	# High Priority
	echo $'\n### High Priority\n'
	sed -n '/#WorkH/p' $FILEIN
	# Medium
	echo $'\n### Medium Priority\n'
	sed -n '/#WorkM/p' $FILEIN
	# Low
	echo $'\n### Low Priority\n'
	sed -n '/#WorkM/p' $FILEIN
}

FILEIN='/sdcard/Documents/markor/journal.md'
FILEOUT=~/tasks.roff

if [ "$1" != '-o' ]; then
	# color the output to the terminal
	RED='\033[0;31m'
	NC='\033[0m' # No Color
	makereport
	echo "was not instructed to print pdf. Exiting.." 
	exit
fi

# the markdown output will be written temporarily to $FILEOUT
makereport > $FILEOUT && echo "markdown file written. Converting to roff.."

# replace the '##' of markdown with '.HEADING 2 ' of groff
sed -i -E 's/(^## )(.*)/.HEADING 2 "\2"/' $FILEOUT && echo "replacinging level 2 headings"

# replace the '###' of markdown with '.HEADING 3 ' of groff
sed -i -E 's/(^### )(.*)/.HEADING 3 "\2"/' $FILEOUT && echo "replacing level 3 headings"

# replace the '*' of markdown with '.ITEM' of groff
sed -i -E "s/(^\* )(.*)/.ITEM \n\2/" $FILEOUT && echo "replacing item markers"

# remove all blank lines
sed -i '/^$/d' $FILEOUT && echo "removing blank lines"

# if you find /pattern1/ then /pattern2/ on the next line, insert /text/ in between
gawk -i inplace '$1==".HEADING"{p=1} p && $1==".ITEM"{print ".LIST"; p=0} 1' $FILEOUT 
echo "inserting top .LIST markers"

# if you find /pattern1/ then /pattern2/ on the next line, insert /text/ in between
gawk -i inplace '$1==".ITEM"{p=1} p && $1==".HEADING"{print ".LIST OFF"; p=0} 1' $FILEOUT 
echo "inserting bottom .LIST markers"

# insert a few lines in the beginning of the document and save .roff file
sed -i '1s/^/.TITLE "A List"\n.AUTHOR "Z"\n.PRINTSTYLE TYPESET\n.START\n/'  $FILEOUT
echo "inserting metadata"

# convert roff to pdf
pdfmom ~/tasks.roff > ~/tasks.pdf && echo "pdf file written"
```
