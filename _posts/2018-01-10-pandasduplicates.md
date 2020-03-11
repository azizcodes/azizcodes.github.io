---
layout: post
title: "Identifying Duplicates with Pandas"
date: 2018-03-25
categories: jekyll update python
---
This is a common scenario. You have a list of things and you want to identify the duplicate records. This post illustrates how to do this with python's Pandas package.

``` python
import pandas as pd

df1=pd.DataFrame({'x':[1,2,3,4],'y':[2,3,4,5],'z':[3,4,5,6]})
df2=pd.DataFrame({'x':[2,9],'y':[3,1],'z':[4,3]})
df3=pd.DataFrame({'x':[2,4,7],'y':[3,5,8],'z':[4,6,2]})
# duplicates: (2,3,4), (4,5,6)

# merge 
list_dfs=[df1,df2,df3]
merged=pd.concat(list_dfs)

# reset index
merged.reset_index(inplace=True,drop=True)

# identify duplicate values
# criterea for duplication: 
# let's say if x and y are the same, the record is a duplicate
duplicated_values=merged[merged.duplicated(subset=['x', 'y'])]
# drop duplicate values
merged.drop_duplicates(subset=['x', 'y'],inplace=True)
```

## Explaination

``` python
>>> df1
   x  y  z
0  1  2  3
1  2  3  4 #1
2  3  4  5
3  4  5  6 #2
>>> df2
   x  y  z
0  2  3  4  #1
1  9  1  3
>>> df3
   x  y  z
0  2  3  4
1  4  5  6 #2
2  7  8  2
```
Initially, `merged` looked like this

``` python
>>> merged
   x  y  z
0  1  2  3
1  2  3  4 #1
2  3  4  5
3  4  5  6 #2
0  2  3  4 #1
1  9  1  3
0  2  3  4
1  4  5  6 #2
2  7  8  2

```

After resetting the index and droppig duplicates,

``` python
>>> merged
   x  y  z
0  1  2  3
1  2  3  4
2  3  4  5
3  4  5  6
5  9  1  3
8  7  8  2

```