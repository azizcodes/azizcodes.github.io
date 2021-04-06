---
layout: post
title:  "Bash Reference Sheet"
date:   2018-03-30
categories: jekyll update
---

(Work in progress)


## Bash reference
* [TLDP](https://tldp.org/LDP/abs/html/refcards.html#AEN22728)
* [Gnu Documentation](https://www.gnu.org/software/bash/manual/bash.html)
* [Bash hackers wiki](https://wiki.bash-hackers.org/start)
* [This brief course](https://fog.ccsf.edu/~gboyd/cs160b/online/index.html) from the City College of SF.

## Getting the week number for a date

``` bash
$ date -d "2021-03-25" +%W
```
returns the number of mondays that passed since the start of the year until this date.

## Summing a list of numbers

``` bash
$ seq 10 | awk '{s+=$1} END {print s}'
```

## Reading long files

``` bash
$ for k in {1..115}; do echo $k,$(($k+5)); done|column -t -s,|less
```

## For Loops

If you remember, I had underscores in the beginning of the post titles to mark scripts I wrote. After a while, I decided this was unncessary and actually ugly. However I had 44 posts. Here is how to edit them all at once.

``` bash
azizcodes$  for i in *.md; do sed -i '' -e '3 s/_//' $i; done
```

## Directory Listing

This is how I can easily know how many files I have in a directory

``` bash
azizcodes$  ls | nl
```
Here is how to list the file sizes

``` bash
azizcodes$  du -sh *
```

Which file was modified most recently?

``` bash
azizcodes$ ls -t1
```

## Files

Print a file showing line numbers

``` bash
azizcodes$ x=0;while read line; do x=$(($x+1));echo $x $line; done < file.txt
```
Similar to, but not the same as 

``` bash
azizcodes$ nl file.txt
```
which shows line numbers but not counting the blank lines.

## Copying Code

Suppose you are copying python code wich starts with `>>>` out of your terminal. Here is how to get rid of it using *heredocs*

``` bash 
azizcodes$ cat << EOF | sed '/^>>> /!d' | sed 's/>>> //'
> >>> import pandas as pd
> >>> import matplotlib.pyplot as plt
> >>> import numpy as np
> >>> np.random.rand(5)
> array([0.94419688, 0.08191008, 0.49942109, 0.92635266, 0.03367809])
> EOF
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
np.random.rand(5)

```
Note: this is easier using Vim's Visual blocks, or even the `s` command.

## HTML lists from Markdown lists

Similarly, suppose you are translating a numbered list into html from markdown,

``` bash
$ cat << eof | sed 's/.\. //'| sed -E 's/(.*)/<li>\1<\/li>/'
```

Of course the above is easier with Vim by using the same regex.

## Loops 

Very simple

``` bash
$ for k in {1..10}; do echo $k, $(($k*2)); done 
1, 2
2, 4
3, 6
4, 8
5, 10
6, 12
7, 14
8, 16
9, 18
10, 20
```

## Arguments 

Defining the following code as `args.sh`:

``` bash
#!/bin/bash


# add this script to the bash reference sheet
# Quick reminder on arguments in bash

echo \$1 = $1       # 1st arg
echo \$2 = $2       # 2nd arg
echo \"\$1\" = "$1" # 1st arg
echo \$0 = $0       # name of script
echo \$@ = $@       # number of args, array
echo \$# = $#       # number of args, number
```

Let's test the above code with some arguments.


``` bash
$ ./args.sh  one two three four
$1 = one
$2 = two
"$1" = one
$0 = ./args.sh
$@ = one two three four
$# = 4
```
