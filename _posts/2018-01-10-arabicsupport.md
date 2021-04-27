---
layout: post
title: "Arabic language support دعم اللغة العربية"
date: 2018-07-21
categories: linux jekyll update
---

In this post, I show how to render Arabic text correctly, from a text editor to the web.


# Arabic in HTML

Template for Arabic documents.

<div lang="ar" dir="rtl">

<h1>ديباجة الـ HTML العربية</h1>

</div>

``` html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
        <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width" />
                <title>:</title>
        </head>
        <body>
	write your html here  
        </body>
</html>
```

For parts of documents, such as this HTML page, you can use this on `<div>` elements.

``` html
<div lang="ar" dir="rtl"></div>
```

# Arabic in Unicode

This is better explained with an Arabic text.

<div lang="ar" dir="rtl">

<h1>دعم اللغة العربية في اليونيكود</h1>

<p>لنأخذ برنامج محرر النصوص الايماكس على سبيل المثال، و الذي يتبع معايير اليونيكود (مثل معظم البرامج) بالنسبة للغة العربية. في هذا المثال، لغة النظام انجليزية و لغة الايماكس عربية، حتى نتمكن من استخدام اختصارات الايماكس.</p>

<p>لو أردنا كتابة مفردة انجليزية بجوار النص العربي، مثل heart، ببساطة نغير اللغة داخل الايماكس الى الانجليزية بواسطة الضغط على <code>C-\</code>. هل ترى؟ لم يتم عرض ربط المفتاح بشكل صحيح. هي أشياء لا ترى! تابع القراءة.</p>

<p>لو أخذنا معادلة رياضية مثلًا: 1 + 2 + 3 = 6 (بدون تغيير المفتاح، لا مشاكل). نأخذ نفس المعادلة مرة أخرى لكن دون مسافات 1+2+3=6 (لا توجد مشاكل مرة أخرى).</p>

<p> بدأت أفهم المشكلة. حين كتابة الأقواس أحتاج إلى تغيير لغة النظام إلى العربية، لأن تغيير اللغة داخل البرنامج لا ينطبق على الأقواس!</p>

<p>لنجرب ذلك مع <code>C-\</code>.. لم يتغير شي!!!</p>

<p>طيب ماذا لو قلنا 555555555 966+. جميل، لاحظ أن وضع علامة <code>+</code> جاء بعد كتابة الأرقام، كأنه عملية رياضية كما سبق.</p>

<p>نكتب رقم جوال داخل نص بنفس هذا المنطق، مثل 0555555555 أو 5555-55-0555 أو 5555-55-555 966+. لإضافة أقواس، نتأكذ أن لغة النظام عربية أولًا،  5555-55-55(05) (966+).</p>

<p>بقي أن نكتب <code>\-C</code> داخل نص عربي. كيف كتبت ذلك؟ نعامل علامة <code>-</code> كأنها علامة ناقص، فنكتب <code>\</code> أولًا.</p>

<h2>الخلاصة:</h2>

<ul>
<li>التعامل مع علامات <code>+</code> <code>-</code> الخ بنفس الترتيب المتبع مع العمليات الرياضية.</li>
<li>تغيير لغة النظام إلى العربية، حتى يتمكن من عرض الأقواس بشكل صحيح.</li>
</ul>
	  
</div>


# Arabic in ُemacs

## Right to left text

You can [set variables in emacs](https://ftp.gnu.org/old-gnu/Manuals/emacs-20.7/html_chapter/emacs_35.html) using

```
M-x set-variable RET var RET value RET
```

Arabic language is [bidirectional](https://www.gnu.org/software/emacs/manual/html_node/elisp/Bidirectional-Display.html). To set the text direction that arabic uses, change the value of the *variable* `bidi-paragraph-direction` to the *value* `right-to-left` in accordance to the syntax above.


# Arabic in Markdown

Use [Write Markdown in Arabic](https://github.com/ahmadajmi/markdown-arabic) to write in markdown and convert the output to html.
