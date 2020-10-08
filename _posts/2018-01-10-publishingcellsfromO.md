---
layout: post
title:  "Choosing Cells from Observable"
date:   2018-06-14
categories: jekyll update
---

First download the package using npm or otherwise from observable.

``` javascript
import {Runtime, Inspector} from "./node_modules/@observablehq/runtime/dist/runtime.js";
import define from "./node_modules/@uwdata/data-utilities/index.js";
const runtime = new Runtime();
return new Inspector(document.body);
````
Here is how to insert the whole notebook

``` javascript
const main = runtime.module(define, Inspector.into(document.body));
```
Here is how to insert cells from the notebook into your HTML document. Suppose that `cell` is the name of the cell tha you want to insert in your HTML. First, make a div with an id like `foo`:

``` html
<div id="foo">
```
Then add the following to your javascript

``` javascript
const main = runtime.module(define, name => {
  if (name === "cell") {
       return new Inspector(document.querySelector('#foo'));
        }
        });
```

