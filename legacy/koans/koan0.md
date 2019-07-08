---
title:  "Kotlin Koans 0. Hello Kotlin"
date:   2018-07-16 12:07:40
description: Kotlin Koans 0. 설치하기, Hello World
categories: 개발
tags: [개발, kotlin, 코틀린, 기초, Koans, Java]
---

## EduTools 이용하기
[JetBrains의 안내](https://www.jetbrains.com/help/education/install-edutools-plugin.html?section=IntelliJ%20IDEA)를 참고하여 EduTools를 설치하자. 그후 IntelliJ의 좌상단 메뉴에서 File - Learn - Browse Course를 선택, Select Course 창에서 Kotlin Koans를 택한다. Kotlin Koans 코스 프로젝트가 실행되었다.

## Hello World
Hello World를 작성해보자. ```TODO()```는 Exception을 throw한다고 한다. 현재는 비어있는데, 이를 채워보자.

```Kotlin
fun start(): String = TODO()

```
print하는 것이 아니라 "OK" 내용의 String 값을 retrun해야 한다. 문법을 몰라도 이건 짤 수 있겠다.

```Kotlin
fun start(): String = "Hello, World!"
```
"OK"를 반환하는 함수 start()가 작성되었다.
오른쪽 창 아랫쪽의 Check 버튼을 누르면, "Congratulations!" 메시지가 노출된다.
다음 예제로 가보자.