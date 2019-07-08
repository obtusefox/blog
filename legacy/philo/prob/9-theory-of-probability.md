---
title:  "9. 확률의 이론"
date:   2018-07-16 12:07:40
description: Coq에서 List 형태의 데이터를 다뤄보자.
categories: 개발
tags: [철학, 확률, 인공지능]
---
# 확률을 어떻게 정의해야 할까

## 논리적 접근

확률을 가지는 사물은 probability bearer.

### 네 가지 공리

1. 어떠한 진술 A에 대해서도 P( A ) >= P( C ) = 0. 어떠한 사건의 확률도 0 이상이다.
2. 어떠한 진술 A에 대해서도 1 = P ( T ) >= P ( A ). 어떠한 확률도 1 이하이다.
3. 어떠한 진술 A, B에 대해서도, 둘이 논리적으로 동치라면, 같은 확률을 가진다.
4. Ai, Ai+1, ... , Aj가 상호배제적인 진술들의, 헤아릴 수 있는 나열이라면 P( U iAj ) = 시그마(i=1~무한) P ( Ai ) = 1. 모든 경우의 확률을 다 더헤서 1이 된다.

상호배제적임은, 논리적 의미에서 두 진술이 동시에 참일 수 없음을 의미한다. 이것은 물리적 onconsistency와는 다르다. logical inconsistency는, 두 진솔이 동시에 참이게 만드는 해석(interpretation)이 존재하지 않음을 뜻한다.

예를 들어,

```
Socrates is both bald and wise. <-> Socrates is neither bald nor wise.
```

이 두 진술은 논리적으로 inconsistent하며

```
The die will come up a 4. <-> The die will come up a 5
```

이 두 진술은 물리적으로 inconsistent하다.

### 확률 이론들

1. p( A V B ) = p( A ) + p( B ) - p( A & B )
   증명)
   규칙 3, 4에 의해 P( A ) = P( A & B ) + P( A & ~B )
   마찬가지로, P( B ) = P ( A & B ) + P( ~A & B )
   그럼, P( A ) + P( B ) = 2 P( A & B) + P( A & ~B ) + P( ~A + B )

   그런데 A V B는 논리적으로 ()
   

2. p( ~A ) = 1 - p( A )