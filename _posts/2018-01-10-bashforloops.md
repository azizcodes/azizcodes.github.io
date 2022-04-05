---
layout: post
title:  "Bash Reference Sheet"
date:   2018-03-30
categories: jekyll update bash
---

This file is work in progress. I'll add to it whenever I find a useful function.

## Bash reference
* [TLDP](https://tldp.org/LDP/abs/html/refcards.html#AEN22728)
* The [bash man page] from the [Gnu Documentation](https://www.gnu.org/software/bash/manual/bash.html)
* [Bash hackers wiki](https://wiki.bash-hackers.org/start)
* [This brief course](https://fog.ccsf.edu/~gboyd/cs160b/online/index.html) from the City College of SF.


## Other posts on Bash
* [Bash - fun exercises with the date command]({% post_url 2018-01-10-bashfun1 %})
* [Bash parameter expansions]({% post_url 2018-01-10-bashparamssub %})
* [Backgammon (Bash Exercise)]({$ post_url 2018-01-10-backgammon })


## Printing

``` bash
man printf   # man page
man 3 printf # important details about conversion specifiers
```
From the manpage:

> Each conversion specification is introduced by the character `%`, and ends with a *conversion specifier*.  In between there may be (in this order) zero or more *flags*, an optional minimum *field width*, an optional *precision* and an optional *length modifier*.

``` bash
azizcodes$ seq 20 | xargs printf '%6.2f %6.2f\n'
  1.00   2.00
  3.00   4.00
  5.00   6.00
  7.00   8.00
  9.00  10.00
 11.00  12.00
 13.00  14.00
 15.00  16.00
 17.00  18.00
 19.00  20.00
```

## Another clever way to sum numbers
Not a good way to sum a large list of numbers tho

``` bash
echo $(seq 10 | tr '\n' '+')0 | bc
```

## IFS (Internal Field Separator) and Expansions

See the bash man page for info on that. I will illustrate the result of word splitting after _expansion_ for now.

``` bash
azizcodes$ for k in "hi there"; do echo $k; done
```
The result is 
```
hi there
```
However, 
``` bash
azizcodes$ message="hi there";for k in $message; do echo $k; done
```
The result is 
```
hi
there
```
## Flattening folders

I used this command to flattend the directory: 

``` bash
azizcodes$ find target/ -mindepth 2 -type f -exec mv -i '{}' target/ ';'
```
See [flattening](https://nicolasbouliane.com/blog/flatten-directory-linux-macos) for an explanation.

## Merge text files into one big file

``` bash
azizcodes$ for k in $(ls); do cat $k >> notes.md; done
```

## Getting the week number for a date

``` bash
azizcodes$ date -d "2021-03-25" +%W
```
returns the number of mondays that passed since the start of the year until this date.

## Summing a list of numbers

``` bash
azizcodes$ seq 10 | awk '{s+=$1} END {print s}'
```

## Reading long files

``` bash
azizcodes$ for k in {1..115}; do echo $k,$(($k+5)); done|column -t -s,|less
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
Note: this is easier using Vim's Visual blocks, or even the `s` command in Vim.

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
