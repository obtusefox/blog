---
title:  "PLF 1. Equiv"
date:   2019-03-22 23:34:00
description: Basic Theories about Equivalences of Programs
categories: 
 - Programming Language Foundations
tags: [SF, PL, Coq]
---

# Equivalence of Programs
Before you move on: If you are not familiar with `Imp` in the **Logical Foundations** volume, you might want to review it.

In this beginning chapter of **Programming Language Foundations**, we will first deal with equivalences of programs. That is, if two programs, given same states, evaluates to same values, they can be said to be equivalent. W will use the simple language `Imp` we defined in the **Logical Foundations** volume.

## Definitions

### Equivalence

```ocaml
Definition aequiv (a1 a2 : aexp) : Prop :=
  forall (st : state),
    aeval st a1 = aeval st a2.

Definition bequiv (b1 b2 : bexp) : Prop :=
  forall (st : state),
    beval st b1 = beval st b2.
```
Given the same states, if two expressions are evaluated to a same value, they can be said to be equivalent. Let's prove some small facts about equivalence.

```ocaml
Theorem aequiv_example: aequiv (X - X) 0.
Proof.
  intros st. simpl. omega.
Qed.

Theorem bequiv_example: bequiv (X - X = 0)%imp true.
Proof.
  intros st. unfold beval.
  rewrite aequiv_example. reflexivity.
Qed.
```

Now, let's move on to some other trivial theorems.

```ocaml
Theorem skip_left : forall c,
  cequiv
    (SKIP;; c)
    c.
Proof.
  (* WORKED IN CLASS *)
  intros c st st'.
  split; intros H.
  - (* -> *)
    inversion H; subst.
    inversion H2. subst.
    assumption.
  - (* <- *)
    apply E_Seq with st.
    apply E_Skip.
    assumption.
Qed.
```
Proof for the theorem isn't that complex. One thing you might noticed is that just using `intros` will not introduce st and st'. But as soon as you split, st and st' will be automatically introduced. Introducing st and st` explicitly will make it easier to follow our own thesis. 

Also, just using `inversion` for every case won't work, as they will yields too many subcases and it will only complicate the problem more. You should think before proceed.

[ Not Finished ]