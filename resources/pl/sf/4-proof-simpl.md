---
title:  "Basics 3. Numbers 구현"
date:   2018-07-16 12:07:40
description: Numbers type을 Coq에서 구현해보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---
### Numbers Module
Coq에서는, 다른 언어와 마찬가지로, 모듈 시스템을 제공한다. 우리는 자연수 타입 선언과 그와 관련된 함수들을 Module로 만들어보도록 하자. `Module X`로 시작하여, 중간에 해당 모듈에 들어갈 타입 정의를 적고, `End X`로 끝내준다.
```
Module NatPlayground.
... [ 여기에 코드를 입력 ]
End NatPlayground.
```

### Numbers type 정의
이제 그 내부를 채워보자. 마치 Nil과 Cons로 리스트 타입을 정의하던 것처럼,
```
Inductive nat : Type :=
  | O : nat
  | S : nat -> nat.
```
O로, Nil처럼 0을 정의하고, S로, Cons처럼 그에 1씩 더해짐을 표현해보자. `S(O)`는 1, `S(S(O))`는 2... 그럼 우리는 숫자를 표현하는 방법, representation까지를 만든 셈이다.
이것은 단순히 표기의 문제일 뿐이니,
```
Inductive nat' : Type :=
  | stop : nat'
  | tick : nat' -> nat'.
```
와 같이 적어도 무방하다. 이름만 다르지 같은 데이터 구조를 나타내기 때문.

### Numbers 함수
그럼 함수를 만들어보자. nat type의 n에 대해, 그 predecessor를 반환하는 pred함수.
```
Definition pred (n : nat) : nat :=
  match n with
    | O => O
    | S n' => n'
  end.
```
일단 O에 대해서는 predecessor가 O라고 정하자. 그럼 O에 대해서는 O를 반환하고, 그보다 큰 어떠한 S(n')에 대해서는 n'을 반환한다. 이렇게 numbers 타입들을 정의해보았다.
그런데 coq는 자동으로 데이터 타입을 내부적으로 숫자로 변환하기도 한다.
```
Check (S (S (S (S O)))).
```
을 확인하면
```
  4 : nat
```
값이 반환된다. 자동으로 constructor들을 정의해준 것을 알 수 있다.
이제 이 숫자값에 대해, pred와 유사하게 minustwo 함수를 정의해보자. 우리는 음수 타입을 정의하지 않았으므로, 음수값에 대해서는 O를 반환하자.
```
Definition minustwo (n : nat) : nat :=
  match n with
    | O => O
    | S O => O
    | S (S n') => n'
  end.
```
으로 정의하고
```
Compute (minustwo 4).
```
계산해보면, `2: nat` 값을 반환한다. 증명 과정에선 compute 대신 simpl.을 사용하여 evaluate할 수 있다.

### Fixpoint
앞서 정의한 함수들은 사실 간단한 경우들이다. 그런데 실제로 무언가 유용하거나 좀 더 복잡한 함수를 만들기 위해서는 단순히 각 타입에 대해 한 번에 evaluation이 끝나는 것이 아니라, recursion이 필요한 경우가 있다. 이런 타입에 대해서는 Fixpoint로 함수 선언을 한다.
인자로 주어진 값이 짝수인지를 판별하는 함수를 선언해보자.
```
Fixpoint evenb (n:nat) : bool :=
  match n with
  | O        => true
  | S O      => false
  | S (S n') => evenb n'
  end.
```
0, 1의 경우에는 앞서 정의한 바와 같이 정의가 되지만 그보다 큰 수에 대해서는 재귀적으로 함수 정의를 하게 된다. `S (S n')`의 경우, 다시 적자면 `1 + 1 + n'`의 경우는 `n'`이 짝수인지를 evaluate하여 반환한다.
비슷한 방식으로 두 자연수를 더하는 plus 함수를 정의해보자.
```
Fixpoint plus (n : nat) (m : nat) : nat :=
  match n with
    | O => m
    | S n' => S (plus n' m)
  end.
```
이를 바탕으로 mult 함수까지 정의해보자. 여러 인자가 같은 타입인 경우 한 번에 타입 선언을 할 수 있다.
```
Fixpoint mult (n m : nat) : nat :=
  match n with
    | O => O
    | S n' => plus m (mult n' m)
  end.
```
혹은, 여러 인자를 한 번에 `,`로 구분하여 case matching을 할 수 있다. 대해, 다른 인자의 값이 상관 없는 경우 case matching에서 상관 없는 인자를 `_`로 적을 수 있다.
```
Fixpoint minus (n m:nat) : nat :=
  match n, m with
  | O   , _    => O
  | S _ , O    => n
  | S n', S m' => minus n' m'
  end.
```
이 또한 함수형 프로그램에서 익숙한 convention이다. 이상으로 number type에 대한 간략한 예제를 마친다. 추가적인 exercise는 boolean 예제보단 조금씩 머리를 쓰긴 해야 하지만, 마찬가지로 그렇게 어렵진 않다.

