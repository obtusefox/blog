---
layout: post
title:  "Hardware System Design 1 : Verilog Basics"
date:   2019-03-19 09:00:00
img: 
description: Verilog Basics
categories: Computer Science
tags: [Computer Science, Verilog]
---
 
# Verilog의 기초
For example, in the case of MV multiplication, two PE (Processing Element)s, deal with multiplication. So, we can do two multiplication at a time. When we are blocking, we need some communication between different components; if new elements are added, we need to notify the PE.

There's a gap between our software design and real implementation. So, we have simulations and test benchmarks. Not like our course, real implementation takes about a year.

## Number Representation

There are special values, x and z. `x` means that the bit is unknown. `z` means that we don't know the physical state of the bit.

We also have a special variable, time.

Also, [0:7] and [7:0] are different.

```verilog
wire [7:0]  x[3:0];     
```

means that x has 4 elements and each element has 8 bits.

Two types of operators: synthesizable, not synthesizable.
Difficult operators require high costs.

## Initial Block
In the initial block, we have variable declaration, 

## Blocking Assignments
We can assign

Asynchronous flip-flop.
