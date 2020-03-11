---
layout: post
title: "Observable Notebook to HTML page (1/3)"
date: 2018-05-24
categories: jekyll update
---

*Updated. Check out [part 2]({% post_url 2018-01-10-d3exportingresults2 %})*
, and *[part 3]({% post_url 2018-01-10-d3exportingresults3 %})*

Observable Notebooks are a fantastic way for exploring D3. Coverting the output code that can work on this page, however, is not straightforward (I have yet to read [this](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks) and [that](https://talk.observablehq.com/t/notebook-to-vanilla-javascript-steps/1644) but I am just a beginner, so I'll update this post later).

Here is my approach for now, contrast it with the code in [this post](https://observablehq.com/d/43a94dd258e35f42). Basically, the interactivity is gone. 

## Exporting Results 
<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;margin:5%;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script src="d3.min.js"></script>
<script>

function draw(ctx,r,t){
  // let c = document.getElementById("myCanvas");
  // let ctx=c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 90, r, 0, 2 * Math.PI);
  ctx.stroke();

  // let's draw a line
  ctx.beginPath();
  // line 1
  ctx.moveTo(0,90);
  ctx.lineTo(210,90);
  // line 2
  ctx.moveTo(100,0);
  ctx.lineTo(100,180);
  ctx.stroke();
  // point at 45 angle
  ctx.beginPath();
  // ctx.arc(100+r/Math.sqrt(2), 75-r/Math.sqrt(2), 3, 0, 2 * Math.PI);
  ctx.arc(100+r*Math.cos(t), 90-r*Math.sin(t), 3, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  // text
  ctx.font = '20px serif';
  ctx.fillStyle = 'blue';
  ctx.fillText('P', 100+r*Math.cos(t), 85-r*Math.sin(t));
  
  // line 3
  ctx.moveTo(100,90);
  ctx.lineTo(100+r*Math.cos(t),90-r*Math.sin(t));
  ctx.strokeStyle = 'green';
  ctx.stroke();
}

// let's get the context
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
draw(ctx, 50,.34);

</script>

``` html
<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script src="d3.min.js"></script>
<script>

function draw(ctx,r,t){
  // let c = document.getElementById("myCanvas");
  // let ctx=c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 90, r, 0, 2 * Math.PI);
  ctx.stroke();

  // let's draw a line
  ctx.beginPath();
  // line 1
  ctx.moveTo(0,90);
  ctx.lineTo(210,90);
  // line 2
  ctx.moveTo(100,0);
  ctx.lineTo(100,180);
  ctx.stroke();
  // point at 45 angle
  ctx.beginPath();
  // ctx.arc(100+r/Math.sqrt(2), 75-r/Math.sqrt(2), 3, 0, 2 * Math.PI);
  ctx.arc(100+r*Math.cos(t), 90-r*Math.sin(t), 3, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  // text
  ctx.font = '20px serif';
  ctx.fillStyle = 'blue';
  ctx.fillText('P', 100+r*Math.cos(t), 85-r*Math.sin(t));
  
  // line 3
  ctx.moveTo(100,90);
  ctx.lineTo(100+r*Math.cos(t),90-r*Math.sin(t));
  ctx.strokeStyle = 'green';
  ctx.stroke();
}

// let's get the context
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
draw(ctx, 50,.34);

// this last part is
// {
//  const canvas = DOM.canvas(800, 200);
//  draw(canvas.getContext('2d'), r,t);
//  return canvas;
// }
// in the observable notebook 

</script>
```