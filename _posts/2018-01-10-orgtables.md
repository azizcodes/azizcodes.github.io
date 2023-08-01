---
layout: post
title: "Org Tables"
date: 2018-09-07
categories: linux jekyll update
---

The basics of Org Tables are documented in Emacs. However, more sophisticated formulas requires experience with Calc and possibly Elisp. I'll document some of them below.

# Basics

You can use the [following commands](https://www.gnu.org/software/emacs/manual/html_node/org/Editing-and-debugging-formulas.html) to edit the fields

* `C-c SPC` blanks a field
* `C-c `\` edit a field
* `C-c =` install a new formula for the currnet column
* `C-c ?` field info
* `C-c '` edit formulas
* `C-u C-c C-c` re-evaluate all formulas 

# References

There is a lot of information in the details of [this page](https://orgmode.org/org.html#The-Spreadsheet). Por ejemplo:

Last row `@>` last column `$>`. Before last is `@>>`etc. e.g.
```
@>$3=vsum(@2..@-1)
```
First row `@<` first column `$<`. This isn't so useful because you always from `@1` and `$1` anyway.

First hline is `@I` second is `@II`etc.

# Time stamps

To insert a today's date into a field, you can use this formula
```
'(org-insert-time-stamp (current-time))
```
Of course you need to remember to re-evaluate the table when the date changes.

Here are some example that use both calc and elisp to make some date calculations.

```
| today            | start            | finish           | total days | remaining |     % |
|------------------+------------------+------------------+------------+-----------+-------|
| [2023-07-14 Fri] | [2021-01-17 Sun] | [2024-01-17 Wed] |       1095 |       187 | 82.92 |
#+TBLFM: $1='(org-insert-time-stamp (current-time))'::$4=$3-$2::$5=$3-$1::$6=100*($4-$5)/$4;f2
```

# Parsing Dates

Using the `pack` function from the calculator. Notice that the range is sent to the calculator as a vector. i.e. `$1..$3` is read as `[2023,12,31]` which is the input that `pack` accepts.
```
|   yr | mo | da | date             |
|------+----+----+------------------|
| 2023 | 12 | 31 | [2023-12-31 Sun] |
#+TBLFM: $4=pack(-14,$1..$3)

For more details on parsing date strings, you can the section "elisp functions" below.

```
# cumsum

This is one is a bit tricky. Example from [stackoverflow](https://emacs.stackexchange.com/questions/56316/cumulative-column-in-org-table): 

````
| Date | Cases | Cumulative |
|------+-------+------------|
|      |     0 |          0 |
|      |     1 |          1 |
|      |     0 |          1 |
|      |     0 |          1 |
|      |     0 |          1 |
|      |     0 |          1 |
|      |     1 |          2 |
|      |     1 |          3 |
|      |     2 |          5 |
|      |     2 |          7 |
|      |     1 |          8 |
|      |     0 |          8 |
#+TBLFM: $3=vsum(@I$2..@+0$2)
````
Tables can improve `calc`'s functionality. Surprisingly, there's no `cumsum` function in calc.

# elisp functions

In the following some useful elisp functions

```elisp
(org-time-stamp '(16) 1)               ;; insert date & time
(org-insert-time-stamp (current-time)) ;; insert date only
```
See the next post for many more examples. You can make functions that do whatever you want with lisp expressions, as follows

```elisp
(defun getmonth(x)
  ;; takes date string and converts it to month
  (setq a (org-parse-time-string x))
  (decoded-time-month a)
  )

(getmonth "2022-10-15") 
```
Remember to evaluate the function(s) before evaluating the table with `C-x C-e`. Now you can use this function in a table:

```  
| 1 | 2022-10-15 | 10 | 1 |
| 2 | 2022-11-15 | 11 | 1 |
| 3 | 2022-01-12 |  1 | 0 |
#+TBLFM: $1=@#::$3='(getmonth $2)::$4=if($3>=10,1,0)
```

# Time

*Remote tables* and time display

```
Summing late hours for each day in the month

#+NAME: latehours
| late hours |
|------------|
|   00:23:02 |
|   00:28:30 |
|   00:07:21 |
|   01:17:48 |
|       2.28 |
#+TBLFM: @>=vsum(@I..@-1);t

Finding the remaining time in hours

| total allowed | total late hours | remaining allowed | formatted |
|---------------+------------------+-------------------+-----------|
|             4 |             2.28 |              1.72 |  01:43:12 |
#+TBLFM: $2='(identity remote(latehours,@>$1))::$3=$1-$2::=3600*$3;T
```

# Org Plot

This requires gnuplot. Below are some examples.
