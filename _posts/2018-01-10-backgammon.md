---
layout: post
title: "Backgammon (Bash Exercise)"
date: 2018-08-09
categories: linux jekyll update
---

Which position is most threatened when playing backgammon?

The following command lists all possibilities as a vertical list of numbers

``` bash
echo {1..6}{1..6} | xargs -n 1 | sed 's/\(.\)\(.\)/\1 \2/' | awk -e '$1!=$2{print $1,$2,$1+$2}' -e '$1==$2{print $1,2*$1,3*$1,4*$1}' | xargs -n 1 
```

Piping the above to `vd`, and pressing `shift+f` gives the following frequency table

```
text	count	percent	histogram
6	17	14.91	**************************************************
4	15	13.16	********************************************
5	15	13.16	********************************************
3	14	12.28	*****************************************
2	12	10.53	***********************************
1	11	9.65	********************************
7	6	5.26	*****************
8	6	5.26	*****************
9	5	4.39	**************
12	3	2.63	********
10	3	2.63	********
11	2	1.75	*****
16	1	0.88	**
15	1	0.88	**
20	1	0.88	**
18	1	0.88	**
24	1	0.88	**
```

Lets do this again but using only the classical bash tools.

``` bash
echo {1..6}{1..6} | xargs -n 1 | sed 's/\(.\)\(.\)/\1 \2/' | awk -e '$1!=$2{print $1,$2,$1+$2}' -e '$1==$2{print $1,2*$1,3*$1,4*$1}' | xargs -n 1 | sort -n | uniq -c |awk '{ sum += $1 }; END { print sum }' 

114
```

gets the sum of all possibilities. The following gets the probability for each number

``` bash
echo {1..6}{1..6} | xargs -n 1 | sed 's/\(.\)\(.\)/\1 \2/' | awk -e '$1!=$2{print $1,$2,$1+$2}' -e '$1==$2{print $1,2*$1,3*$1,4*$1}' | xargs -n 1 | sort -n | uniq -c | awk '{print $2,$1,$1/114*100}'

1 11 9.64912
2 12 10.5263
3 14 12.2807
4 15 13.1579
5 15 13.1579
6 17 14.9123
7 6 5.26316
8 6 5.26316
9 5 4.38596
10 3 2.63158
11 2 1.75439
12 3 2.63158
15 1 0.877193
16 1 0.877193
18 1 0.877193
20 1 0.877193
24 1 0.877193
```
