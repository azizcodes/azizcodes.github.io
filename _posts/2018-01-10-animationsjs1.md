---
layout: post
title: "Animations with JS"
date: 2018-05-30
categories: jekyll update
---

[On Observable](https://observablehq.com/@azizcodes/sin-from-scratch-playing-with-variables).

<div id="chart" style="width:800px;height:500px;margin-top:50px;"></div>

<script type="module">

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/@azizcodes/sin-from-scratch-playing-with-variables.js?v=3";


new Runtime().module(notebook, name => {
  if (name === "chart") {
    return new Inspector(document.querySelector("#chart"));
  }
});

</script>

## Notebook Visualizer

<svg width="490pt" height="588pt" viewBox="0.00 0.00 489.51 588.11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="max-width: 100%; height: auto;">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 584.1142)">
<title>@azizcodes/sin-from-scratch-playing-with-variables</title>
<polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-584.1142 485.5053,-584.1142 485.5053,4 -4,4"/>
<!-- d3 -->
<g id="node1" class="node">
<title>d3</title>
<ellipse fill="none" stroke="#000000" cx="152.2326" cy="-241.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="152.2326" y="-236.9142" font-family="Times,serif" font-size="14.00" fill="#000000">d3</text>
</g>
<!-- chart -->
<g id="node2" class="node">
<title>chart</title>
<ellipse fill="none" stroke="#000000" cx="451.1684" cy="-257.1142" rx="30.1746" ry="18"/>
<text text-anchor="middle" x="451.1684" y="-252.9142" font-family="Times,serif" font-size="14.00" fill="#000000">chart</text>
</g>
<!-- d3&#45;&gt;chart -->
<g id="edge1" class="edge">
<title>d3-&gt;chart</title>
<path fill="none" stroke="#000000" d="M155.1985,-223.0076C163.838,-172.7361 190.6677,-33.4125 226.6234,-7.1142 245.9949,7.0542 256.7209,-4.953 280.6234,-7.1142 327.5104,-11.3537 349.931,5.4819 384.8315,-26.1142 414.9902,-53.4176 437.6937,-173.1558 446.801,-228.6683"/>
<polygon fill="#000000" stroke="#000000" points="443.3976,-229.5497 448.4393,-238.868 450.309,-228.4394 443.3976,-229.5497"/>
</g>
<!-- yAxis -->
<g id="node5" class="node">
<title>yAxis</title>
<ellipse fill="none" stroke="#000000" cx="350.7275" cy="-188.1142" rx="34.2084" ry="18"/>
<text text-anchor="middle" x="350.7275" y="-183.9142" font-family="Times,serif" font-size="14.00" fill="#000000">yAxis</text>
</g>
<!-- d3&#45;&gt;yAxis -->
<g id="edge31" class="edge">
<title>d3-&gt;yAxis</title>
<path fill="none" stroke="#000000" d="M161.6087,-223.8485C173.6379,-203.7282 196.587,-171.5285 226.6234,-158.1142 256.7268,-144.6701 293.7422,-156.9745 319.4765,-169.6461"/>
<polygon fill="#000000" stroke="#000000" points="317.9252,-172.7842 328.4134,-174.2841 321.1498,-166.5711 317.9252,-172.7842"/>
</g>
<!-- line -->
<g id="node7" class="node">
<title>line</title>
<ellipse fill="none" stroke="#000000" cx="350.7275" cy="-280.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="350.7275" y="-275.9142" font-family="Times,serif" font-size="14.00" fill="#000000">line</text>
</g>
<!-- d3&#45;&gt;line -->
<g id="edge33" class="edge">
<title>d3-&gt;line</title>
<path fill="none" stroke="#000000" d="M178.1824,-246.2128C213.1032,-253.074 275.378,-265.3097 314.7893,-273.0532"/>
<polygon fill="#000000" stroke="#000000" points="314.2842,-276.5207 324.7714,-275.0144 315.6338,-269.6521 314.2842,-276.5207"/>
</g>
<!-- x -->
<g id="node8" class="node">
<title>x</title>
<ellipse fill="none" stroke="#000000" cx="253.6234" cy="-386.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="253.6234" y="-381.9142" font-family="Times,serif" font-size="14.00" fill="#000000">x</text>
</g>
<!-- d3&#45;&gt;x -->
<g id="edge18" class="edge">
<title>d3-&gt;x</title>
<path fill="none" stroke="#000000" d="M163.6664,-257.4657C181.3137,-282.7033 215.3158,-331.3301 236.0872,-361.0355"/>
<polygon fill="#000000" stroke="#000000" points="233.4771,-363.4105 242.0759,-369.6 239.2137,-359.3991 233.4771,-363.4105"/>
</g>
<!-- y -->
<g id="node12" class="node">
<title>y</title>
<ellipse fill="none" stroke="#000000" cx="253.6234" cy="-218.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="253.6234" y="-213.9142" font-family="Times,serif" font-size="14.00" fill="#000000">y</text>
</g>
<!-- d3&#45;&gt;y -->
<g id="edge22" class="edge">
<title>d3-&gt;y</title>
<path fill="none" stroke="#000000" d="M177.8178,-235.3104C190.0658,-232.532 204.93,-229.1601 218.2401,-226.1408"/>
<polygon fill="#000000" stroke="#000000" points="219.0685,-229.5419 228.0464,-223.9162 217.5199,-222.7153 219.0685,-229.5419"/>
</g>
<!-- xAxis -->
<g id="node17" class="node">
<title>xAxis</title>
<ellipse fill="none" stroke="#000000" cx="350.7275" cy="-432.1142" rx="34.2084" ry="18"/>
<text text-anchor="middle" x="350.7275" y="-427.9142" font-family="Times,serif" font-size="14.00" fill="#000000">xAxis</text>
</g>
<!-- d3&#45;&gt;xAxis -->
<g id="edge27" class="edge">
<title>d3-&gt;xAxis</title>
<path fill="none" stroke="#000000" d="M168.7496,-255.6968C193.4911,-277.6737 241.4544,-320.7942 280.6234,-359.1142 297.0497,-375.1845 314.9887,-393.887 328.6079,-408.3383"/>
<polygon fill="#000000" stroke="#000000" points="326.2967,-410.9901 335.6926,-415.8857 331.4004,-406.1992 326.2967,-410.9901"/>
</g>
<!-- width -->
<g id="node3" class="node">
<title>width</title>
<ellipse fill="none" stroke="#000000" cx="152.2326" cy="-508.1142" rx="33.0643" ry="18"/>
<text text-anchor="middle" x="152.2326" y="-503.9142" font-family="Times,serif" font-size="14.00" fill="#000000">width</text>
</g>
<!-- width&#45;&gt;chart -->
<g id="edge2" class="edge">
<title>width-&gt;chart</title>
<path fill="none" stroke="#000000" d="M183.0523,-514.9285C231.8456,-523.7814 327.2387,-532.9498 384.8315,-485.1142 415.7513,-459.4328 438.0564,-340.5863 446.9306,-285.4067"/>
<polygon fill="#000000" stroke="#000000" points="450.4292,-285.6884 448.525,-275.2661 443.5142,-284.6011 450.4292,-285.6884"/>
</g>
<!-- width&#45;&gt;x -->
<g id="edge21" class="edge">
<title>width-&gt;x</title>
<path fill="none" stroke="#000000" d="M174.4717,-494.5709C180.076,-490.6132 185.8502,-486.0199 190.6234,-481.1142 210.7583,-460.4207 228.405,-432.459 239.86,-412.2343"/>
<polygon fill="#000000" stroke="#000000" points="243.0426,-413.7115 244.8218,-403.2671 236.9178,-410.3224 243.0426,-413.7115"/>
</g>
<!-- height -->
<g id="node4" class="node">
<title>height</title>
<ellipse fill="none" stroke="#000000" cx="152.2326" cy="-454.1142" rx="35.3528" ry="18"/>
<text text-anchor="middle" x="152.2326" y="-449.9142" font-family="Times,serif" font-size="14.00" fill="#000000">height</text>
</g>
<!-- height&#45;&gt;chart -->
<g id="edge3" class="edge">
<title>height-&gt;chart</title>
<path fill="none" stroke="#000000" d="M180.6242,-464.8538C228.0898,-480.7989 324.2995,-504.29 384.8315,-459.1142 413.1395,-437.9877 436.1976,-335.5494 446.0339,-285.1854"/>
<polygon fill="#000000" stroke="#000000" points="449.4881,-285.7561 447.9292,-275.2766 442.6127,-284.4409 449.4881,-285.7561"/>
</g>
<!-- height&#45;&gt;y -->
<g id="edge23" class="edge">
<title>height-&gt;y</title>
<path fill="none" stroke="#000000" d="M160.1072,-436.4869C167.9248,-418.9364 180.213,-391.2115 190.6234,-367.1142 209.0364,-324.493 229.9397,-274.7849 242.4389,-244.9155"/>
<polygon fill="#000000" stroke="#000000" points="245.7115,-246.1616 246.3398,-235.5854 239.2532,-243.4613 245.7115,-246.1616"/>
</g>
<!-- height&#45;&gt;xAxis -->
<g id="edge25" class="edge">
<title>height-&gt;xAxis</title>
<path fill="none" stroke="#000000" d="M187.5036,-453.197C213.3668,-452.2137 249.2871,-450.2005 280.6234,-446.1142 289.9325,-444.9003 299.8607,-443.1815 309.2296,-441.3622"/>
<polygon fill="#000000" stroke="#000000" points="310.0096,-444.7754 319.1204,-439.3676 308.6258,-437.9135 310.0096,-444.7754"/>
</g>
<!-- yAxis&#45;&gt;chart -->
<g id="edge4" class="edge">
<title>yAxis-&gt;chart</title>
<path fill="none" stroke="#000000" d="M371.5389,-202.4111C386.2775,-212.5361 406.2339,-226.2456 422.4811,-237.4069"/>
<polygon fill="#000000" stroke="#000000" points="420.8447,-240.529 431.069,-243.3065 424.8084,-234.7593 420.8447,-240.529"/>
</g>
<!-- data -->
<g id="node6" class="node">
<title>data</title>
<ellipse fill="none" stroke="#000000" cx="152.2326" cy="-562.1142" rx="27.2447" ry="18"/>
<text text-anchor="middle" x="152.2326" y="-557.9142" font-family="Times,serif" font-size="14.00" fill="#000000">data</text>
</g>
<!-- data&#45;&gt;chart -->
<g id="edge5" class="edge">
<title>data-&gt;chart</title>
<path fill="none" stroke="#000000" d="M179.3277,-564.9596C227.45,-568.4085 328.0922,-568.1339 384.8315,-514.1142 417.9679,-482.5661 439.6118,-345.3249 447.6544,-285.3435"/>
<polygon fill="#000000" stroke="#000000" points="451.1264,-285.7846 448.9555,-275.4146 444.1857,-284.875 451.1264,-285.7846"/>
</g>
<!-- data&#45;&gt;x -->
<g id="edge19" class="edge">
<title>data-&gt;x</title>
<path fill="none" stroke="#000000" d="M173.1179,-550.523C179.3598,-546.2988 185.8135,-541.0751 190.6234,-535.1142 220.0961,-498.5891 237.9359,-446.2587 246.7714,-414.3211"/>
<polygon fill="#000000" stroke="#000000" points="250.2422,-414.8876 249.4264,-404.3242 243.4767,-413.0908 250.2422,-414.8876"/>
</g>
<!-- data&#45;&gt;xAxis -->
<g id="edge29" class="edge">
<title>data-&gt;xAxis</title>
<path fill="none" stroke="#000000" d="M171.6266,-549.4126C206.3439,-526.6752 279.3307,-478.874 320.6117,-451.8379"/>
<polygon fill="#000000" stroke="#000000" points="322.711,-454.6469 329.159,-446.24 318.8758,-448.791 322.711,-454.6469"/>
</g>
<!-- line&#45;&gt;chart -->
<g id="edge6" class="edge">
<title>line-&gt;chart</title>
<path fill="none" stroke="#000000" d="M376.3328,-274.2509C387.4122,-271.7138 400.6151,-268.6904 412.8245,-265.8946"/>
<polygon fill="#000000" stroke="#000000" points="413.8119,-269.2592 422.7783,-263.6153 412.2494,-262.4358 413.8119,-269.2592"/>
</g>
<!-- x&#45;&gt;chart -->
<g id="edge7" class="edge">
<title>x-&gt;chart</title>
<path fill="none" stroke="#000000" d="M280.8058,-385.0998C309.074,-382.8396 353.4952,-375.7876 384.8315,-354.1142 410.118,-336.6251 428.6215,-306.1131 439.5654,-283.971"/>
<polygon fill="#000000" stroke="#000000" points="442.8103,-285.2964 443.9247,-274.7604 436.4831,-282.3018 442.8103,-285.2964"/>
</g>
<!-- x&#45;&gt;line -->
<g id="edge34" class="edge">
<title>x-&gt;line</title>
<path fill="none" stroke="#000000" d="M267.9514,-370.4736C284.1591,-352.7811 310.7194,-323.7875 329.3729,-303.4251"/>
<polygon fill="#000000" stroke="#000000" points="332.1665,-305.557 336.3406,-295.8191 327.0049,-300.8286 332.1665,-305.557"/>
</g>
<!-- x&#45;&gt;xAxis -->
<g id="edge28" class="edge">
<title>x-&gt;xAxis</title>
<path fill="none" stroke="#000000" d="M275.6578,-396.5523C287.455,-402.1409 302.2653,-409.1568 315.6069,-415.477"/>
<polygon fill="#000000" stroke="#000000" points="314.4624,-418.8076 324.9981,-419.9257 317.4592,-412.4815 314.4624,-418.8076"/>
</g>
<!-- pi -->
<g id="node9" class="node">
<title>pi</title>
<ellipse fill="none" stroke="#000000" cx="253.6234" cy="-34.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="253.6234" y="-29.9142" font-family="Times,serif" font-size="14.00" fill="#000000">pi</text>
</g>
<!-- pi&#45;&gt;chart -->
<g id="edge8" class="edge">
<title>pi-&gt;chart</title>
<path fill="none" stroke="#000000" d="M280.0368,-30.3803C309.1167,-27.8163 355.6111,-28.497 384.8315,-53.1142 412.0868,-76.0759 435.6662,-178.7232 445.8327,-229.0759"/>
<polygon fill="#000000" stroke="#000000" points="442.418,-229.8504 447.795,-238.9794 449.2845,-228.4898 442.418,-229.8504"/>
</g>
<!-- xt -->
<g id="node11" class="node">
<title>xt</title>
<ellipse fill="none" stroke="#000000" cx="350.7275" cy="-80.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="350.7275" y="-75.9142" font-family="Times,serif" font-size="14.00" fill="#000000">xt</text>
</g>
<!-- pi&#45;&gt;xt -->
<g id="edge14" class="edge">
<title>pi-&gt;xt</title>
<path fill="none" stroke="#000000" d="M275.6578,-44.5523C288.4789,-50.6259 304.8587,-58.3853 319.0444,-65.1054"/>
<polygon fill="#000000" stroke="#000000" points="317.9084,-68.4401 328.4441,-69.5582 320.9053,-62.114 317.9084,-68.4401"/>
</g>
<!-- margin -->
<g id="node10" class="node">
<title>margin</title>
<ellipse fill="none" stroke="#000000" cx="152.2326" cy="-340.1142" rx="38.2818" ry="18"/>
<text text-anchor="middle" x="152.2326" y="-335.9142" font-family="Times,serif" font-size="14.00" fill="#000000">margin</text>
</g>
<!-- margin&#45;&gt;chart -->
<g id="edge9" class="edge">
<title>margin-&gt;chart</title>
<path fill="none" stroke="#000000" d="M190.8279,-340.4583C238.2735,-339.5924 320.4151,-333.8499 384.8315,-307.1142 400.5243,-300.601 415.8227,-289.4932 427.7661,-279.3991"/>
<polygon fill="#000000" stroke="#000000" points="430.257,-281.8698 435.4623,-272.6418 425.6384,-276.6096 430.257,-281.8698"/>
</g>
<!-- margin&#45;&gt;yAxis -->
<g id="edge30" class="edge">
<title>margin-&gt;yAxis</title>
<path fill="none" stroke="#000000" d="M161.96,-322.4958C169.8818,-308.0012 181.2483,-286.8669 190.6234,-268.1142 207.5165,-234.3239 194.9992,-211.7799 226.6234,-191.1142 250.9126,-175.2419 283.9775,-175.2342 309.8704,-178.7946"/>
<polygon fill="#000000" stroke="#000000" points="309.3389,-182.254 319.7653,-180.3724 310.4411,-175.3414 309.3389,-182.254"/>
</g>
<!-- margin&#45;&gt;x -->
<g id="edge20" class="edge">
<title>margin-&gt;x</title>
<path fill="none" stroke="#000000" d="M179.9381,-352.6839C192.8657,-358.5491 208.3238,-365.5622 221.7355,-371.647"/>
<polygon fill="#000000" stroke="#000000" points="220.5216,-374.9396 231.0743,-375.8839 223.4138,-368.565 220.5216,-374.9396"/>
</g>
<!-- margin&#45;&gt;y -->
<g id="edge24" class="edge">
<title>margin-&gt;y</title>
<path fill="none" stroke="#000000" d="M166.3306,-323.1507C183.8533,-302.0663 213.8666,-265.9523 233.7262,-242.0559"/>
<polygon fill="#000000" stroke="#000000" points="236.5903,-244.0855 240.2902,-234.1577 231.2068,-239.6114 236.5903,-244.0855"/>
</g>
<!-- margin&#45;&gt;xAxis -->
<g id="edge26" class="edge">
<title>margin-&gt;xAxis</title>
<path fill="none" stroke="#000000" d="M164.5992,-357.4261C177.8639,-374.5658 200.5703,-400.0782 226.6234,-413.1142 251.1844,-425.4037 281.6322,-430.1985 306.2221,-431.899"/>
<polygon fill="#000000" stroke="#000000" points="306.1923,-435.4025 316.3678,-432.4512 306.5728,-428.4128 306.1923,-435.4025"/>
</g>
<!-- xt&#45;&gt;chart -->
<g id="edge10" class="edge">
<title>xt-&gt;chart</title>
<path fill="none" stroke="#000000" d="M370.2566,-92.947C375.4624,-97.0267 380.7635,-101.8593 384.8315,-107.1142 413.9594,-144.7411 433.3264,-197.161 443.2641,-229.0278"/>
<polygon fill="#000000" stroke="#000000" points="440.0326,-230.4341 446.2733,-238.9959 446.7339,-228.411 440.0326,-230.4341"/>
</g>
<!-- y&#45;&gt;chart -->
<g id="edge11" class="edge">
<title>y-&gt;chart</title>
<path fill="none" stroke="#000000" d="M279.8559,-223.2931C313.7689,-229.9884 373.109,-241.7035 412.2747,-249.4357"/>
<polygon fill="#000000" stroke="#000000" points="411.77,-252.9036 422.2586,-251.4068 413.1259,-246.0361 411.77,-252.9036"/>
</g>
<!-- y&#45;&gt;yAxis -->
<g id="edge32" class="edge">
<title>y-&gt;yAxis</title>
<path fill="none" stroke="#000000" d="M278.1269,-210.544C288.2084,-207.4293 300.1407,-203.7429 311.3882,-200.268"/>
<polygon fill="#000000" stroke="#000000" points="312.5111,-203.5844 321.0324,-197.2884 310.4448,-196.8963 312.5111,-203.5844"/>
</g>
<!-- y&#45;&gt;line -->
<g id="edge35" class="edge">
<title>y-&gt;line</title>
<path fill="none" stroke="#000000" d="M273.2739,-230.6609C287.357,-239.6528 306.5409,-251.9016 322.2928,-261.959"/>
<polygon fill="#000000" stroke="#000000" points="320.7942,-265.1547 331.1062,-267.5863 324.5613,-259.2547 320.7942,-265.1547"/>
</g>
<!-- yt -->
<g id="node13" class="node">
<title>yt</title>
<ellipse fill="none" stroke="#000000" cx="350.7275" cy="-134.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="350.7275" y="-129.9142" font-family="Times,serif" font-size="14.00" fill="#000000">yt</text>
</g>
<!-- yt&#45;&gt;chart -->
<g id="edge12" class="edge">
<title>yt-&gt;chart</title>
<path fill="none" stroke="#000000" d="M369.2878,-147.1933C374.5895,-151.3453 380.1843,-156.1547 384.8315,-161.1142 405.1324,-182.7793 423.9304,-211.1011 436.2929,-231.3576"/>
<polygon fill="#000000" stroke="#000000" points="433.3576,-233.2683 441.5025,-240.0442 439.3608,-229.668 433.3576,-233.2683"/>
</g>
<!-- t -->
<g id="node14" class="node">
<title>t</title>
<ellipse fill="none" stroke="#000000" cx="253.6234" cy="-88.1142" rx="27" ry="18"/>
<text text-anchor="middle" x="253.6234" y="-83.9142" font-family="Times,serif" font-size="14.00" fill="#000000">t</text>
</g>
<!-- t&#45;&gt;xt -->
<g id="edge13" class="edge">
<title>t-&gt;xt</title>
<path fill="none" stroke="#000000" d="M280.6723,-85.8858C290.8787,-85.0449 302.6739,-84.0732 313.6412,-83.1696"/>
<polygon fill="#000000" stroke="#000000" points="314.1448,-86.6401 323.8236,-82.3307 313.57,-79.6637 314.1448,-86.6401"/>
</g>
<!-- t&#45;&gt;yt -->
<g id="edge15" class="edge">
<title>t-&gt;yt</title>
<path fill="none" stroke="#000000" d="M275.6578,-98.5523C288.4789,-104.6259 304.8587,-112.3853 319.0444,-119.1054"/>
<polygon fill="#000000" stroke="#000000" points="317.9084,-122.4401 328.4441,-123.5582 320.9053,-116.114 317.9084,-122.4401"/>
</g>
<!-- require -->
<g id="node15" class="node">
<title>require</title>
<ellipse fill="none" stroke="#000000" cx="38.9209" cy="-241.1142" rx="38.2607" ry="18"/>
<text text-anchor="middle" x="38.9209" y="-236.9142" font-family="Times,serif" font-size="14.00" fill="#000000">require</text>
</g>
<!-- require&#45;&gt;d3 -->
<g id="edge16" class="edge">
<title>require-&gt;d3</title>
<path fill="none" stroke="#000000" d="M77.5995,-241.1142C89.6987,-241.1142 103.0182,-241.1142 115.0146,-241.1142"/>
<polygon fill="#000000" stroke="#000000" points="115.1525,-244.6143 125.1524,-241.1142 115.1524,-237.6143 115.1525,-244.6143"/>
</g>
<!-- thedata -->
<g id="node16" class="node">
<title>thedata</title>
<ellipse fill="none" stroke="#000000" cx="38.9209" cy="-562.1142" rx="38.842" ry="18"/>
<text text-anchor="middle" x="38.9209" y="-557.9142" font-family="Times,serif" font-size="14.00" fill="#000000">thedata</text>
</g>
<!-- thedata&#45;&gt;data -->
<g id="edge17" class="edge">
<title>thedata-&gt;data</title>
<path fill="none" stroke="#000000" d="M77.9164,-562.1142C89.8987,-562.1142 103.052,-562.1142 114.9188,-562.1142"/>
<polygon fill="#000000" stroke="#000000" points="114.9543,-565.6143 124.9542,-562.1142 114.9542,-558.6143 114.9543,-565.6143"/>
</g>
</g>
</svg>

## Notes
I unsuccessfully tried to convert this script from observable notebook to vanilla JS. In particular, I couldn't figure out the equivelent of a generator. Sure I can for and while loops in vanilla JS, but when executed it wouldnt' show any results until the script finishes execution, which is *never*. 

## References
* [Discussion on conversion to vanilla JS](https://talk.observablehq.com/t/notebook-to-vanilla-javascript-steps/1644/2)
* [Visualizer](https://observablehq.com/@mbostock/notebook-visualizer)
* [How observable notebooks run](https://observablehq.com/@observablehq/how-observable-runs)
* [Downnloading and embedding notebooks](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks)