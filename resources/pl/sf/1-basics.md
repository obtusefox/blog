---
title:  "1. Basics: Coq의 기초 문법"
date:   2018-07-16 12:07:40
description: Coq를 통한 증명의 기초 문법을 익히자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---

## Enumerated Types
Coq 자체는 굉장히 기능이 제한적이고, 심지어 bool, int 등의 타입도 제공을 안한다. 대신 타입을 선언하기 좋은 방법을 제공한다고.

우리는 먼저 enumerated type을 살펴볼 것이다. 예를 들어 요일 type의 원소들은 유한하고, 각각은 argument를 받지 않는, 그 자체로 constructor이다. 이런 element들의 유한한 set이 한 type을 이루는 경우, enumerated type에 속한다. 헤아릴 수 있는 형태라고 생각하자.

### 교재
*Software Foundations의 설명을 대부분 따라가되, 적당히 내게 필요한 부분만 간추린다.*

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

## Numbers Module
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

### Notaion에 관해
위에서 하던 대로 notation을 적용하자. 그런데 위와 달리 at level, associativity 같은 개념이 추가된다.
```
Notation "x + y" := (plus x y)
                       (at level 50, left associativity)
                       : nat_scope.
Notation "x - y" := (minus x y)
                       (at level 50, left associativity)
                       : nat_scope.
Notation "x * y" := (mult x y)
                       (at level 40, left associativity)
                       : nat_scope.
```
나중에 더 보겠지만, at level은 우선순위를 뜻한다.
associativity는 계산이 어느 방향으로 associative한지를 표현한다.
이에 대해서는 추후 더 자세히 다루도록 한다. "More on Notaion"에서.

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