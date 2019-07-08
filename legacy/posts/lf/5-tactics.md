---
title:  "5. Tactics: 추가적인 증명의 기술들"
date:   2018-07-16 12:07:40
description: Coq에서 Tactics들을
categories: 개발
tags: [SF, Software_Foundations, Coq]
---
# Tactics: 추가적인 증명의 기술들

## apply

다음과 같은 코드가 있다.

```ocaml
Theorem silly1 : forall (n m o p : nat),
     n = m  ->
     [n;o] = [n;p] ->
     [n;o] = [m;p].
Proof.
  intros n m o p eq1 eq2.
  rewrite <- eq1.
```

그리고 이제 우리는

```ocaml
rewrite -> eq2.
reflexivity.
```

를 통해 증명을 마칠 수도 있다. 하지만, 그 대신

```ocaml
apply eq2
```

를 적용하여 rewrite와 reflexivity를 대신할 수 있다. `apply는 조건문과도 함께 쓰일 수 있다. 적용되는 주장이 한 전제의 귀결인 경우, 전제는 증명될 subgoal들에 포함될 것이다.

```ocaml
Theorem silly2 : forall (n m o p : nat),
     n = m  ->
     (forall (q r : nat), q = r -> [q;o] = [r;p]) ->
     [n;o] = [m;p].
Proof.
  intros n m o p eq1 eq2.
  apply eq2. apply eq1.  Qed.
```

또한 가설 H를 `apply`한다면 `forall`에 따라 어떤 변수를 양화한다.

```ocaml
Theorem silly3_firsttry : forall (n : nat),
     true = beq_nat n 5  ->
     beq_nat (S (S n)) 7 = true.
Proof.
  intros n H.
(** Here we cannot use [apply] directly, but we can use the [symmetry] tactic, which switches the left and right sides of an equality in the goal. *)
  symmetry.
  simpl. (** (This [simpl] is optional, since [apply] will perform simplification first, if needed.) *)
  apply H.  Qed.
```

바로 `apply`를 쓸 수 없는 경우, `symmetry`를 이용해 양변을 바꿀 수 있다. 혹은, `apply with`로, 적용하는 Theorem이나 Lemma의 특정 변수를 우리가 원하는 값이나 변수로 대체할 수 있다. 

```ocaml
Theorem trans_eq : forall (X:Type) (n m o : X),
  n = m -> m = o -> n = o.
Proof.
  intros X n m o eq1 eq2. rewrite -> eq1. rewrite -> eq2.
  reflexivity.  Qed.
```

예를 들어 trans_eq는 transitivity를 증명한다. 이 정리를 적용하여 한 사례를 증명해보도록 하자.

```ocaml
Example trans_eq_example' : forall (a b c d e f : nat),
     [a;b] = [c;d] ->
     [c;d] = [e;f] ->
     [a;b] = [e;f].
Proof.
  intros a b c d e f eq1 eq2.
  apply trans_eq with (m:=[c;d]).
  apply eq1. apply eq2.   Qed.
```

이 경우, `apply`가 자동으로, `trans_eq`의 `type X`를 `nat`으로, `n`을 `[a;b]`로, `o`를 `[e;f]`로 양화한다. 그러나 `m`에 대해서는 양화를 하지 못한다. 따라서 이를 우리가 `with`로 지정해야 한다. 사실 어떤 경우에 적용이 되고, 어떤 경우에 적용되지 않는지는 모르겠다. [Coq의 공식 문서](https://coq.inria.fr/refman/proof-engine/tactics.html#coq:tacn.apply)를 참고.

## inversion
