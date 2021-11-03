---
layout: post
title: "About Pandas indices"
date: 2018-08-02
categories: linux jekyll update
---
This post aims to clarify pandas indices:
* `df.index`: Returns the index of the dataframe `df`. Can be reassigned.
* `df.set_index('column')`: Returns a new dataframe with `column` set as its index.
* `df.reindex(idx)`: You can make a new index and call it `idx`. The value of the dataframe at the index values are equal to the previous index. The resulting dataframe can be larger or smaller than the original. Returns a new dataframe, with `idx` set as its index.

Let's take an example.

``` python
beg='2018-01-01'; end='2018-06-30'

idx=pd.date_range(beg,end); values=[k for k in enumerate(idx)]
df=pd.DataFrame({'values':values},index=index)

time_shift=5; new_idx=idx+pd.Timedelta(f"{time_shift} days")
new_df=df.reindex(new_idx)
```
