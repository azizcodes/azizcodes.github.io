---
layout: post
title: "org advanced spreadsheet"
date: 2018-09-09
categories: linux jekyll update
---

# `defun` vs `defmath`

`defun` is the normal way to define lisp functions in emacs.

They can be useful to use with org tables if you're writing long expressions, logical operations, string manipulation, etc.

```
# define a calc function and evaluate it with `C-x C-e`
(defun firstletter(n)
    (identity (substring n 0 1))
    )

# use it in a table    
| abdulaziz | a |
| khalid    | k |
#+TBLFM: $2='(firstletter $1)

```

`defmath` on the other hand, is designed to work with the calculator. The good thing about them is that you can use the calculator's functions within the function definition.  There are other uses for it like the ability to use the stack as arguments to functions.

```
# define a calc function
(defmath myfact (n)
  (if (> n 0)
      (* n (myfact (1- n)))
    1))

# now you can write

myfact(5) => 

# and press `C-x * e` on the previous line
myfact(5) => 120

# use it in a table
| 4 |  24 |
| 2 |   2 |
| 3 |   6 |
| 5 | 120 |
#+TBLFM: $2=myfact($1)
```
و سلامتكم
