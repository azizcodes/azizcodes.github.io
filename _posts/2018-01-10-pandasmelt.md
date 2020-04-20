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

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Person</th>
      <th>Age</th>
      <th>Weight</th>
      <th>Height</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Bob</td>
      <td>32</td>
      <td>128</td>
      <td>180</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Alice</td>
      <td>24</td>
      <td>86</td>
      <td>175</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Steve</td>
      <td>64</td>
      <td>95</td>
      <td>165</td>
    </tr>
  </tbody>
</table>

``` python
wide.columns=t0_headers
long = pd.melt(wide,
        id_vars='Person',
        var_name='Variable', 
        value_name='Value')
```
Here is the table *long*

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Person</th>
      <th>Variable</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Bob</td>
      <td>Age</td>
      <td>32</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Alice</td>
      <td>Age</td>
      <td>24</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Steve</td>
      <td>Age</td>
      <td>64</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Bob</td>
      <td>Weight</td>
      <td>128</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Alice</td>
      <td>Weight</td>
      <td>86</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Steve</td>
      <td>Weight</td>
      <td>95</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Bob</td>
      <td>Height</td>
      <td>180</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Alice</td>
      <td>Height</td>
      <td>175</td>
    </tr>
    <tr>
      <th>8</th>
      <td>Steve</td>
      <td>Height</td>
      <td>165</td>
    </tr>
  </tbody>
</table>


Want a JSON?

``` python
print(long.to_json(orient='records'))
```

The resule is below

``` json
[{"Person":"Bob","Variable":"Age","Value":"32"},{"Person":"Alice","Variable":"Age","Value":"24"},{"Person":"Steve","Variable":"Age","Value":"64"},{"Person":"Bob","Variable":"Weight","Value":"128"},{"Person":"Alice","Variable":"Weight","Value":"86"},{"Person":"Steve","Variable":"Weight","Value":"95"},{"Person":"Bob","Variable":"Height","Value":"180"},{"Person":"Alice","Variable":"Height","Value":"175"},{"Person":"Steve","Variable":"Height","Value":"165"}]
```


😀
