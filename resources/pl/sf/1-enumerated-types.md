---
title:  "Basics 1. Enumerated Types"
date:   2018-07-16 12:07:40
description: Data의 타입 중 Enumerated Types에 대해 알아보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---

### 교재
*Software Foundations의 설명을 대부분 따라가되, 적당히 내게 필요한 부분만 간추린다.*

## Enumerated Types
Coq 자체는 굉장히 기능이 제한적이고, 심지어 bool, int 등의 타입도 제공을 안한다. 대신 타입을 선언하기 좋은 방법을 제공한다고. 

### 요일을 타입으로 나타내기
그럼 그 예시로, 요일을 coq에서 선언해보자.

#### 요일 타입의 선언
일단 day라는 타입을 선언하고
```
Inductive day : Type :=
```
그에 대해 type의 member들을 정의하자.
```
Inductive day : Type :=
  | monday : day
  | tuesday : day
  | wednesday : day
  | thursday : day
  | friday : day
  | saturday : day
  | sunday : day.
```
그리고 이에 대해 function next_weekday를 정의해보자. 우리에게 익숙한 functional programming의 convention대로,
```
Definition next_weekday (d:day) : day :=
```
next_weekday 함수는 day 타입의 d를 인자로 받아서 day 타입을 내놓는다.
```
Definition next_weekday (d:day) : day :=
  match d with
  | monday    => tuesday
  | tuesday   => wednesday
  | wednesday => thursday
  | thursday  => friday
  | friday    => monday
  | saturday  => monday
  | sunday    => monday
  end.
```
그리고 d와 matching하여 각 case에 따라 return 값을 지정한다. Coq는 타입을 추정할 수 있지만 우리의 학습에선 타입을 생략하지 않고 밝힌다. 이제 함수의 값을 evaluate해보자.
```
Compute (next_weekday friday).
```
IDE의 오른쪽 아래 Messages 란에
```
     = monday
     : day
```
라고 그 계산 결과가 출력된다.
이제 보다 복잡한 계산을 해보자.
```
Example test_next_weekday:
  (next_weekday (next_weekday saturday)) = tuesday.
```
`test_next_weekday`라는 예제는, `(next_weekday (next_weekday saturday)) = tuesday`라는 증명의 subgoal을 만든다. 증명의 내용을 지정하고 이에 대해 이름을 붙이는, 두 가지 역할을 하는 것.
이제 이 Example을 증명해보자.
```
Proof. simpl. reflexivity.  Qed.
```
단계별로, `simpl`단계에서는, 죄변의 `(next_weekday (next_weekday saturday))`를 simplify하여 `tuesday`로 evaluate한다. 그리고 `reflexivity` 단계에선 동일한 우변과 좌변을 정리한다. 그럼 더 이상의 subgoal이 없으므로 증명 완료.

비슷한 방식으로 boolean도 정의해보자. 굳이 설명할 필요는 없을만큼 간단하다.
```
Inductive bool : Type :=
  | true : bool
  | false : bool.

Definition negb (b:bool) : bool :=
  match b with
  | true => false
  | false => true
  end.

Definition andb (b1:bool) (b2:bool) : bool :=
  match b1 with
  | true => b2
  | false => false
  end.

Definition orb (b1:bool) (b2:bool) : bool :=
  match b1 with
  | true => true
  | false => b2
  end.
```
증명 또한 위와 동일하다.

```
Example test_orb1:  (orb true  false) = true.
Proof. simpl. reflexivity.  Qed.
Example test_orb2:  (orb false false) = false.
Proof. simpl. reflexivity.  Qed.
Example test_orb3:  (orb false true)  = true.
Proof. simpl. reflexivity.  Qed.
Example test_orb4:  (orb true  true)  = true.
Proof. simpl. reflexivity.  Qed.
```
`Notation`은 다른 방식으로 이미 정의된 operation을 사용할 수 있게 해준다.
```
Notation "x && y" := (andb x y).
Notation "x || y" := (orb x y).
```
로 Notation을 정의하면,
```
Example test_orb5:  false || false || true = true.
Proof. simpl. reflexivity. Qed.
```
와 같은 활용이 가능하다.
Exercise에서는 nandb와 andb3를 정의하고 증명하도록 한다. nandb의 경우, andb의 반대라는 것을 염두에 두자. 예를 들어 한 쪽이 false이면 결과값은 true이고, 한 쪽이 true라면 결과값은 다른 쪽의 negation일 것이다. andb3의 경우 하나하나 정의하기보다, 앞에서 만든 definition을 불러와서 활용하자.