---
layout: post
title:  "Python packages"
date:   2018-07-13
categories: jekyll update
---

# Where does Python install its packages?

So I installed oh-my-zsh on my laptop, and for some reason my Python scripts that were installed with `pip` stopped working. This includes modules such as `tldr`, `tqdm`, `tabview` etc.

Not only that, but `pip` itself wasn't working unless it was issued as

```
python3 -m pip install module
```
I have completely restarted my Linux experience on this laptop after upgrading to WSL 2 and installing the Windows terminal. So, first I had to install pip with

```
sudo apt install python3-pip
```

Now, when I install the above modules, I can see that they install under

```
/home/azizcodes/.local/lib/python3.8/site-packages
```

and I am able to import them using the `import` command from within Python. However, I still couldn't run the scripts. I thought of, maybe reinstall it?

```
pip3 uninstall tldr
Found existing installation: tldr 1.2.0
Uninstalling tldr-1.2.0:
  Would remove:
    /home/azizcodes/.local/bin/tldr
    /home/azizcodes/.local/lib/python3.8/site-packages/tldr-1.2.0.dist-info/*
    /home/azizcodes/.local/lib/python3.8/site-packages/tldr.py
Proceed (y/n)?
```

That's a place I didn't look in, `/home/azizcodes/.local/bin/tldr`. Turns out this is the location Python has been downloading the *scripts* to, but it is not in the path of either  of my `bash` or `zsh`. Going to `~/.bashrc` or `~/.zshrc` and adding the following

```
export PATH=$PATH:/home/azizcodes/.local/bin
```

fixes the issue.

Note: This is is a common problem when installing different versions from the same program. When in doubt, uninstall completely and reinstall will save you a lot of time.
