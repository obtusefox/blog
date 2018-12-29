---
title:  "Basics 2. 보다 다양한 type들"
date:   2018-07-16 12:07:40
description: Functions에 대해 알아보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---

## 다양한 type들

### Type을 출력하기
Coq에서 `Check`는 data나 function의 type을 출력한다.
```
Check true.
```
명령어는
```
true
     : bool
```
을 출력한다. 함수 타입에 대해서는,
```
Check negb.
```
을 실행하면
```
negb
     : bool -> bool
```
가 출력된다. 어떤 데이터나 함수든지 Check를 통해 타입을 알 수 있다.

### Compound Types
지금까지 정의된 type은 enumerated type이었다. 하지만 이와 달리, Constructor가 그 자체로 하나의 type이 되는 것이 아니라, argument를 받아 그때마다 다른 element를 만들 수도 있다.

rgb 타입을 정의하자:
```
Inductive rgb : Type :=
  | red : rgb
  | green : rgb
  | blue : rgb.
```
이것을 기반으로 다른 타입을 추가로 정의해보자.
```
Inductive color : Type :=
  | black : color
  | white : color
  | primary : rgb -> color.
```
color 타입에는, 앞에서와 마찬가지로 black, white의 argument를 받지 않는 constructor가 있고,
rgb argument를 받아서 color를 내놓는 primary constructor가 있다.
앞에서 정의한 rgb 타입들을 인자로 넘긴다.
예를 들어 `primary red`는 하나의 color 타입의 값이 된다.
그외에는 특별히 다른 것은 없어보인다.

```
Definition monochrome (c : color) : bool :=
  match c with
  | black => true
  | white => true
  | primary p => false
  end.
```

```
Definition isred (c : color) : bool :=
  match c with
  | black => false
  | white => false
  | primary red => true
  | primary _ => false
  end.
```