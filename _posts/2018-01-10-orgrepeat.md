

I am constructing Gantt chart by hand. Using a monospaced font I can write

```
C-u 24 b -> xxxxxxxxxxxxxxxxxxxxxxxx
```

Which is great but I want to automate it in an org table.  So I tried:

``` elisp
(insert "x")         ;; doesn't work in org tables formulas
(insert-char 120 24) ;; also doesn't work
```

But that didn't work due to the data type expected by the table. I order for this to work, the output of the function should be a string. 

So, write a function that outputs a string

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
#+TBLFM: $2=x::$3='(repeat $2 (string-to-number $1))
```

(concat "a" "a")


(defun firstletter(n)
(setq a (substring n 0 1))
(dotimes (i 10) (insert a)
    )
    )

(firstletter "abdulaziz")
aaaaaaaaaa
    
| abdulaziz | aa |
#+TBLFM: $2='(firstletter $1)

