---
title: Buffer Overflow
date: 2020-05-16 11:05:98
category: arch-security
---

# Buffer Overflow

## 요약
프로그램의 Heap이 너무 커져서 건드리지 말아야 할 영역까지 건드리는 문제
시스템에서 이걸 막거나, 프로그래밍 언어나 라이브러리에 따라 해결 가능.

버퍼: 동적 할당에서 프로그램간 공유할 수 있는 메모리 영역.
input이 잘못된 경우 발생. 예를 들어 buffer[500]에 500 넘는 글자가 들어간다.

return address가 있는 곳까지 코드를 써서 다른 코드를 실행하게 할 수 있음.
버퍼가 OS에 특히 많기 때문에 권할을 탈취하는 것도 가능.

간단하게는 바운드 체킹이 가능.
메모리 레이아웃을 랜덤하게 만들거나, 버퍼들 사이에 일부러 틈을 두고
이 영역에 접근하는 애가 있나 감시한다. (Canaries)

Heap vs Call Stack
어느 걸 쓸지는 아키텍처에 따라 다르다.

Stack인 경우,
local 변수를 다시 써서 프로그램의 행동을 바꾼다든지
stack frame의 return address를 다시 쓴다든지, 그럼 attacker가 정의한 지점에서 resume될 것.
function pointer나 exception handler를 덮어쓴다.

-> 이걸 어떻게 막을 수 있을까? 주소를 예측하기 어렵게 만든다든지. (trampolining)

Heap은 실행 중에 dynamically 써진다.
그럼 malloc 정보 같은 걸 변형해서 원하는 곳에 데이터를 쓸 수 있음.

메모리 주소
111111111111111

000000000000000

이라면 맨 위에 커널이 있고
맨 아래에 텍스트, 그 위에 데이터, Heap이 있음.

커널 아래에 Stack이 있음.
Heap 은 위로 자라고, Stack은 아래로 자람.

Stack은 높은 메모리 주소에서 낮은 메모리 주소로 감
FFF에서 000으로.

stack에
function,
parameter
return
base pointer
그리고 buffer가 있음.

500을 char buffer[]에 배정하고
그 다음에 506글자를 여기에 쓰려 하면 SegFault.
근데 508글자를 준다?
그럼 에러 나오는 주소가 ret으로 주어질 것.
그럼 여기 ret에다가 작동시키는 코드를 넣을 수 있음.

그리고 심지어 원래 buffer로 돌아오도록 ret address를 쓰면
결국 다시 돌아와서 실행하게 됨.
왜냐하면 padding이 어떻게 되는지 모르기 때문에.

그런데 이런 명령어를 통해 user space에서 kernel space에 접근할 수도.

###### References
https://www.youtube.com/watch?v=1S0aBV-Waeo
https://en.wikipedia.org/wiki/Buffer_overflow