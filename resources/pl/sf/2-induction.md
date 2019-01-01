---
title:  "2. Induction: 귀납에 의한 증명"
date:   2018-07-16 12:07:40
description: Induction을 통해 증명을 해보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---
## Proof by Induction
`Induction.v` 파일의 내용을 학습하자.

### Basics를 import하기
다음 장을 시작하기에 앞서 앞장에서 다룬 Basics를 컴파일하여 import할 필요가 있다. 윈도우에서는 coqIde에서의 컴파일이 동작하지 않는 관계로, bash에서 컴파일을 해야 했다. 같은 버전으로 컴파일을 해야 하기에 다른 환경에서 컴파일한 것을 import하기도 마땅치 않다. 아무튼 coqIde와 같은 버전의 coq을 설치하고, 해당 경로에서 `coqc Basics.v`를 실행한다. 그리고 `From LF Require Export Basics.`로 import하도록 되어있지만, 경로명과 상관없이 import가 되지 않는다. 모듈 시스템에 대해 더 알아보면 고칠 수도 있겠는데, 기본으로 제시되는 메뉴얼을 따라서는 제대로 import가 되지 않는다. `Require Export Basics.`로 수정하면 그제서야 진행할 수 있다. 언어 자체의 간결성과 별개로, 개발환경 셋팅하기 참 곤란하기 그지없다.

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