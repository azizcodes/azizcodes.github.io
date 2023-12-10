---
layout: post
title: "Cleaner org tables (2/2)"
date: 2018-09-14
categories: linux jekyll update
---

I am redoing the previous post in light of new findings.

# Adding percentage sign

As a warm up. To do this in one go, you need a function that maps a column to a single value (the sum of the column elements), and then divide by this value. 

``` elisp
(defun mypercentages(c x)
(setq maxval (apply #'calcFunc-vsum  x))
(concat "% " (format "%5.2f" (* 100 (/ c maxval))))
)
```

Then input this as a formula to the 2nd column.

```
#+name: mytable
| 5510.66 | % 19.93 | 1 |
|  6236.0 | % 22.56 | 2 |
|  9441.2 | % 34.15 | 3 |
|  934.66 | %  3.38 | 4 |
|  5523.0 | % 19.98 | 5 |
#+TBLFM: $2='(mypercentages $1 '(@1$1..@>$1));N::$3=@#
```

# Excel's "Accounting Format"

The algorithm here is similar, just takes more steps. I will do it in two ways. The first is using org tables, and the 2nd using org babel.


## Algorithm

You need to know the maximum number of strings after formatting them into `%6.f` (or whatever the field width is) and adding the commas as 1000s separator.
You also need to know the number of strings after formatting and grouping thousands for the current element.
Compare the two, with the length of the difference between them make a string of empty spaces.

## Using Org tables

Field width of the maximum number in your data. 

``` elisp
(defun elx(x)
;; gets element width after formatting and grouping numbers
(setq el-formatted (format "%7.2f" x))
(setq el-trimmed (string-trim-left el-formatted))
(setq el-grouped (group-number el-trimmed))
(setq el-length (length el-grouped))
)

(defun max-elx(y)
;; gets maximum col width after formatting and grouping numbers
(setq col-formatted (mapcar (lambda (z) (format "%7.2f" z)) y))
(setq col-trimmed (mapcar (lambda (z) (string-trim-left z)) col-formatted))
(setq col-grouped (mapcar (lambda (z) (group-number z)) col-trimmed))
(setq col-length (mapcar (lambda (z) (length z)) col-grouped))
(apply #'max col-length)
)

(defun string-elx(x y)
;; depends on the above two functions, so they should be defined first before applying this one !
(setq elx-diff (- (max-elx y) (elx x)))
(concat "'" "SAR " (make-string elx-diff #x0020) el-grouped "'" ) ;; #x0020 is a space
)
```

The result is as follows (*note: a newer version of the above code in the next post*).

```
|  number | elx          |
|---------+--------------|
| 5510.66 | SAR 5,510.66 |
|  6236.0 | SAR 6,236.00 |
|  9441.2 | SAR 9,441.20 |
|  934.66 | SAR   934.66 |
|  5523.0 | SAR 5,523.00 |
#+TBLFM: $2='(string-elx $1 '(@1$1..@>$1));N
```


## Exporting to HTML

Two more things:

1. HTML deletes the whitespace as detailed [here](https://stackoverflow.com/questions/9356339/html-export-option-to-not-compress-multiple-spaces-in-emacs-org-mode ) and [here](https://www.w3.org/TR/CSS2/text.html#white-space-prop). The solution is to set the white-space property as pre-wrap
2. You will also need to use a monospaced font if you want the values to be aligned

``` elisp
#+html_head: <style> table{font-family: monospace; white-space: pre-wrap } </style>

;; macros. This is irrelevant to the current post
#+macro: red @@html:<span class="red">$1</span>@@
#+html_head: <style>.red{color:red;}; </style>
```

## Using org babel

Now I'll do the same following a difference approach. The difference is in the input to the functions defined by `defun`. When using org tables, the range is a list, e.g. `'(1 2 etc)`. When using org babel, the elements are lists of lists, e.g. `'((1) (2) (etc))`.

*Note: the code below mostly works but is not finalized.*


``` elisp
(defun addcurrency(y)
  ;; the input from the org table looks like this
  (setq raw y)

  ;; format it as %10.2f
  (setq formatted (mapcar (lambda (x) (format "%10.2f" x)) (mapcar 'car raw)))
  ;; trim because group-number function doesn't accept numbers with leading whitespace
  (setq trimmed (mapcar 'string-trim-left formatted)) 
  ;; now apply group-number to the elements of the trimmed list
  (setq grouped (mapcar 'group-number trimmed))
  
  ;; but keep track of spaces you have trimmed and make a list of them
  (setq lengths (mapcar 'length grouped))
  (setq countspaces (mapcar (lambda (x) (- 10 x)) lengths))
  (setq spaces (mapcar (lambda (x) (make-string x #x0020)) countspaces)) 

  ;; combine (concatenate) spaces and grouped into one list
  (setq part2 (seq-mapn #'concat spaces grouped))

  ;; add the currency symbol and concatenate
  (setq part1 (make-list (length raw) "SAR"))
  (seq-mapn #'concat part1 part2)

  ;; to output the result as a column of an org table
  (mapcar 'list (seq-mapn #'concat part1 part2))
)
``` 

applying this to the following data

```
#+name: smallcol
| 12312.54654 |
|   1123.3544 |
|    230.1144 |
```
we get

```
#+name:myfunction
#+begin_src emacs-lisp :var tab=smallcol 
 (addcurrency tab) 
#+end_src

#+RESULTS: myfunction
| SAR 12,312.55 |
| SAR  1,123.35 |
| SAR    230.11 |
```

