---
title:  "Logical Foundations 0. Basic Setting"
date:   2019-03-22 13:17:00
description: Setting the environment for the course book, "Logical Foundations," distributed by Upenn.
categories: 
 - Development
 - Software Foundations
 - Logical Foundations
tags: [SF, Logical_Foundations, Software_Foundations, Coq]
---
# Basic Environment Setting

## Required Files

### Textbook
[Software Foundations Course](https://softwarefoundations.cis.upenn.edu/) provides texts and codes for each courses. You can use the file in the IDE, and run the code on the way. It is recommended to use the code file, as you can check how the codes works on the go. For us, let's begin with the volume 1.

### Coq on Windows
Coq provides binaries for Windows, but I don't recommend using them. For example, you cannot compile using the CoqIDE for Windows. This is one case I faced, but I suspect there to be more problems. Rather, I used WSL and Proof General with Emacs. I will try to provide further instructions on how to install them.

## How to Use the Textbook
After you unzip the course file you've downloaded above, among the files are `Basics.v`. You might want to open the file in CoqIDE or PG (Proof General.) In the file, you can see comments and codes like these:

```
(** To see how this definition mechanism works, let's start with
    a very simple example.  The following declaration tells Coq that
    we are defining a new set of data values -- a _type_. *)

Inductive day : Type :=
  | monday : day
  | tuesday : day
  | wednesday : day
  | thursday : day
  | friday : day
  | saturday : day
  | sunday : day.

```
For CoqIDE, you can run the next block of code with `Ctrl + Down` key combination, and `C + c C + n` combination in PG.

```
day is defined
day_rect is defined
day_ind is defined
day_rec is defined
```
If you run this code block, above message will be displayed. like this, you can read the book and run the code at the same time, and you can delete unnecessary lines while you go on, so that the result would be the essence.