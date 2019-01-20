---
layout: post
title:  "Kotlin 개발 환경 설정"
date:   2018-07-13 21:32:40
img: 
description: Kotlin이 어떠한 언어인지 간략히 알아보고 코틀린의 개발 환경을 설정한다. Intellij를 설치하고 Hello World 명령어를 수행해보자.
categories: 개발
tags: [개발, kotlin, 코틀린, 기초]
---
# Kotlin의 특징과 개발 환경 설정

## Kotlin이란
최근 기존 언어와의 interoperability를 보장하는 여러 언어들이 등장하고 있으며, Kotlin도 그 중 하나이다. 다른 언어와 비교해서, 혹은 Kotlin이 interoperability를 보장하는 Java와 비교해서 어떤 다른 특징을 가질까? [Kotlin 공식 사이트](https://kotlinlang.org/)를 확인해보자.

> Statically typed programming language for modern multiplatform applications
> : 100% interoperable with Java™ and Android™

정적 타입의 언어이고, Java와 Android(Android App도 Java로 개발되지만 사실 Android 개발은 Java 개발과는 다른 영역이라 생각된다.)와의 호환성을 보장한다. 간결한 문법을 제공하고, null 처리에서 더 안전함을 장점으로 내세운다.

나무위키~~지식의 보고~~와 여러 블로그 글들을 읽어 보니 언어적 특성으로는 다음과 같은 것들이 눈에 띈다. Nullable과 NotNull로 변수 종류를 나누고, null 처리에 있어 오버헤드가 없다. 또 예외처리를 강제하지 않고(이에 대해서 이견이 있겠지만, 나는 강제하지 않는 것이 나은 것 같다.) == 연산자가 .eqauls()와 동일하게 작동한다. 즉 객체 동일성이 아니라 contents 동일성을 확인한다고 한다. 일반적으로 어떤지 모르겠지만, 나는 객체 동일성보다는 contents 동일성을 확인하는 경우가 훨씬 많기 때문에, 이쪽이 더 편하게 느껴진다. C로 프로그래밍을 시작하지 않아 Pointer 사용이 익숙하지 않기 때문인지 모르겠다. equals로 쓰는 것에는 익숙해졌지만, 이것 때문에 코드 가독성이 훨씬 떨어지는 일이 많다. 이외에도 연산자 오버로딩을 지원하며 모든 함수가 리턴값을 가지는 등의 특성을 가진다.

표현식은, 아무튼 간결하다. getter, setter, eqauls 등...을 클래스 선언과 동시에 간편하게 할 수 있다. 세미콜론이 없다든지, new가 없다든지, System.out을 안 써도 된다든지... 간결함이 반드시 더 나은 것이라 할 수는 없겠지만, 추상적인 아이디어를 주로 표현한다든지, fine tuning이 필요하지 않다면 좋은 언어로 보인다. 또 IDE 개발사에서 미는 언어인만큼 개발환경이 좋다.

[웹 환경](https://try.kotlinlang.org/)에서 Kotlin을 사용해볼 수 있다.

## 개발 환경 설치
[JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)와 [IntelliJ](https://www.jetbrains.com/idea/)를 설치하자. 따로 옵션을 설정할 것은 없다. IntelliJ에서 64비트 바로가기를  IntelliJ Community Edition을 사용해도 무방하다.

그런데...

![screenshot](/assets/article-img/intellij-privacy-error.PNG)

...? Intellij를 제거하고 재설치하자.
...? 그래도 마찬가지이다. 굴림과 돋움을 제거하고 다른 폰트를 덮어씌운 탓이라 보인다. 원래의 굴림으로 복원하니 무사히 실행된다.

## 프로젝트 설정

1. Intellij 실행 후 `Create New Project` 선택
2. Project SDK에서 `New`, C:\Program Files\Java\jdk-10.0.1 (버전은 상이할 수 있음)으로 설정
3. 왼쪽 리스트에서 `Kotlin` 선택
4. `Kotlin/JVM` 선택 후 `Next`
5. 적당한 Project name, location을 선택 후 finish.

## Code 작성

1. 왼쪽 상단 프로젝트명의 버튼 두 번 클릭 (프로젝트 폴더 확인))
2. 프로젝트명/src 선택
3. File - New - Kotlin File/Class
4. 'HelloWorld'로 Name 지정 후 확인.
5. 다음과 같은 Code 작성:
    ```kotlin
    fun main(args: Array<String>) {
        println("Hello, world!")
    }
    ```

6. 프로젝트 경로에서 해당 파일 오른쪽 클릭 - `Run HelloWorldKt'
7. 아랫쪽 콘솔 창의 출력 확인
```
Hello, world!
```

앞으로 Kotlin의 문법을 익히며 몇몇 알고리즘을 구현해보자.