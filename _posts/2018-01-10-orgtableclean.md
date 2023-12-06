---
layout: post
title: "Cleaner org tables"
date: 2018-09-14
categories: linux jekyll update
---

Sometimes you want to keep your org tables clean or add text to the result of a `calc`ulation. For example, you want to know what percentage is `a` from `(a+b)` but you don't want to add a column for `(a+b)` or the percentage sign. My earlier to solution to that was remote tables but that's a little bit tedious. Below is another approach using user-defined functions.


``` elisp
(defmath mypercent(x y)
 (round (/ (* x 100) (+ x y)) 2)
)


(defun addpersign(x y)
(setq num (calc-eval (calcFunc-mypercent x y)))
(concat num "%")
)
```

The org table can be written as

```
| a | b |    a% |    b% |      a |
|---+---+-------+-------+--------|
| 4 | 3 | 57.14 | 42.86 | 57.14% |
#+TBLFM: $3=mypercent($1,$2)::$4=mypercent($2,$1)::$5='(addpersign $1 $2);N
```
