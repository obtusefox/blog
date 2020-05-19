---
title: Possible Memory Problems
date: 2020-05-16 11:05:98
category: arch-security
---

use after free
null pointer dereference
using uninitialized memory
double free
buffer overflow

Memory Vulnerabilities
The main consequences of memory vulnerabilities include:

Crash: accessing invalid memory can make applications terminate unexpectedly
Information leakage: inadvertently exposing non-public data, including sensitive information like passwords
Arbitrary code execution (ACE): allows an attacker to execute arbitrary commands on a target machine; when this is possible over a network, we call it a remote code execution (RCE)


###### Reference
http://www.pl-enthusiast.net/2014/07/21/memory-safety/
https://hacks.mozilla.org/2019/01/fearless-security-memory-safety/