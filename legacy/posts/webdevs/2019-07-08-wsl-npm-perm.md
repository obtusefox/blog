---
view: post
layout: post
lang: en
author: han-minhee
title: Fix some EPERM or EACCESS errors in NPM in WSL
description: fix some permission related errors in npm, WSL
excerpt:
cover: false
coverAlt:
demo:
categories:
  - webdev
tags:
  - npm
  - webdev
  - wsl
  - fix
created_at: 2019-07-08 17:34:01
updated_at: 2019-07-08 17:34:01
meta:
---

## Environment

NPM 10 / NPM 12
WSL - Ubuntu 18.04
Windows 1903

Don't know if the error is only present in WSL environment.

## Symptoms

When trying `npm install`, below errors were present:

```bash
npm WARN tar EPERM: operation not permitted, futime
```

or something like

```bash
EACCES: permission denied mkdir ~~
```

When trying with `sudo` previlege, the problem was not 

## Fix

Try below commands:

```bash
mkdir ~/.npm-new  
npm config set prefix '~/.npm-new'  
export PATH=~/.npm-new/bin:$PATH  
source ~/.profile  
```

reference : [Christos Matskas](https://cmatskas.com/resolve-npm-access-denied-errors/)
