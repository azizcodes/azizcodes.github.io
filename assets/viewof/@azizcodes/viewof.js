// https://observablehq.com/@azizcodes/viewof@431
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Viewof`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
## Input
Move the slider below to increase the value of *x*.`
)});
  main.variable(observer("viewof x")).define("viewof x", ["html"], function(html){return(
html`<input type="range" value="1" min=0" max="5" step="1">`
)});
  main.variable(observer("x")).define("x", ["Generators", "viewof x"], (G, _) => G.input(_));
  main.variable(observer("y")).define("y", function(){return(
1
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Output
here is the value of *z* (just change *x* and *y* above)
`
)});
  main.variable(observer()).define(["tex","x","y","theta"], function(tex,x,y,theta){return(
tex`x=${x},\text{ } y=${y},\text{ }  \theta=${theta}`
)});
  main.variable(observer()).define(["tex","x","y"], function(tex,x,y){return(
tex`z=\sqrt{x^2+y^2}=\sqrt{${x}^2+${y}^2}=\sqrt{${x**2+y**2}}=${Math.sqrt(x**2+y**2)}`
)});
  main.variable(observer()).define(["DOM","drawPolygon","points"], function(DOM,drawPolygon,points)
{
  const canvas = DOM.canvas(800, 250);
  drawPolygon(canvas.getContext('2d'), points);
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`## References

1. [viewof](https://observablehq.com/@observablehq/a-brief-introduction-to-viewof)
2. [Drawing Polygons](https://observablehq.com/@scarysize/finding-random-points-in-a-polygon?collection=@observablehq/explorables)
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix`
)});
  main.variable(observer("z")).define("z", ["x","y"], function(x,y){return(
Math.sqrt(x**2+y**2)
)});
  main.variable(observer("theta")).define("theta", ["y","x"], function(y,x){return(
Math.atan(y/x)*180/Math.PI
)});
  main.variable(observer("drawPolygon")).define("drawPolygon", function(){return(
function drawPolygon(context, coordinates, withFill = true) {
  const start = coordinates[0];
  const linePoints = coordinates.slice(1);
  
  context.beginPath();
  context.moveTo(...start);

  linePoints.forEach(p => context.lineTo(...p));
	
  context.lineTo(...start);
  
  if (withFill) {
    context.fill();
    return;
  }
  
  //context.stroke();
}
)});
  main.variable(observer("points")).define("points", ["x","y"], function(x,y){return(
[[0,200],[100*x,200],[100*x,200-100*y]]
)});
  return main;
}
