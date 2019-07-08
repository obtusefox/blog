---
title:  "What is Hoare Logic?"
date:   2019-05-02 11:14:00
description: Introduction on Hoare Logic
categories: 
 - Concepts in Programming Language Theory
tags: [SF, PL, Coq]
---

# Hoare Logic
Let's begin from [a Wikipedia article](https://en.wikipedia.org/wiki/Hoare_logic).

```text
Hoare logic (also known as Floyd–Hoare logic or Hoare rules) is a formal system with a set of logical rules for reasoning rigorously about the correctness of computer programs.
```

And note that 'Hoare' is pronounced like "ho-er." It's usually understood by the Hoare triple, somethi like `{P}C{Q}`. Why is it "Triple"? Because it is composed of three parts.

Assertions
P: Precondition
Q: Postcondition

Command
C: Command

That is, when P is met, after C, Q is met. Of course, this is not that precise definition, but this rough sketch explains a lot. We will go deeper, but let's start with just this small understanding.

## Rules
(Also mostly from the wikipedia article)

### Empty statement axiom schema
If C is empty(or, just skipping any commands), the precondition will be preserved after C. Yes, this is natural.

### Assignment axiom schema
