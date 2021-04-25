---
layout: post
title: "Bash parameter expansions"
date: 2018-07-20
categories: linux jekyll update 
---


Suppose we have the following list

``` bash
for k in newfile{1..4}.txt; do echo $k; done

newfile1.txt
newfile2.txt
newfile3.txt
newfile4.txt
```

remove from end

``` bash
for k in newfile{1..4}.txt; do echo ${k%.txt}; done

newfile1
newfile2
newfile3
newfile4
```
remove from beginning

``` bash
for k in newfile{1..4}.txt; do echo ${k#new}; done

file1.txt
file2.txt
file3.txt
file4.txt
```
offset

``` bash
for k in newfile{1..4}.txt; do echo ${k:7} done

1.txt
2.txt
3.txt
4.txt
```
offset:length

``` bash
for k in newfile{1..4}.txt; do echo ${k:7:1}; done

1
2
3
4
```
replace

``` bash
for k in newfile{1..4}.txt; do echo ${k/new/old}; done

oldfile1.txt
oldfile2.txt
oldfile3.txt
oldfile4.txt
```
length

``` bash
for k in newfile{1..4}.txt; do echo ${#k}; done

12
12
12
12
```










