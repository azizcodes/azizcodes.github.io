---
layout: post
title: "Observable Notebook to HTML page (2/3)"
date: 2018-05-24
categories: jekyll update
---

*[Part 1]({% post_url 2018-01-10-d3exportingresults %})*, *[Part 3]({% post_url 2018-01-10-d3exportingresults3 %})*


<div id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;margin: 5%">
</div>


<script type="module">

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/d/43a94dd258e35f42.js?v=3";

// Load the notebook, observing its cells with a default Inspector
// that simply renders the value of each cell into the provided DOM node.

new Runtime().module(notebook, Inspector.into(document.getElementById("myCanvas")));

</script>

So here is what you have to do:

``` html
<div id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;">
</div>


<script type="module">

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/d/43a94dd258e35f42.js?v=3";

// Load the notebook, observing its cells with a default Inspector
// that simply renders the value of each cell into the provided DOM node.
new Runtime().module(notebook, Inspector.into(document.getElementById("myCanvas")));

</script>
```

## Excluding Components from the Exported Code

Following the approach outlined [here](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks)


If we want a cell from the notebook, this is what we have to do

``` html
<script type="module">

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/d/43a94dd258e35f42.js?v=3";

// Load the notebook, observing its cells with a default Inspector
// that simply renders the value of each cell into the provided DOM node.

new Runtime().module(notebook, name => {
  if (name === "chart") {
    return new Inspector(document.querySelector("#myCanvas2"));
  }

  if (name === "viewof r") {
    return new Inspector(document.querySelector("#myCanvas3"));
  }

  if (name === "viewof t") {
    return new Inspector(document.querySelector("#myCanvas4"));
  }

});

</script>
```

<div id="myCanvas2" width="300" height="150" style="border:none;margin: 5%">
</div>

<div id="myCanvas3" width="300" height="150" style="border:none;margin: 5%">
</div>

<div id="myCanvas4" width="300" height="150" style="border:none;margin: 5%">
</div>



<script type="module">

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/d/43a94dd258e35f42.js?v=3";

// Load the notebook, observing its cells with a default Inspector
// that simply renders the value of each cell into the provided DOM node.

new Runtime().module(notebook, name => {
  if (name === "chart") {
    return new Inspector(document.querySelector("#myCanvas2"));
  }

  if (name === "viewof r") {
    return new Inspector(document.querySelector("#myCanvas3"));
  }

  if (name === "viewof t") {
    return new Inspector(document.querySelector("#myCanvas4"));
  }



});



</script>