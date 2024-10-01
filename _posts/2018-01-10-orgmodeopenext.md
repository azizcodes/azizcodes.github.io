---
layout: post
title: "Opening External Files in Org"
date: 2018-09-19
categories: linux jekyll update
---

Usually at work, I would like to be able to access PDFs and Word documents through clickable links in my Org Mode text files.

By default, Emacs opens PDFs and Word files within itself as text files, we want to change that behavior to use whatever the system uses as default program for these file types. The variable `org-file-apps` controls which program emacs uses to open files.

Click `C-h v org-file-apps` to modify this variable, and do the following changes:

```
("\\.pdf\\'" . system)
("\\.docx\\'" . default)
```

Next, you can get the link to the document by right-clicking it to create a shortcut, then go on its properties and copy the `Target` field. What you have is a link of the form 

```
"C:\whatever\"
```

Which we want to convert to 

```
[[C:/whatever/]]
```

The following function replaces backslashes `\`  with forward ones, strips it of quotes, prepend it with `[[` and append it with `]]`. You can add to your `.emacs`, optionally with the keybinding below it

``` elisp
(defun aziz-org-link-from-path (pth)
  (interactive "*sWindows path:")
  (insert
   (replace-regexp-in-string "$" "]]"
     (replace-regexp-in-string "^" "[["
       (replace-regexp-in-string "\"" ""
		 (replace-regexp-in-string "\\\\" "/" pth)
	    )
	  )
    )
  )
)


(global-set-key (kbd "C-c p") 'aziz-org-link-from-path)
```
Now you can click `C-c p` to add your windows links to your daily checklists.
