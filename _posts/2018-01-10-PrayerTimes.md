---
layout: post
title:  "Scraping 101: Prayer Times"
date:   2018-01-06
categories: jekyll update
---
# Prayer Times
A quick access to prayer times. Put this in your [Termux]({% post_url 2018-01-10-Termux %})


## P1

Add the following alias to .bashrc 

```
alias p1="curl https://www.islamicfinder.org/|grep '[0-9]\{2\}:[0-9]\{2\} .M'"
```

They type `p1` in the command line.


## P2 = prayertimes.py

This script is not as fast as `p1` but its output is better looking and systematic. You can download this script from [this repository](https://github.com/brownsugr/otherscripts) and run it through

```
python prayertimes.py
```
Then add an `alias P2 = python prayertimes.py`.

### Prerequisites

This python script requires the following modules (available through pip)

1. [requests](http://docs.python-requests.org/en/master/) - `pip install requests`
2. [beautiful soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - `pip install bs4`

See [this tutorial on youtube](https://www.youtube.com/watch?v=3xQTJi2tqgk) to learn more about the usage of these two modules.

## P3
Add the following alias to .bashrc (it is a clean up of the output of p1 by using SED)

```
alias p3="curl https://www.islamicfinder.org/|grep '[0-9]\{2\}:[0-9]\{2\} .M'|sed 's/<span class="todayPrayerTime">//'|sed 's/<span class=\"todayPrayerTime\">//'|sed 's/<\/span>//'"
```
Then type `p3` in the command line
