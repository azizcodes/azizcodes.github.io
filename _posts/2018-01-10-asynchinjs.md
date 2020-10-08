---
layout: post
title:  "Javascript: Asynchronous Functions"
date:   2018-07-06
categories: jekyll update
---

Previously, I have discussed web scraping (fetching stuff) using Nokogiri or Python's Requests in this blog. In this post, I show how this can be done using Javascript and the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). 

Why is this important? In the rails application I have been working on, the page was making too many requests prior to loading the page, which made loading the page slow. Since Javascript is *asynchronous*, however, I can load the page right away and then fetch what needs to be fetched and inserted into the page as the page loads.

See an example [here](/assets/asyncjs/asyncjs.html) (and the code below). The program fetches the opening price for Yansab, Aramco, and Sabic from the Argaam website, asynchronously. Cool stuff.

The code is below.

<div style="text-align: center">
<iframe src="/assets/asyncjs.html" width='100%' height='400px'></iframe>
</div>


```html
<!DOCTYPE html>

<html>

<style type="text/css">
	.xy {
		background-color: yellow;
	}
</style>

<body>

<div>yansab</div>
<div class="xx">
	https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/88
</div>
<div>aramco</div>
<div class="xx">
	https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/3509
</div>
<div>sabic</div>
<div class="xx">
	https://www.argaam.com/ar/company/companyoverview/marketid/3/companyid/77
</div>

<script>
async function fetchPrice(url){
  let el=document.createElement('html'); 
  let txt=await fetch(url).then(d=>d.text());
  el.innerHTML=txt;
  let divs=el.getElementsByTagName('div');
  let i=[ ...divs].map(d=>d.className).findIndex(d=>d=='value');
  return divs[i].innerHTML;
};
</script>

<script>
async function f(){
	var xx=document.getElementsByClassName('xx');

	for (let i = 0; i < xx.length; i++) {
		xx[i].innerHTML=await fetchPrice(xx[i].innerHTML);
	};
};
f();
</script>
</body>
</html>
```

