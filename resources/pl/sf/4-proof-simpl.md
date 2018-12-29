---
title:  "Basics 4. 간단한 증명"
date:   2018-07-16 12:07:40
description: Coq에서 간단한 증명들을 행해보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---
## 간단한 증명
간단한 증명의 방법을 알아보자.

### 앞서 보았던 Proof
사실 simpl.에 의한 증명은 앞에서 본 바 있다.
```
Example test_mult1: (mult 3 3) = 9.
Proof. simpl. reflexivity. Qed.
```
에서 `simpl`은
```
mult 3 3
```
을 계산하여 9로 단순화하고 `reflexivity`는 양변이 동일한 경우 양변을 소거한다. 그러면 더 이상 증명할 대상이 사라지기에 `Qed`.
우리는 이제 `Example`이 아니라 `Theorem`을 증명하도록 하자. `Example`은 하나의 사례를 다룬다. 그러나 `Theorem`은 일반적인 대상 모두, 말하자면 forall x such that ~에 해당하는 증명을 다룬다. 이것을 Coq에서는 `forall`로 쓴다. 나중에는 `Fact`, `Lemma`, `Remark` 등이 더 등장할 것이다.
```
Theorem plus_O_n : forall n : nat, 0 + n = n.
Proof.
  intros n. simpl. reflexivity.  Qed.
```
사실 `reflexivity`는 생각보다 많은 역할을 하여, `simpl`의 역할까지를 함께 수행할 수 있다. 위의 증명은
```
Theorem plus_O_n : forall n : nat, 0 + n = n.
Proof.
  intros n. reflexivity.  Qed.
```
와 같은 셈. `intros`는 `Theorem`에 나타난 양화사를 해당 문맥에 막게 양화하는 역할을 한다. 이러한 증명의 방법들을 tactic이라 부른다. 나중에 더 많은 tactic들을 보게 될 것. 더 많은 증명의 사례를 보자. 아직은 특별한 tactic이 없기에 어려운 것은 없다.
모든 nat type의 n에 1을 더하면 S n이 된다는 증명
```
Theorem plus_1_l : forall n:nat, 1 + n = S n.
Proof.
  intros n. reflexivity.  Qed.
```
0을 곱하면 0이 된다는 증명. 앞서 말한 것처럼 자동으로 0과 O를 동일시한다.
```
Theorem mult_0_l : forall n:nat, 0 * n = 0.
Proof.
  intros n. reflexivity.  Qed.
```

### rewrite를 써서 전제를 도입하는 증명
이제 보다 복잡한 증명을 보자. 전건 -> 후건의 논리 구조를 따르는 증명이다.
```
Theorem plus_id_example : forall n m:nat,
  n = m ->
  n + n = m + m.
```
n=m인 경우 n+n = m+m이다. 이 경우 전건이 만족되는 n,m에 대하여 후건이 만족된다. 우리는 이를 증명하기 위해 전제(가설)를 도입하고, 이 전제에 맞는 방식으로 식을 다시 `rewrite`할 것이다.

```
Proof.
  (* move both quantifiers into the context: *)
  intros n m.
  (* move the hypothesis into the context: *)
  intros H.
  (* rewrite the goal using the hypothesis: *)
  rewrite -> H.
  reflexivity.  Qed.
```
첫 줄의 `intros n m`으로 증명의 과정에 nat 타입의 n, m을 추가한다. 그리고 두 번째 줄의 `intros H`로, `n=m`이라는 전제 H를 추가한다. 그리고 `rewrite -> H`를 통해 H에 따라 n들을 m으로 고쳐 쓴다. 그럼 양변이 `m+m`으로 동일해지므로, `reflexivity`를 적용하여 증명을 마칠 수 있다.
그 다음 예시에는 이보다 조금 더 복잡한 형태로, 여러 번의 `implies`가 등장한다. 
```
Theorem plus_id_exercise : forall n m o : nat,
  n = m -> m = o -> n + m = m + o.
```
CoqIde의 우상단 창에서, 증명 중에 어떤 전제가 도입되었는지, 어떤 변수들이 양화되었는지를 알 수 있다. n, m, o, 그리고 여러 개의 전제를 intros하면 해결할 수 있다.

### destruct를 써서 case를 나누는 증명
```
Theorem plus_1_neq_0_firsttry : forall n : nat,
  beq_nat (n + 1) 0 = false.
Proof.
  intros n.
  simpl.  (* does nothing! *)
Abort.
```
이 경우 beq_nat가 evaluate되지 않는다. 왜냐하면, beq_nat은 인자로 받는 두 수의 case에 따라 그 반환값이 결정되는데, 이 경우 beq_nat의 인자가 n+1이고 n은 어떤 수인지 알려지지 않았다. 따라서 n의 가능한 두 경우, `O`와 `S n`에 대해 경우를 나누어 증명을 해야 한다. 여기에서 `destruct`를 사용한다.
```
Theorem plus_1_neq_0 : forall n : nat,
  beq_nat (n + 1) 0 = false.
Proof.
  intros n. destruct n as [| n'].
  - reflexivity.
  - reflexivity.   Qed.
```
두 번의 reflexivity는 각각의 case를 증명한다. `[| n']`는 각각의 case에 변수 이름을 지정한다. 인자를 필요로 하는 type의 경우, 그 인자로 입력될 변수명을 지정해주는 것이다. `bullet`이라 하는 `-`기호는 각각의 destruct된 경우, 정확히는 증명에 등장하는 subgoal에 대해 증명을 적용한다. 물론 argument를 받지 않는 inductive type에 대해서도 비슷한 tactic이 가능하다. 예컨대 boolean에 대해서는 true와 false의 case를 나누어 같은 식으로 증명이 진행된다.
```
Theorem negb_involutive : forall b : bool,
  negb (negb b) = b.
Proof.
  intros b. destruct b.
  - reflexivity.
  - reflexivity.  Qed.
```
앞에서 다른 tactic이 그랬듯이, destruct도 여러 단계 적용될 수 있다. 그리고 bullet 대신 `{ ... }`의 괄호를 사용할 수도 있다. 괄호는 한 증명의 시작과 끝을 표시한다.
```
Theorem andb_commutative' : forall b c, andb b c = andb c b.
Proof.
  intros b c. destruct b.
  { destruct c.
    { reflexivity. }
    { reflexivity. } }
  { destruct c.
    { reflexivity. }
    { reflexivity. } }
Qed.

```
그리고 더 많은 단계에 쓰인다면
```
Theorem andb3_exchange :
  forall b c d, andb (andb b c) d = andb (andb b d) c.
Proof.
  intros b c d. destruct b.
  - destruct c.
    { destruct d.
      - reflexivity.
      - reflexivity. }
    { destruct d.
      - reflexivity.
      - reflexivity. }
  - destruct c.
    { destruct d.
      - reflexivity.
      - reflexivity. }
    { destruct d.
      - reflexivity.
      - reflexivity. }
Qed.
```