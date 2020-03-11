---
layout: post
title:  "Downloading Youtubes"
date:   2018-03-15
categories: jekyll update
---
Speaking of [shell scripts]({% post_url 2018-01-10-shellscriptsandfunctions %}). Wanna download youtubes easily? Download [youtube-dl](https://rg3.github.io/youtube-dl/) and a converter such as ffmpeg (using `pkg install` or `brew install` etc). Then add the following to your bash profile

``` bash
ytdl(){
	cd /sdcard/Music/
	youtube-dl $1 -x --audio-format "mp3"

}
```

Then download like this

```
ytdl https://youtu.be/pJNDW5bLqx8
```
Assuming you are using Termux (Android) and want to download it to music folder as mp3. Or check out [the other file options](https://github.com/rg3/youtube-dl/blob/master/README.md#readme).
