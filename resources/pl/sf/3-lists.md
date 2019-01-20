---
title:  "3. Lists: 배열 데이터 타입"
date:   2018-07-16 12:07:40
description: Coq에서 List 형태의 데이터를 다뤄보자.
categories: 개발
tags: [SF, Software_Foundations, Coq]
---
## Pair 타입
우선 두 개의 nat을 가지는 pair type을 정의하자.
```
Inductive natprod : Type :=
| pair : nat -> nat -> natprod.
```
`natprod` 타입은 pair라는 하나의 타입 유형을 가지는데, 이 pair는 두 개의 nat를 차례로 받아 하나의 pair를 만든다. 예를 들어
```
Check (pair 3 5).
```
를 실행하면,
```
pair 3 5
     : natprod
```
가 response로 출력된다. `pair 3 5`는 `natprod` 타입의 한 종류이기 때문에, 그 타입은 natprod가 된다. 그럼 이제 이 pair에 대해 함수를 정의해보자. pair 타입이기 때문에 fst와 snd가 먼저 정의되어야 한다.
```
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
```
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
```
Theorem surjective_pairing' : forall (n m : nat),
  (n,m) = (fst (n,m), snd (n,m)).
Proof.
  reflexivity.
Qed.
```
surjective function은 전사함수, y의 치역과 공역이 같을 때를 말한다. 이 경우에는 아마 이미 정의된 pair p에 대하여 새로 정의한 fst와 snd 함수를 적용했을 때, 그 결과물이 여전히 p이기 때문에, 공역과 치역이 같아진다고 말하는 듯 하다. 위의 경우는 이 p가 무엇을 의미하는지를, (n,m)과 같이 분리해서 적었기 때문에