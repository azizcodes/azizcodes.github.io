---
layout: post
title:  "Tesseract (OCR), and Pandoc"
date:   2018-03-28
categories: jekyll update
---
## Tesseract (OCR)
An easy way to OCR from a PDF

```
convert -density 300 file.pdf -depth 8 file.tiff 
tesseract file.tiff output
```
Where `convert` is an `image magick` command for converting the image into TIFF, and `tesseract` is a well-known Google open-source project. Thanks to [this post](http://kiirani.com/2013/03/22/tesseract-pdf.html).


### Troubleshooting
If the TIFF image has an [alpha channel](https://stackoverflow.com/questions/5083492/tesseract-and-tiff-format-spp-not-in-set-1-3):

```
convert -density 300 source.pdf -depth 8 file.tiff
convert file.tiff -fill white -draw 'rectangle 10,10 20,20' -background white -flatten +matte output.tiff
convert file.tiff -fill white -draw 'rectangle 10,10 20,20' -background white +matte output.tiff
tesseract output.tiff output
```

## Pandoc
`pandoc` can convert from any document format to any other document format. Say from markdown to pdf:

```
pandoc -s text.md -o output.pdf
```
Can't wait to have it on Termux but unfortunately it's not available there yet. I use groff for text to pdf conversion.

