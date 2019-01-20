---
title:  "5. Tactics: 추가적인 증명의 기술들"
date:   2018-07-16 12:07:40
description: Coq에서 Tactics들을
categories: 개발
tags: [SF, Software_Foundations, Coq]
---
# Tactics: 추가적인 증명의 기술들

## Tactics

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

또한 가설 H를 `apply`한다면 