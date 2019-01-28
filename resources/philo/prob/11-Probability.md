---
title:  "11. 확률"
date:   2018-07-16 12:07:40
description: 
categories: 개발
tags: [철학, 확률, 인공지능]
---
# 

## 왓슨은 어떻게 질병을 분석하는가

```text
Toothache -> Cavity
```

라고 하면, 사실 다른 경우를 고려해야 한다.

```text
Tothache -> Cavity V Gum V ...
```

그렇다고 이렇게 다 적을 수는 없다. 고로 이런 단순한 logical approach는 문제가 있다. 사실 둘 중 어느 쪽도 확실한 논리적 귀결이나 원인은 아니다. 혹은 agent의 지식은 그저 믿음의 수준을 제공해줄 뿐이다. 고로 우리는 주로 확률 이론을 통해 이 문제를 다룬다.

그런데 세계에는 불확실성이 없다. 충치를 가졌거나 안 가지거나 둘 중 하나여야지, 0.8일 수 있을까?

## 통계적 접근

AI는 증거로부터, 예를 들어 증상으로부터 공통 원인을 찾아낸다. Bayes' Theorem을 이용하면,

```text
P( cause|effect ) = P( effect|cause ) * P( cause )/P( effect )
```

로 정의된다. 그럼 P( effect|cause )는 인과적 방향의 관계를 나타내고, P( cause|effect )는 분석적 방향(diagnostic direction)을 나타낸다. 예를 들어 뇌수막염(meningitis)은 환자가 70%의 확률로 목을 뻗뻗하게 만든다. 1/50000 확률로 뇌수막염을 앓고, 목이 뻗뻗할 확률이 1%라고 하자.

이 경우 결과는 관찰 가능한 증거들이다. 고로 우리는 데이터로부터 확률을 얻어내고, 예상되는 원인에 대한 확률을 계산할 수 있다.

1) Product Rule (Chain Rule)
2) Probability Density Function
3) Joint Probability Distribution
4) Marginal probability


##



