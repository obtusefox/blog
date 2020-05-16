---
title: Spectre and Meltdown
date: 2020-05-16 11:05:98
category: arch-security
---

Reference: https://www.youtube.com/watch?v=I5mRwzVvFGE

From the beginning of 2018

2018년 초에 최악의 경우 커널 메모리까지 읽을 수 있는, 그래서 비밀번호까지 읽을 수 있는 버그 발견.
이건 소프트웨어가 아니라 CPU 때문.
인텔, AMD 상관 없이 side channel attack에 노출된다.
해결책? CPU를 교체해라?

심지어는 자바스크립트를 통해서 노출 가능.