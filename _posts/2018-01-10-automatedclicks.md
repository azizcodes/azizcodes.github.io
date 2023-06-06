---
layout: post
title: "JS: Automated clicks"
date: 2018-09-05
categories: jekyll update
---

Some websites allow you to load more data by clicking on a button. e.g. facebook massages or bank transactions. You can automated this process using the following approach. Open your browser console and copy and paste the following (from [this answer](https://stackoverflow.com/questions/62642409/how-do-i-automate-clicking-a-button-in-javascript)):

``` javascript
setInterval(() => {
    document.querySelector('#someId').click()
}, 1000) 
```
The above clicks the button every second. How to make it stop loading? I don't know yet. I just save the page once the needed info is loaded. Selenium is another option but it's more involved.
