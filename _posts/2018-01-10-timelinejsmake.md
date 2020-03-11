---
layout: post
title:  "Timelinejs"
date:   2018-05-09
categories: jekyll update 
---

<!-- 1 -->
<link title="timeline-styles" rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">

<!-- 2 -->
<script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>

<div id='timeline-embed' style="width: 100%; height: 600px"></div>

<!-- 3 -->
<script type="text/javascript">
  var timeline_json = {"events": [{"start_date": {"day": "1", "month": "10", "year": "2017"}, "text": {"headline": "Aziz Codes", "text": "<p>Started a new project.</p>"}, "media": {"url": "/assets/salem.jpeg", "caption": "The name of it was Revenge for Kulaib"}}, {"start_date": {"day": "1", "month": "11", "year": "2017"}, "text": {"headline": "Aziz Codes Develops", "text": "<p>his new project is under progress</p>"}}, {"start_date": {"day": "1", "month": "12", "year": "2017"}, "text": {"headline": "Aziz Codes is Done", "text": "<p>His project accomplished its goals.</p>"}, "media": {"url": "/assets/salem.jpeg", "caption": "The name of it was Revenge for Kulaib"}}]}
  // two arguments: the id of the Timeline container (no '#')
  // and the JSON object or an instance of TL.TimelineConfig created from
  // a suitable JSON object
  window.timeline = new TL.Timeline('timeline-embed', timeline_json);
</script>

The above is a minimal timeline created with [timelinejs](http://timeline.knightlab.com/) using JSON.

Here is a [full view of the presentation](/assets/timelinejs.html).

Ofcourse, you don't need to use JSON if you prefer dealing with Google Spreadsheets.

To get an overview of the process of create the timeline with JSON, I just insert the following code in this html [as per the documentation](https://timeline.knightlab.com/docs/instantiate-a-timeline.html)
```
<!-- 1 -->
<link title="timeline-styles" rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">

<!-- 2 -->
<script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>

<div id='timeline-embed' style="width: 100%; height: 600px"></div>

<!-- 3 -->
<script type="text/javascript">
  var timeline_json = {"events": [{"start_date": {"day": "1", "month": "10", "year": "2017"}, "text": {"headline": "Aziz Codes", "text": "<p>Started a new project.</p>"}, "media": {"url": "salem.jpeg", "caption": "The name of it was Revenge for Kulaib"}}, {"start_date": {"day": "1", "month": "11", "year": "2017"}, "text": {"headline": "Aziz Codes Develops", "text": "<p>his new project is under progress</p>"}}, {"start_date": {"day": "1", "month": "12", "year": "2017"}, "text": {"headline": "Aziz Codes is Done", "text": "<p>His project accomplished its goals.</p>"}, "media": {"url": "salem.jpeg", "caption": "The name of it was Revenge for Kulaib"}}]}
  // two arguments: the id of the Timeline container (no '#')
  // and the JSON object or an instance of TL.TimelineConfig created from
  // a suitable JSON object
  window.timeline = new TL.Timeline('timeline-embed', timeline_json);
</script>
```
Specifically, I only input my data in this line

``` javascript
var timeline_json =  {"events": [{"start_date": {"day": "1", "month": "10", "year": "2017"}, "text": {"headline": "Aziz Codes", "text": "<p>Started a new project.</p>"}, "media": {"url": "salem.jpeg", "caption": "The name of it was Revenge for Kulaib"}}, {"start_date": {"day": "1", "month": "11", "year": "2017"}, "text": {"headline": "Aziz Codes Develops", "text": "<p>his new project is under progress</p>"}}, {"start_date": {"day": "1", "month": "12", "year": "2017"}, "text": {"headline": "Aziz Codes is Done", "text": "<p>His project accomplished its goals.</p>"}, "media": {"url": "salem.jpeg", "caption": "The name of it was Revenge for Kulaib"}}]}
```
See my analysis in this [Jupyter Notebook](https://nbviewer.jupyter.org/urls/azizcodes.github.io/assets/timelinejs.ipynb) for details. Skip to `In [69]` if you just want to learn how to make timelines.

If you like this project from [knightlab](https://knightlab.northwestern.edu/), check out their [other projects](https://knightlab.northwestern.edu/projects/).