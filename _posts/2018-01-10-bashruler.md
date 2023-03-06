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

Nice. But we can improve this further by showing which tens we are at on another ruler? Also, can we have it identifying the space as a character?

``` bash
string_ruler4(){
	
	# print the input
	echo $1

	# insert spaces between characters in the input string
	# i.e. aziz becomes a z i z
	old_IFS=$IFS
	IFS=''
	data=$(echo -n "$1" | sed 's/\(.\)/\1 /g' )  # or sed 's/\B/ /g' ) 
	echo $data
	IFS=$old_IFS

        # calculate number of characters in the input string
	num_chars=$(echo -n "$1" | wc -c)
	
	# make a sequence of characters equal in length to the input string
	# pad single digits with zeros -> 01 02 03 etc
	# insert spaces between these 2-digit numbers -> 0 1; 0 2; 0 3 etc
	# the first field is the tens, the second field is ones (recognizable by awk)
	
	ones=$(seq $num_chars | sed 's/^\(.\)$/0\1/' | sed 's/\(.\)\(.\)/\1 \2/' | awk '{print $2}')
	
	tens=$(seq $num_chars | sed 's/^\(.\)$/0\1/' | sed 's/\(.\)\(.\)/\1 \2/' | awk '{print $1}')

	echo $ones
	echo $tens
}
```

You can see the result of this here.


``` bash
$ string_ruler3 'know thyself'
know thyself
k n o w   t h y s e l f
1 2 3 4 5 6 7 8 9 0 1 2
0 0 0 0 0 0 0 0 0 1 1 1
```

## Bonus: Previous Attempts

These attempts didn't work but they were worth trying.

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

``` bash
string_ruler3(){
        num_chars=$(echo $1 | wc -c)
        tens=$(echo $num_chars/10 | bc)
	ruler1=$(
	    for i in $(seq 0 $tens); do
		for j in $(seq 10 | sed 's/.*\(.$\)/\1/g'); do		
			k=$i$j
			echo ${k:1:1} 
		done
	done | xargs | tr -d ' ')

	ruler2=$(
	for i in $(seq 0 $tens); do
		for j in $(seq 10 | sed 's/.*\(.$\)/\1/g'); do
			k=$i$j
			echo ${k:0:1} 
		done
	done | xargs | tr -d ' ')
	echo $1
        echo $ruler1
        echo $ruler2
}
```
