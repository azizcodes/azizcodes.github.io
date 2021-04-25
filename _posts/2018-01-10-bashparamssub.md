---
layout: post
title: "Bash parameter substition"
date: 2018-07-20
categories: linux jekyll update 
---



``` bash
for file in *.txt; do
  mv "$file" "${file,,}"
done

```

capitalize

``` bash
for k in newfile{1..4}.txt; do 
	echo ${k^^} 
done

```
remove from end

``` bash
for k in newfile{1..4}.txt; do 
	echo ${k%.txt} 
done

```
remove from beginning

``` bash
for k in newfile{1..4}.txt; do 
	echo ${k#new} 
done

```
offset

``` bash
for k in newfile{1..4}.txt; do 
	echo ${k:7}
done

```
offset:length

``` bash
for k in newfile{1..4}.txt; do 
	echo ${k:7:1} 
done

```
replace

``` bash
for k in newfile{1..4}.txt; do 
	echo ${k/new/old}
done

```
length

``` bash
for k in newfile{1..4}.txt; do 
	echo ${#k}
done
```

``` bash
for k in newfile{1..4}.txt; do 
	echo ${#k}
done
```














