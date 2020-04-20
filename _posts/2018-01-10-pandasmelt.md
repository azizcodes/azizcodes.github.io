---
layout: post
title: "Pandas Melt"
date: 2018-7-1
categories: jekyll update
---

First some info on [wide and long formats](https://en.wikipedia.org/wiki/Wide_and_narrow_data). Bascially, how to change from format to the other shown in the wikipedia page.

Why is that necessary? Well, some Javascript libraries require that the data be in the long format, for example. So here is how to do that. First let's GET the table

``` python
import pandas as pd
url='https://en.wikipedia.org/wiki/Wide_and_narrow_data'
t=pd.read_html(url)
t0=t[0]
t0_headers=t0.loc[0]
wide = t0.drop(0)
```

Here is the table *wide*

<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>Person</th>\n      <th>Age</th>\n      <th>Weight</th>\n      <th>Height</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>1</th>\n      <td>Bob</td>\n      <td>32</td>\n      <td>128</td>\n      <td>180</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>Alice</td>\n      <td>24</td>\n      <td>86</td>\n      <td>175</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>Steve</td>\n      <td>64</td>\n      <td>95</td>\n      <td>165</td>\n    </tr>\n  </tbody>\n</table>

``` python
wide.columns=t0_headers
long = pd.melt(wide,
        id_vars='Person',
        var_name='Variable', 
        value_name='Value')
```
Here is the table *long*

<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>Person</th>\n      <th>Variable</th>\n      <th>Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>Bob</td>\n      <td>Age</td>\n      <td>32</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>Alice</td>\n      <td>Age</td>\n      <td>24</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>Steve</td>\n      <td>Age</td>\n      <td>64</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>Bob</td>\n      <td>Weight</td>\n      <td>128</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>Alice</td>\n      <td>Weight</td>\n      <td>86</td>\n    </tr>\n    <tr>\n      <th>5</th>\n      <td>Steve</td>\n      <td>Weight</td>\n      <td>95</td>\n    </tr>\n    <tr>\n      <th>6</th>\n      <td>Bob</td>\n      <td>Height</td>\n      <td>180</td>\n    </tr>\n    <tr>\n      <th>7</th>\n      <td>Alice</td>\n      <td>Height</td>\n      <td>175</td>\n    </tr>\n    <tr>\n      <th>8</th>\n      <td>Steve</td>\n      <td>Height</td>\n      <td>165</td>\n    </tr>\n  </tbody>\n</table>

:grinning:
:end: