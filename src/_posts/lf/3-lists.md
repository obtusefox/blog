---
title:  "3. Lists: 배열 데이터 타입"
date:   2018-07-16 12:07:40
description: Coq에서 List 형태의 데이터를 다뤄보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---
# 3. Lists: 배열 데이터 타입

## Pair 타입

우선 두 개의 nat을 가지는 pair type을 정의하자.

```ocaml
Inductive natprod : Type :=
| pair : nat -> nat -> natprod.
```

`natprod` 타입은 pair라는 하나의 타입 유형을 가지는데, 이 pair는 두 개의 nat를 차례로 받아 하나의 pair를 만든다. 예를 들어

```ocaml
Check (pair 3 5).
```

를 실행하면,

```ocaml
pair 3 5
     : natprod
```

가 response로 출력된다. `pair 3 5`는 `natprod` 타입의 한 종류이기 때문에, 그 타입은 natprod가 된다. 그럼 이제 이 pair에 대해 함수를 정의해보자. pair 타입이기 때문에 fst와 snd가 먼저 정의되어야 한다.

```ocaml
Definition fst ( p : natprod ) : nat :=
  match p with
  | pair x y => x
  end.
  
Definition snd (p : natprod) : nat :=
  match p with
  | pair x y => y
  end.
```

pair가 아닌 경우는 반환값을 정의하지 않았다. 그럼 이제 pair에다가 좀 더 편리한 표기법을 더해주자.

```ocaml
Notation "( x , y )" := (pair x y).

Definition fst' (p : natprod) : nat :=
  match p with
  | (x,y) => x
  end.

Definition snd' (p : natprod) : nat :=
  match p with
  | (x,y) => y
  end.

Definition swap_pair (p : natprod) : natprod :=
  match p with
  | (x,y) => (y,x)
  end.
```

pair를 대충 정의하였으니, pair의 기본적인 성질들에 대해 증명을 해보자. 일단 surjectivity.

```ocaml
Theorem surjective_pairing' : forall (n m : nat),
  (n,m) = (fst (n,m), snd (n,m)).
Proof.
  reflexivity.
Qed.
```

surjective function은 전사함수, y의 치역과 공역이 같을 때를 말한다. 이 경우에는 아마 이미 정의된 pair p에 대하여 새로 정의한 fst와 snd 함수를 적용했을 때, 그 결과물이 여전히 p이기 때문에, 공역과 치역이 같아진다고 말하는 듯 하다. 위의 경우는 이 p가 무엇을 의미하는지를, (n,m)과 같이 분리해서 적었기 때문에 바로 simplify할 수 있다. 그러나 다음과 같은 경우는 곧바로 simplify되지 않는다.

```ocaml
Theorem surjective_pairing_stuck : forall (p : natprod),
  p = (fst p, snd p).
Proof.
  simpl. (* Doesn't reduce anything! *)
Abort.
```

따라서 우리는 destruct를 통해 p의 패턴 매칭을 해줘야 한다.

```ocaml
Theorem surjective_pairing : forall (p : natprod),
  p = (fst p, snd p).
Proof.
  intros p.  destruct p as [n m].  simpl.  reflexivity.  Qed.
```

## 자연수 리스트의 정의

아까 정의한 natprod 타입을 보다 일반적으로 확장하여 리스트 형태로 만들어보자. 대부분의 언어에서 list가 정의되는 것처럼,

```ocaml
Inductive natlist : Type :=
  | nil  : natlist
  | cons : nat -> natlist -> natlist.
```

와 같이 정의하자. cons는 nat 하나와 natlist를 받아 natlist를 만들고, nil은 아무 인자도 받지 않은 채로 natlist를 만든다. 예를 들어 [1, 2, 3]의 리스트는

```ocaml
Definition mylist := cons 1 (cons 2 (cons 3 nil)).
```

와 같이 정의될 수 있다. 여기에도 마찬가지로 새로운 notation을 더해주자.

```ocaml
Notation "x :: l" := (cons x l)
                     (at level 60, right associativity).
Notation "[ ]" := nil.
Notation "[ x ; .. ; y ]" := (cons x .. (cons y nil) ..).
```

그럼 이제 보다 편하게

```ocaml
Definition mylist1 := 1 :: (2 :: (3 :: nil)).
Definition mylist2 := 1 :: 2 :: 3 :: nil.
Definition mylist3 := [1;2;3].
```

와 같이 리스트를 정의할 수 있다.

## 리스트와 관련된 기본적인 함수들

리스트를 다루는 기본적인 함수들을 정의해보자.

```ocaml
Fixpoint repeat (n count : nat) : natlist :=
  match count with
  | O => nil
  | S count' => n :: (repeat n count')
  end.
```

위와 같은 `repeat` 함수는 `n`과 `count`를 인자로 받아, count 개 만큼의 n이 이어지는 리스트를 만든다. 예를 들어

```ocaml
repeat (1 5) = [1, 1, 1, 1, 1].
```

이 성립한다.

```ocaml
Fixpoint length (l:natlist) : nat :=
  match l with
  | nil => O
  | h :: t => S (length t)
  end.
```

length 함수는 주어진 리스트의 길이를 반환한다.

```ocaml
Fixpoint app (l1 l2 : natlist) : natlist :=
  match l1 with
  | nil    => l2
  | h :: t => h :: (app t l2)
  end.

Notation "x ++ y" := (app x y)
                     (right associativity, at level 60).
```

app 함수는 주어진 두 리스트를, 순서대로 결합한다.

```ocaml
Definition hd (default:nat) (l:natlist) : nat :=
  match l with
  | nil => default
  | h :: t => h
  end.

Definition tl (l:natlist) : natlist :=
  match l with
  | nil => nil
  | h :: t => t
  end.
```

hd와 tl은 각각 리스트의 head와 tail을 반환한다.

## 리스트를 이용한 bag의 구현

bag은 set과 비슷하지만, 한 element가 여러 번 나타날 수 있다는 점에서 다르다. 즉, 원소의 순서는 상관 없고, 같은 원소가 여러 번 등장할 수 있다.

```ocaml
Definition bag := natlist.
Definition sum : bag -> bag -> bag := app.
```

bag은 데이터 구조상으로는 natlist와 동일하다. 그리고 함수 sum은 집합으로는 합집합에 해당한다. sum a b는 a와 b의 모든 원소들을 가지는 상위 bag이다. 따라서, list의 app으로 표현될 수 있다.

```ocaml
Definition add (v:nat) (s:bag) : bag :=
v :: s.
```

해당 bag에 하나의 원소를 더하는 것도 list와 동일하다.

```ocaml
Definition member (v:nat) (s:bag) : bool :=
negb (beq_nat (count v s) O).
```

그외에도 이와 같이, v가 들어있는지를 확인하는 member 함수를 만들 수 있다. 이외에도 remove_one, subset 등의 함수를 구현.