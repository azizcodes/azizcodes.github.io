---
layout: post
title: "Diff, comparing files"
date: 2018-08-08
categories: linux jekyll update
---

Today I was thinking how are pandas' series and dataframe types different?

``` bash
diff -y <(python -c 'import pandas;[print(k) for k in dir(pandas.DataFrame)]') <(python -c 'import pandas;[print(k) for k in dir(pandas.Series)]')
```

Filtering the results by piping the above to `sed -ne '/</p'`, `sed -ne '/>/p'`, `sed -ne '/|/p'` can display more details.



More generally, let's say you want to compare to files, one containing the dataframe functions `df_fs` and another containing the series functions `s_fs`. Those can be obtained by hitting TAB after importing pandas, as below

``` bash
Python 3.8.10 (default, Nov 26 2021, 20:14:08) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import pandas
>>> pandas.DataFrame.
Display all 212 possibilities? (y or n)
pandas.DataFrame.T                   pandas.DataFrame.gt(                 pandas.DataFrame.resample(
pandas.DataFrame.abs(                pandas.DataFrame.head(               pandas.DataFrame.reset_index(
pandas.DataFrame.add(                pandas.DataFrame.hist(               pandas.DataFrame.rfloordiv(
...
```
and similarly for the series

``` bash
>>> pandas.Series.
Display all 213 possibilities? (y or n)
pandas.Series.T                        pandas.Series.ge(                      pandas.Series.rename_axis(
pandas.Series.abs(                     pandas.Series.get(                     pandas.Series.reorder_levels(
pandas.Series.add(                     pandas.Series.groupby(                 pandas.Series.repeat(
...
```
If the text is copied from the terminal and placed in files `df_fs` and `s_fs`, respectively, we can proceed as follows.


``` bash
diff -y <(for k in `cat s_fs`; do echo $k; done | sed 's/pandas.Series.//' | sort) <(for k in `cat df_fs`; do echo $k; done | sed 's/pandas.DataFrame.//' | sort)
```

I'll break this down:

``` bash
diff -y FILE1 FILE2
```
is the original syntax for the `diff` command to show the difference in two adjacent columns. In our command there are two process substitutions (`<(commands)`) instead of files. The first part in the process substitution is a loop that prints the contents of the file as one column, taking advantage of _word splitting_. The second part, removes the `pandas.Series.` from the function name (and the same for `pandas.DataFrame.` in the 2nd process substitution). The third part of the pipe sorts the functions, in case they weren't sorted.


