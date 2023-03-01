---
layout: post
title: "Bash Rulers"
date: 2018-08-30
categories: jekyll update
---

Counting the number of characters in a string is straight forward with `wc`

``` bash
echo string | wc -c
```
Suppose we want to visualize the length of a 24-character strings, e.g. in an IBAN number. We could do

``` bash
iban_ruler(){
	ruler=$(seq 24 | sed 's/$/%10/' | bc | xargs | tr -d ' ')
	echo $1
	echo $ruler
}
```
So now 

```
$ iban_ruler SA0000000000000000000000
SA0000000000000000000000
123456789012345678901234
```
This is nice but is limited to 24 characters. Let's make it more flexible:

``` bash
string_ruler(){
        num_chars=$(echo $1 | wc -c)
        ruler=$(seq $num_chars | sed 's/$/%10/' | bc | xargs | tr -d ' ')
        echo $1
        echo $ruler
}
```

`sed` here is replacing the end of the sentence with `%10` and piping the result to the calculator `bc`, the remainder will result from this, which is then piped to `xargs` to put the result on one line then the spaces are removed with `tr`. Now let's try it

``` bash
$ string_ruler 'aziz codes is the best blog in the universe'
aziz codes is the best blog in the universe 
12345678901234567890123456789012345678901234

```                                  

Nice. But we can improve this further by showing which tens we are at on another ruler?

``` bash
string_ruler3(){
        num_chars=$(echo $1 | wc -c)
        tens=$(echo $num_chars/10 | bc)
	ruler1=$(
	for i in $(seq 0 $tens); do
		for j in $(seq 1 9); do
			k=$i$j
			echo ${k:1:1} 
		done
	done | xargs | tr -d ' 'i)

	ruler2=$(
	for i in $(seq 0 $tens); do
		for j in $(seq 1 9); do
			k=$i$j
			echo ${k:0:1} 
		done
	done | xargs | tr -d ' ')
	echo $1
        echo $ruler1
        echo $ruler2
}

```

The result is below[^1][^2]

``` bash
$ string_ruler3 'aziz codes is the best blog in the universe'
aziz codes is the best blog in the universe  
123456789123456789123456789123456789123456789
000000000111111111222222222333333333444444444
```

---
[^1]: I previously wrote the `string_ruler2` function as follows, which is equivelant logically to `string_ruler3`, however, it would fail because brace expansions would happen before the command substitution accroding to the rules.

``` bash																				  
string_ruler2(){																		  
        num_chars=$(echo $1 | wc -c)													  
        tens=$(echo $num_chars/10 | bc)													  
        ruler1=$(for k in {0..$tens}{1..9}; do echo ${k:1:1}; done | xargs | tr -d ' ')	  
        ruler2=$(for k in {0..$tens}{1..9}; do echo ${k:0:1}; done | xargs | tr -d ' ')	  
        echo $1																			  
        echo $ruler1																	  
        echo $ruler2																	  
}																						  
```		

[^2]: This function is trivial to do with a text editor function. e.g., in Emacs you can just just highlight the region and apply `M-=`. The goal of this post is learning how to do this in Bash.
