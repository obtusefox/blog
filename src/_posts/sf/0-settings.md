---
title:  "Basics 0. 기초 셋팅"
date:   2018-07-16 12:07:40
description: Upenn에서 제공하는 Software Foundations 교재를 공부하기 위한 셋팅
categories: 
 - dev
tags: [SF, Software_Foundations, Coq]
---

## 필요 파일들

### 교재
Upenn의 [Software Foundations 코스](https://softwarefoundations.cis.upenn.edu/)에서 교재를 제공한다. 각 파트별로 교재를 온라인에서 읽거나 파일을 받을 수 있는데, 파일을 받도록 하자. CoqIde에서 코드를 열어서 학습용으로 쓰기 좋은 형태이기 때문이다. 나는 Logical Foundations부터 시작해야 하기 때문에, Volume1의 교재를 Download하였다.

### Coq
윈도우에서 설치하기 때문에 [깃헙](https://github.com/coq/coq/releases/tag/V8.8.2)에서 설치파일을 받았다. [Opam으로 설치하는 경우](https://coq.inria.fr/opam/www/using.html) 현재 시점에서는 CoqIde는 8.8.1 버전만을 지원하니, 8.8.1을 섭치하는 것을 권장.

## 교재 읽는 법
위에서 받은 교재 파일을 압축 풀면, Basics.v 코드가 있다. CoqIde에서 이 파일을 열면,
```
(** To see how this definition mechanism works, let's start with
    a very simple example.  The following declaration tells Coq that
    we are defining a new set of data values -- a _type_. *)

Inductive day : Type :=
  | monday : day
  | tuesday : day
  | wednesday : day
  | thursday : day
  | friday : day
  | saturday : day
  | sunday : day.

```
와 같이, 설명과 실제 프로그램 코드가 동시에 나타난다. 아래쪽 화살표 버튼(왼쪽에서 세 번째 버튼, Forward one command)를 누르거나 Ctrl + Down 키를 누르면 한 블럭의 코드가 실행된다. `.`을 기준으로 하는 듯 하다. 그럼 오른쪽 아래에 메시지가 노출된다.

```
day is defined
day_rect is defined
day_ind is defined
day_rec is defined
```
이런 식으로, 코드를 실행하며 공부해갈 수 있다. 유용한 교재 형태이다. 교재를 읽으며 동시에 불필요한 부분을 지우며 간추릴 수 있다는 단점 또한 갖췄다.