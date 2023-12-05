---
layout: post
title: "Gantt Chart by Hand"
date: 2018-09-10
categories: linux jekyll update
---

I am constructing Gantt chart by hand. Using a monospaced font I can write

```
C-u 24 b -> xxxxxxxxxxxxxxxxxxxxxxxx
```

Which is great but I want to automate it in an org table.  So I tried

``` elisp
(insert "x")         ;; doesn't work in org tables formulas
(insert-char 120 24) ;; also doesn't work
```

But that didn't work due to the data type expected by the table. I order for this to work inside an org table, you should write a function that outputs a quoted string, like the following

``` elisp
(defun repeat(x n)
  ;; initialize the while loop
  (setq num 0) (setq b "")

  ;; concatenate to the empty string with each increment
  (while (< num n)
    (setq b (concat b x))
    (setq num (1+ num))
    )

  ;; output to be displayed
  (message b)
)

(repeat "x" 4) ;; C-x C-e gives "xxxx"
```
Now you can use it in an org table

```
| 24 | x | xxxxxxxxxxxxxxxxxxxxxxxx |
#+TBLFM: $3='(repeat $2 (string-to-number $1))
```

# Extra

Understanding function scopes is important to avoid errors.

``` elisp
(defmath aziz1(x y)
   (math-floor (* 100 (/ x y)))
)

(calcFunc-aziz1 5 8) ;; => 62

(defun aziz2(x y)
  (math-floor (* 100 (/ x y)))
)

(aziz2 5 8) ;; => 0 ;; math-floor not callable from within defun

(defun aziz3(x y) 
  (calcFunc-aziz1 x y) ;; calcFunc-aziz1 not callable from withint defun
)
(aziz3 5 8) => 62 
```

Let's modify the `repeat` function above to accept two inputs (nominator, denominator) based on the above.

``` elisp
(defun repeat(x n1 n2)
  ;; initialize the while loop
  (setq num 0) (setq b "")

  (setq n (calcFunc-aziz1 n1 n2))

  ;; concatenate to the empty string with each increment
  (while (< num n) ;; (calcFunc-aziz1 n1 n2) doesn' work inside the table! Probably due to the scope
    (setq b (concat b x))
    (setq num (1+ num))
    )

  ;; output to be displayed
  (message b)
)

(repeat "x" 1 30) ;; => xxx

| 1 | 30 | xxx    |
| 2 | 30 | xxxxxx |
#+TBLFM: ='(repeat "x" $1 $2);N  
```
For more information on the `;N` flag, see [this](https://orgmode.org/worg/org-tutorials/org-spreadsheet-lisp-formulas.html).
