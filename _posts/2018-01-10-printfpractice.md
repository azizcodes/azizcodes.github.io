---
layout: post
title: "Bash printf practice"
date: 2018-09-02
categories: jekyll update
---

The following is a study of the `printf`, taken from the manpages.

``` bash
man 1 printf
man 3 printf
```

and from [this post](https://cplusplus.com/reference/cstdio/printf/)


``` bash
printf FORMAT ARGUMENTS
```

where `FORMAT` is

```
%[flags][width][.precision][length]specifier
```
Notes:

1. `printf` writes to stdout by default
2. The format string is a character string, beginning and ending in its initial shift state, if any.
3. The format is string is composed of ordinary characters and conversion specifications
4. The ordinary characters (no %) are copied unchanged
5. The conversion specifications (%) that fetch zero or more from ARGUMENTS
6. conversion specifier `diouxXeEfFgGaAcsnm%`
7. flags: `#0-'+`
8. field width: `[0-9]+`
9. precision: `.[0-9]+`
10. length modifier `hlqLj`

The locale here is assumed to be`en_US.UTF-8`. Other locales might introduce a thousands grouping character or a radix character. What I am saying here is better explained by examples of the common usages.

``` bash
$ printf '%d\n' 12 31 41
12
31
41

$ seq 3 | xargs printf '%.2f\n'
1.00
2.00
3.00

$ echo 31.3 43.56 212.21 | xargs printf '%6.2f\n'
 31.30
 43.56
212.21

$ printf "%'.2f\n" 1234567.89
1,234,567.89

$ printf '%-4.4s\n%-4.4s\n%-4.4s\n' elephant frog cow | cat -A
elep$
frog$
cow $
```
What if we want to print `09009900`  as `0 900 9 900`? This would require `printf` to print 4 times.  i.e. You will not find a format such that

```
printf FORMAT 09009900
```

with one go. You'd either specify 0, 900, 9, 900 as arguments. Or, you'd read the string, refer to specific parts of it with indexes and print them.

You can browse your locale variables with 

``` bash
$ locale
$ locale -k LC_TIME
$ locale date_fmt
%a %d %b %Y %r %Z
```
