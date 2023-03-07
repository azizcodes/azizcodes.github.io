---
layout: post
title: "Bash: String Rulers"
date: 2018-08-30
categories: jekyll update
---

``` bash
k n o w   t h y s e l f
1 2 3 4 5 6 7 8 9 0 1 2
0 0 0 0 0 0 0 0 0 1 1 1
```

In this project I try visualize strings as in the above.

## IBAN Numbers

Counting the number of characters in a string is straight forward with `wc`

``` bash
echo $iban_number | wc -c
```

Suppose we want to visualize the 24-character strings. We could define a bash function as follows 

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

This is nice but it's not treating spaces correctly. Also, I want to show the another ruler that has the tens. 

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
	# pad single digits with zeros -> 01; 02; 03; etc
	# insert spaces between these 2-digit numbers -> 0 1; 0 2; 0 3 etc
	# the first field is the tens, the second field is ones (recognizable by awk)
	
	ones=$(seq $num_chars | sed 's/^\(.\)$/0\1/' | sed 's/\(.\)\(.\)/\1 \2/' | awk '{print $2}')
	
	tens=$(seq $num_chars | sed 's/^\(.\)$/0\1/' | sed 's/\(.\)\(.\)/\1 \2/' | awk '{print $1}')

	echo $ones
	echo $tens
}
```

You can see the result of this below.

``` bash
$ string_ruler4 'know thyself'
know thyself
k n o w   t h y s e l f
1 2 3 4 5 6 7 8 9 0 1 2
0 0 0 0 0 0 0 0 0 1 1 1
```

## More Concise

We can use arrays


``` bash
string_ruler5(){

        # print the input 
        echo $1

        # make it space separated
        sep=$(echo $1 | sed 's/./& /g')

        # make an array
        arr=($sep)

        # make 
        for k in ${arr[@]}; do 
                echo $k
        done | nl | awk '{print int($1/10), int($1%10), $2}'
}       

```

The result of the above code is below

``` bash
$ string_ruler5 knowthyself
knowthyself
0 1 k
0 2 n
0 3 o
0 4 w
0 5 t
0 6 h
0 7 y
0 8 s
0 9 e
1 0 l
1 1 f
```
improved to handles spaces below

``` bash
string_ruler6(){
        input=$1
	letters=$(echo $input | sed 's/ /_/g' | sed 's/./& /g')
	arr=($letters)
	
	for a in "${arr[@]}"; do echo $a; done | xargs | sed 's/_/ /g'
	
	i=0
	for a in "${arr[@]}"; do
	    i=$(($i+1))
	    k=$(($i%10))
	    echo $k
	done | xargs

	i=0
	for a in "${arr[@]}"; do
	    i=$(($i+1))
	    j=$(($i/10))
	    echo $j
	done | xargs
}

```

## Bonus: Previous Attempts

These attempts didn't work but they were worth trying.


This one doesn't work because brace expansion precedes command substitution.
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

This one works but its lengthy and doesn't treat spaces correctly.
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
