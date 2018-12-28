---
title:  "Basics 2. 보다 다양한 type들"
date:   2018-07-16 12:07:40
description: Functions에 대해 알아보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---

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
지금까지 정의된 type은 enumerated type이었다. 예를 들어 요일 type의 원소들은 유한하고, 각각은 argument를 받지 않는, 그 자체로 constructor이다. 이런 element들의 유한한 set이 한 type을 이루는 경우,enumerated type에 속한다. argument를 받아 그때마다 다른 element를 만들 수 있다면 유한한 type 정의로 무한히 많은 원소를 표현할 수 있을 것이다.

RGB 타입을 정의하자:
```
Inductive rgb : Type :=
  | red : rgb
  | green : rgb
  | blue : rgb.
```
이것을 