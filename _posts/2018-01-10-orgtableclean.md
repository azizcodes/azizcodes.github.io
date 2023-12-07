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

formatting Riyal amounts

```
| a |     12 | SAR  12.00 |
| b |     34 | SAR  34.00 |
| c | 260.87 | SAR 260.87 |
| d |  739.1 | SAR 739.10 |
#+TBLFM: ='(concat "SAR " (format "%6.2f" ));L
```

# Separating 1000s with Commas 

Thousands separator function from emacswiki:

``` elisp
(defun group-number (num &optional size char)
  "Format NUM as string grouped to SIZE with CHAR."
  ;; Based on code for `math-group-float' in calc-ext.el
  (let* ((size (or size 3))
         (char (or char ","))
         (str (if (stringp num)
                  num
                (number-to-string num)))
          ;; omitting any trailing non-digit chars
          ;; NOTE: Calc supports BASE up to 36 (26 letters and 10 digits ;)
         (pt (or (string-match "[^0-9a-zA-Z]" str) (length str))))
    (while (> pt size)
      (setq str (concat (substring str 0 (- pt size))
                        char
                        (substring str (- pt size)))
            pt (- pt size)))
    str))
```
Applying it 

```
|    56.1 |    890 | SAR  946.10 |
| 100.545 | 974.25 | SAR 1074.80 |
#+TBLFM: $3='(concat "SAR"  (group-number (format "%8.2f" (+ $1 $2))));L
```
The above can be written more compactly as

``` elisp
(defun addandformat(x y)
(concat "SAR"  (group-number (format "%8.2f" (+ x y))))
)
```
And

```
|    56.1 |    890 | SAR   946.10 |
| 100.545 | 974.25 | SAR 1,074.80 |
#+TBLFM: $3='(addndformat $1 $2);L 
```
