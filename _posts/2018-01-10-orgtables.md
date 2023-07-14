---
layout: post
title: "Advanced functions in Org Tables"
date: 2018-08-12
categories: linux jekyll update
---

The basics of Org Tables are documented in Emacs. However, more sophisticated formulas requires experience with Calc and possibly Elisp. You can see some examples of this below.

To sum elements in a column (from the 2nd row in the 3rd column in the example below) and put the result in the last row

```
@>$3=vsum(@2..@-1)
```



# Time stamp
To insert a today's date into a field, you can use this formula

```
'(org-insert-time-stamp (current-time))
```

Of course you need to remember to re-evaluate the table.

Here are some example that use both calc and elisp to make some date calculations.

```
| today*           | start            | finish           | total days | remaining |     % |
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
```

# cumsum

This is one is a bit tricky. Example from [[https://emacs.stackexchange.com/questions/56316/cumulative-column-in-org-table][stackoverflow]]: 

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

Tables can improve `calc`'s functionality. Surprisingly, there's no `cumsum` function in calc.


# elisp functionss

In the following some useful elisp functions

```elisp
(org-time-stamp '(16) 1)               ;; insert date & time
(org-insert-time-stamp (current-time)) ;; insert date only

;; truncate a string? string operations in general
```

You can use the [following commands](https://www.gnu.org/software/emacs/manual/html_node/org/Editing-and-debugging-formulas.html) to edit the fields

* `C-c SPC` blanks a field
* `C-c `\` edit a field
* `C-c =` install a new formula for the currnet column
* `C-c ?` field info
* `C-c '` edit formulas
* `C-u C-c C-c` re-evaluate all formulas 


# Org Plot

This requires gnuplot. Below are some examples.


