---
title:  "PLF 2. Hoare 1"
date:   2019-03-22 23:34:00
description: Hoare Logic, Part I
category: PLF
tags: [SF, PL, Coq]
---

# Hoare Logic, Part I

In the previous chapters, we've defined `Imp` language, which is pretty simple, yet captures the key features of languages like C, Java, and so on. Additionally, we've proved some basic properties like:

```ocaml
    - determinism of evaluation

    - equivalence of some different ways of writing down the
      definitions (e.g., functional and relational definitions of
      arithmetic expression evaluation)

    - guaranteed termination of certain classes of programs

    - correctness (in the sense of preserving meaning) of a number
      of useful program transformations

    - behavioral equivalence of programs (in the [Equiv]
      chapter). *)
```

We will develop the topic in this, and later chapters. Especially in this chapter, we will work on a reasoning system named **Hoare Logic**. Hoare Logic consists of how to write down the specification of a program, and how to prove their correctness.

## Denoting Assertions

First, we need a way of making assertions about properties. 

```ocaml
Definition Assertion := state -> Prop.
```
So, an assertion takes a state, and outputs corresponding Prop about the state.

```ocaml
Check Assertion.
```
Above command will output `Type`, as an assertion is actually a type.

```ocaml
Definition as1 : Assertion := fun st => st X = 3.
```
`as1` is an assertion, which means that for any state `st`, `X = 3` holds.

```ocaml
Check as1.
```
Above will show that `as1` is an `Assertion`.

```
Check fun (st:state) => st X = 3.
```
will show that `as1` is a function which takes a state and returns a Prop.

So, "Formally, an assertion is just a family of propositions indexed by a [state]." However, the way of writing an assertion like above way is pretty cumbersome. As we are talking about a state in a Prop, we can ommit `st`s. 

```ocaml
  fun st => (st Z) * (st Z) <= m /\
      ~ ((S (st Z)) * (S (st Z)) <= m)
```
will be written as:

```ocaml
Z * Z <= m /\ ~((S Z) * (S Z) <= m).
```

### Some Conventions in the Chapter

In the chapter, certain naming conventions will be used to name many things. For variables, uppercase letters like X, Y, Z will denote Imp variables, while lovercase letters like x, y, m, n will denote ordinary Coq variables.

### Assertions on Implication

```ocaml
Definition assert_implies (P Q : Assertion) : Prop :=
  forall st, P st -> Q st.

Notation "P ->> Q" := (assert_implies P Q)
                      (at level 80) : hoare_spec_scope.
```

Also, `P ->> Q` means that P implies Q, i.e. if P holds in some state st, Q will also holds in st. `hoare_spec_scope` means that the notation will only be used in certain scopes, that is, in this case, `hoare_spec_scope`.

```ocaml
Open Scope hoare_spec_scope.
```
we can open the scope like this, and,

```ocaml
Notation "P <<->> Q" :=
  (P ->> Q /\ Q ->> P) (at level 80) : hoare_spec_scope.
```
will define iff notation.

## Hoare Triple

The behaviour of a command can be thought to be transitioning from one state to another. So, let's say, a command `c` starts in a `st` state and terminates in a final state `st'`. In this manner, `P->>Q` means that if `st` satisfy P, then `st'` will satisfy Q. This is called a **Hoare Triple**. `P` and `Q` is called the precondition and postcondition of `c`, respectively.

```ocaml
Definition hoare_triple
           (P : Assertion) (c : com) (Q : Assertion) : Prop :=
  forall st st',
     st =[ c ]=> st'  ->
     P st  ->
     Q st'.
```
When written formally, it can be interpreted like this: if `st`, with a command `c`, progress to `st'`, if `P` holds for `st`, `Q` holds for `st'`.

```ocaml
Notation "{{ P }}  c  {{ Q }}" :=
  (hoare_triple P c Q) (at level 90, c at next level)
  : hoare_spec_scope.
```
We will use more compact notation above.

[Continued]