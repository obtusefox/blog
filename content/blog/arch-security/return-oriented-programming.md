---
title: Return Oriented Programming (ROP)
date: 2020-05-10 11:05:98
category: arch-security
---

# Return Oriented Programming (ROP)

## 요약
보안 장치들에도 불구하고, 콜 스택을 탈취해  


방어 시도: 스택/ 힙을 실행할 수 없게 만듦 -> libc로 jump/return

2) libc를 ASLR (Address Space Layer Randomization) 등으로 방어
그래서 브루트 포스하거나 leak을 느림.
하트블리드라든지.

3) 그래서 libc를 피하더라도 -> ROP를 통해 실행 가능

이미 존재하는 gadget(코드 조각들)을 모아서 libc 역할 가능
gadget은 ret으로 끝나는 instruction group들
stack은 esp (program counter)
gadget은 stack의 pop을 받아 실행.

pop + ret의 조합.
원래의 여러 instruction 조합으로 실행할 수 있는 걸,
pop해서 레지스터에 원하는 값을 넣고,
그럼 예를 들어 원하는 주소값을 넣어두고
mov [주소값] 레지스터
하면 원하는 주소로 보낼 수 있다.

ret instruction을 찾아서 가능한 gadgets를 찾을 수 있음 

근데 이걸 다 모아서 튜링 컴플리트하다.

## 해결
주소, 특히 64비트 주소는 랜덤하게 만들면 아주 힘들다.
Blind ROP.

free-branch instruction들을 cache에서 제거하도록 만들기.



근데 canray에 crash하는데 다시 randomize 안하면
이 값을 dump할 수 있음.

그래서 memory safety가 중요. -> 그런 언어를 쓰자!
control-flow 컨트롤 필요

## Reference

https://www.youtube.com/watch?v=XZa0Yu6i_ew