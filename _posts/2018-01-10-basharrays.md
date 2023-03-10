---
layout: post
title: "Bash: Arrays, IFS"
date: 2018-08-31
categories: jekyll update
---

Warning: this part is confusing. Let's try to do the previous exercise again. Which writing a `word` as `w o r d`, using Bash arrays.

``` bash
#!/bin/bash

read_as_array(){
	while read -a arr; do 
		echo "The values of the array are ${arr[@]}. Printing.."
		for k in "${arr[@]}"; do
			echo $k
		done
	done <<< $(echo $1 | sed -e 's/./& /g' )
}

input0="abdulaziz"
echo "The input is '$input0'"
read_as_array $input0

# RESULT
The input is 'abdulaziz'
The values of the array are a b d u l a z i z. Printing..
a
b
d
u
l
a
z
i
z
```
If we try this approach with a sentence, we will not get the desired result
```
input="know thyself" 
echo "The input is '$input'"
read_as_array "$input"

# RESULT
The input is 'know thyself'
The values of the array are k n o w t h y s e l f. Printing..
k
n
o
w
t
h
y
s
e
l
f
```
The reason is that Bash splits words, according to an environment variable called `IFS`. This variable can be changed. However, in this case we are trying to split letters, not words, so what do we change it to? We can't replace IFS with a null value, because that just means word splitting will NOT be performed, according to the Bash manual page.

My solution is to make these letters into words, by inserting characters at the boundaries of these letters, the characters can be anything other than alphanumeric or whitespace, such as a percentage sign, `%`. Let's modify the input string accordingly and see what that looks like

``` bash
$ echo $input | sed 's/./&%/g' | cat -A
k%n%o%w% %t%h%y%s%e%l%f%$
```
Let's feed this to the while loop, and change the `IFS` (note that the changes to `IFS` are temporary to this loop with this syntax)

``` bash
read_w_spaces_as_array(){
	while IFS="%" read -a arr; do 
		echo "${arr[@]}"
		for k in "${arr[@]}"; do
			echo $k 
			# you can operate on the array elements here
		done
	done <<< $(echo $1 | sed 's/./&%/g' )
}

read_w_spaces_as_array "$input"

# RESULT
k n o w   t h y s e l f
k
n
o
w

t
h
y
s
e
l
f
```
Notes:
* If you do `$(read_w_spaces_as_array "$input")` you'd lose the space character again.
* Maybe a null character would be better than a percentage sign, generally speaking (idk how to do that yet).
