---
layout: post
title: "Observable Notebook to HTML page (3/3)"
date: 2018-05-25
categories: jekyll update
---

*[part 1]({% post_url 2018-01-10-d3exportingresults %})*, *[part 2]({% post_url 2018-01-10-d3exportingresults2 %})*


## Experimenting with Jupyter Notebook

I am finally able to run d3 on jupyter notebooks. There is a gap between running things on Observable notebooks and implementing the JavaScript on an actual website. I am trying to bridge in this sereis of post.

[`py_d3`](https://github.com/ResidentMario/py_d3) is an IPython extension which adds D3 support to the Jupyter Notebook environment.

To demonstrate usage, put the following Jupyter Notebook cell,

```
%load_ext py_d3
```

Then the following in another cell

```
%%d3

<g></g>

<script>

value=Math.PI/2
d3.select("g").text("the value of pi/2 is");
d3.select("g").append("p").text(value);
         
</script>
```
The following will be printed on the page
```
the value of pi/2 is
1.5707963267948966
```
