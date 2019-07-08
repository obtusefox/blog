---
title:  "Logical Foundations 1. Basics"
date:   2019-03-22 13:27:00
description: How data and functions are defined in Coq, and how you can prove theorems about them.
category: LF
tags: [SF, PL, Coq]
---
# Basics of Coq
I'm writing these articles as my studying materials, and these will be a kind of rewriting the textbook in a easy, and more explained (or sometimes more concise) way. So I would recommend you to follow the original book, but this one might be helpful if you want to quickly skim or review what you've learned, this might be helpful.

## Functional Programming
Coq is "functional," in a way that you can only care about how the program works and what values they return. Based on this, you can make formal proofs and sound reasonings about program, or some mathematical thesis.

Another way it is "fuctional" is that it emphasizes the use of functions. Functions are used like any other objects. For example, a function can take other function as its input, and return another function.

Common featurs of functional languages is that they provide **pattern matching** and **algebraic data types**. Often, functions return different values based on the pattern of the input.

We will begin by looking at **Gallina**, Coq's functional language, and after that, we will look at the tactics we can use.

## Enumerated Types
Coq itself provides small set of built-in features. They don't have `bool` or `int` type. Instead, they provide powerful features to declare our own types.

Enumerated Types are types that don't require any parameters to compose its types. They are just "enumerated."

```ocaml
Inductive day : Type :=
  | monday : day
  | tuesday : day
  | wednesday : day
  | thursday : day
  | friday : day
  | saturday : day
  | sunday : day.
```
Above Codes define an enumerated type, `day`. It's elements are each day of a week. And in this case, return types are explicitly defined, but they can often be left ommitted. For a defined type, you can also define a new function.

```ocaml
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
Above function `next_week` takes a `day` typed datum as an input and returns a `day` typed value. It works based on the type of the input. This is one typical example of how **pattern matching** works.

```ocaml
Compute (next_weekday friday).
```
You can run the above code to evaluate the code. 

```ocaml
     = monday
     : day
```
You will get the result and the type of the evaluation. We will try checking some facts about the defined function.

```ocaml
Example test_next_weekday:
  (next_weekday (next_weekday saturday)) = tuesday.
```
This declaration does two things: it makes an assertion and give it a name. It's assertion is that the next_weekday of the next_weekday of saturday is tuesday. We can just let them admitted, or prove them.

```ocaml
Proof. simpl. reflexivity.  Qed.
```
In the proof, you can simplify, or evaluate each sides of the equation using `simpl` command, and if the resulting equation has same value on each sides, you can use `reflexivity` to eleminate them. 

## bool Type
Next, we will try to define boolean type in a familiar way. There are standard libraries containining simple types like this, of course, and you can just use them out of the box. But we will try to see how they are defined.

### bool Definition
```ocaml
Inductive bool : Type :=
  | true : bool
  | false : bool.
```

### Function Definitions
```ocaml
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
You would understand how they are defined just by looking at them. Last two ones are different in that take two parameters instead of just one.

### Proofs of Basic Facts
```ocaml
Example test_orb1:  (orb true  false) = true.
Proof. simpl. reflexivity.  Qed.
Example test_orb2:  (orb false false) = false.
Proof. simpl. reflexivity.  Qed.
Example test_orb3:  (orb false true)  = true.
Proof. simpl. reflexivity.  Qed.
Example test_orb4:  (orb true  true)  = true.
Proof. simpl. reflexivity.  Qed.
```
Proofs are pretty simple till now.

### Notaion
```ocaml
Notation "x && y" := (andb x y).
Notation "x || y" := (orb x y).
```
Like this, you can assign a notation to a defined functions or data. 

```ocaml
Example test_orb5:  false || false || true = true.
Proof. simpl. reflexivity. Qed.
```
After the assignment, you can use the new notation, like above.

### First Exercise
The textbook warns not to explicitly post the answer on the web, so I will put just some of them which require some explanations or ones that I had hard time solving them. For `Basics.v,` I think no explanation will be needed. Try to fill them up by looking at the codes above. My one advice is to reuse the theorems or definitions to make them simpler.

## More on Types
Like what we've done, we can gradually define more complex types and definitions.

### Checking Types
```ocaml
Check true.
```
You can check the type by using `Check`. For above,
```ocaml
true
     : bool
```
Will be displyed.

```
Check negb.
```
Likewise, for a function,
```
negb
     : bool -> bool
```
input and output types will be defined.

### Compound Types
So far, types we looked at were enumerated types, which their constructors themselves become types. Now, we will look at types made by taking an argument or arguments.

```ocaml
Inductive rgb : Type :=
  | red : rgb
  | green : rgb
  | blue : rgb.
```
These are enumerated types as usual.

```ocaml
Inductive color : Type :=
  | black : color
  | white : color
  | primary : rgb -> color.
```
Then, we can define a new type named `color`, which additionally has a compound type constructor.

```ocaml
Definition monochrome (c : color) : bool :=
  match c with
  | black => true
  | white => true
  | primary p => false
  end.
```

```ocaml
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