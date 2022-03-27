---
layout: post
title: "Time Value of Money Calculators"
date: 2018-08-10
categories: linux jekyll update
---

The following functions are available in [emacs calc](https://www.gnu.org/software/emacs/manual/html_node/calc/Financial-Functions.html) and python's numpy.

Suppose you're getting the following payments

![tv]({{ "/assets/tv.png" | absolute_url }})

If we were take into account that the value of these payments, assuming you put them in the bank right away and get interest on them of 5%, then the [*future value*](https://www.gnu.org/software/emacs/manual/html_node/calc/Financial-Functions.html) would be as seen the below chart

![fv]({{ "/assets/fv.png" | absolute_url }})

You can calculate this sum as `2000+2000*1.05+2000*1.05^2+2000*1.05^3`

Or more easily in calc, this would be `5% RET 4 RET 2000 RET b F` 

![pv]({{ "/assets/pv.png" | absolute_url }})

It can be seen that the [*present value*](https://www.gnu.org/software/emacs/manual/html_node/calc/Financial-Functions.html) of these payments is `pv*1.05^4=fv`

In calc, this would be `5% RET 4 RET 2000 RET b P` 
