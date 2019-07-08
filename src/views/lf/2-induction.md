---
title:  "2. Induction: 귀납에 의한 증명"
date:   2018-07-16 12:07:40
description: Induction을 통해 증명을 해보자.
category: LF
tags: [SF, Software_Foundations, Coq]
---
## Proof by Induction
`Induction.v` 파일의 내용을 학습하자.

### Basics를 import하기
다음 장을 시작하기에 앞서 앞장에서 다룬 Basics를 컴파일하여 import할 필요가 있다. 윈도우에서는 coqIde에서의 컴파일이 동작하지 않는다. 고로 유닉스 환경에서, 해당 경로에서 bash 명령어로 `make`를 실행하거나, 혹은 리눅스에서 실행한 coqIde에서 make를 실행하자.

### n = n+0의 증명
```
Theorem plus_n_O_firsttry : forall n:nat,
  n = n + 0.
```
을 증명해보자.
```
Proof.
  intros n.
  simpl. (* Does nothing! *)
Abort.
```
그런데 simpl 단계에서 아무것도 되지 않는다. n의 case에 따라 `+`가 simplified될 수 없기 때문에. 그럼 앞에서처럼 destruct를 써서 case를 나눠야 할까?
```
Theorem plus_n_O_secondtry : forall n:nat,
  n = n + 0.
Proof.
  intros n. destruct n as [| n'].
  - (* n = 0 *)
    reflexivity. (* so far so good... *)
  - (* n = S n' *)
    simpl.       (* ...but here we are stuck again *)
Abort.
```
마찬가지로 아무 일도 일어나지 않는다. 왜냐하면 두 번째 case에서 S(n' + 0)이 나타나며 다시금 `simpl.`이 아무것도 할 수 없기 때문. 여기에서 induction을 도입한다. 귀납. 우리의 예시에선, 어떠한 `n`에 대하여 `n = n + 0`이 성립한다면 `S n`에 대해서도 마찬가지가 성립함을 보여야 한다. 그런데 `n = n + 0`을 이미 보였다면, `S (n + 0)`에서 `n + 0`을 `n`으로 `rewrite`할 수 있을 것이다. 코드로는 다음과 같이 쓴다.
```
Theorem plus_n_O : forall n:nat, n = n + 0.
Proof.
  intros n. induction n as [| n' IHn'].
  - (* n = 0 *)    reflexivity.
  - (* n = S n' *) simpl. rewrite <- IHn'. reflexivity.  Qed.
```
IHn'은 귀납적 전제에 붙여주는 이름이다. 따라서 IHn'이 아니라 다른 이름이 되어도 괜찮다. `rewrite <- IHn'`를 통해 `n+0`을 `n`으로 대체한다. 그럼 위에서 해결되지 않던 `S (n' + 0)`의 경우가 해결된다.
다음 예시로, 모든 n에 대하여 `minus n n`이 `0`임을 증명하자. destruct를 쓰는 증명의 경우
```
Proof.
  intros n.
  destruct n as [|n'].
  - reflexivity.
  - simpl.
```
마찬가지로 `S n'`에서 막힌다. 그렇기에 `induction`을 도입하자.
```
Proof.
  induction n as [| n' IHn'].
  - (* n = 0 *)
    simpl. reflexivity.
  - (* n = S n' *)
    simpl. rewrite -> IHn'. reflexivity.  Qed.
```
여기서 `intros`는 불필요하다. `induction`이 `intros`의 역할까지 해주기 때문이다.
나머지 예제들은 천천히 여태껏 배운 tactic들을 써보면 된다. 다만 `rewrite`에서 화살표의 방향에 따라 다르게 적용된다는 점에 주의하자. 이제부터는 생각을 하며 증명을 해야 한다. 그리고, 앞에서 증명한 Theorem을 바탕으로, 예를 들어 `rewrite plus_n_O`과 같은 tactic을 사용해야 한다. `plus_comm`은 `plus_n_0`와 `plus_n_Sm`을 사용하자.