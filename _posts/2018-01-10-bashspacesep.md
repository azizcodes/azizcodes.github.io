---
layout: post
title: "Bash: chatGPT Contributions"
date: 2018-09-01
categories: jekyll update
---

This blog is so obsolte. Here is the solution to the problem in the last two posts from chatGPT:

``` bash
#!/bin/bash

read -p "Enter a sentence: " sentence

for (( i=0; i<${#sentence}; i++ )); do
    echo -n "${sentence:$i:1} "
done

echo ""
```
Let's call this script `basharrays2.sh`. Here is the result of running it:

``` bash
$ bash basharrays2.sh 
Enter a sentence: know thyself
k n o w   t h y s e l f 
```

# Recognize the Platform in Bash

``` bash
#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "You're on a Linux platform."
elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo "You're on a Mac platform."
elif [[ "$OSTYPE" == "cygwin" ]]; then
    echo "You're on a Windows/Cygwin platform."
elif [[ "$OSTYPE" == "msys" ]]; then
    echo "You're on a Windows/MSYS platform."
elif [[ "$OSTYPE" == "win32" ]]; then
    echo "You're on a Windows platform."
else
    echo "Platform not recognized."
fi
```

# Null Characters

``` bash
while read line; do echo hi  how are you; done <  <(find . -maxdepth 1 -name '*png' -print0 | xargs --null ls -1)
```


