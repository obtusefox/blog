---
layout: post
title:  "Kotlin 학습 예제 - Kotlin Koans "
date:   2018-07-14 09:07:40
img: 
description: Kotlin 학습 예제인 Kotlin Koans가 무엇인지 알아보고, 0번 예제를 수행하자.
categories: 개발
tags: [개발, kotlin, 코틀린, 기초]
---
# Kotlin Koans
Kotlin 공식 홈페이지는 Kotlin 학습 예제로 [Kotlin Koans](https://kotlinlang.org/docs/tutorials/koans.html)를 소개한다.

## Koans?
아마 언어유희를 위해 Kotlin과 운을 맞추어 Koans라 지은 것이겠지만, 무슨 뜻이지? 네이버 영어사전은 koan을 다음과 같이 설명한다.

> [NOUN] (in Zen Buddhism) a problem or riddle that admits no logical solution

아마 공안(公案)을 뜻하는 것으로 보인다. 네이버 국어 사전에 공안을 찾아보면

> <불교> 석가모니의 말과 행동. [비슷한 말] 고측(古則).

라고 한다. 선문답에서 먼저 제시되는 물음을 뜻하는 것이라 보인다. 선문답에서 제시되는 물음은 일반적 물음과는 다른 형태를 띈다. 예컨대, 일반적인 질문 Q의 내용이 '어떠한 성질 p를 가지는 X는 무엇인가?'의 형식을 띈다면, 그에 대한 일반적 답 A는 X에 해당하는 지시체를 지시한다. '그것은 존재자 a이다.'와 같은 형식으로. 그러나 선문답에서의 물음은 이러한 지시체를 찾는 질문이 아니다. 선문답에서의 물음은, 마치 학습 주제와도 같으며 고도로 은유적이거나 상징적인 형태를 가진다. 때문에 이에 대해 분명한 답을 찾는 것은 중요하지 않고, 이 주제에 대해 생각하는 것이 중요하다.

물론 이건 Kotlin Koans와 큰 연관이 없다. 프로그램 공부를 함에 있어 중요한 것은 답 찾기가 아니라 그 과정일 것이다. 모든 공부가 그렇지만.

Kotlin Koans는 수행해야 하는 task 42개를 제시하고, 이에 대해 답을 찾으며 학습하도록 이끈다.

## Koans 설치
Koans 저장소의 `/src` 디렉토리에는 4개의 큰 장들이 있고, 각각의 큰 장은 수행할 학습 과제 각각의 파일들을 포함한다. 파일을 보면 몇 번 테스트이며, 어떤 내용에 대한 주제인지 알 수 있다. 예를 들어 _0_Hello_World의 n00Start.kt는 "OK"를 return하는 코드를 포함한다.

하지만 보다 간단히, IntelliJ에서 바로 [EduTools](https://kotlinlang.org/docs/tutorials/edu-tools-learner.html)를 받아 쉽게 Koans를 받을 수 있다.

그러나 `sync failed` `Could not determine Java version using executable` 라는 에러 메시지와 함께 테스트 진행이 되질 않는다. 이 문제를 해결해야 다시 진행할 수 있을 듯 하다:
최신의 gradle 버전을 설치하여 이 문제는 해결하였다. ([참고](https://stackoverflow.com/questions/50121333/could-not-determine-java-version-using-executable-c-program-files-java-jdk-10-0))

하지만 코드 실행시 여전히 `Failed to launch check` 에러 메시지를 띄운다.
JDK10이 문제라 생각하고, JDK8을 설치하였다.
그러나 문제는 여전하다.

새로 프로젝트를 생성하고 다시 시도하였다.

`Failed to notify progress listener.`

Gradle에서 configure 과정에 문제가 있는 것 같다.
다시 File - Setting - Build, Execution, Deploymen - Build Tools - Gradle에서
`Use local gradle distribution`을 체크
Gradle Home 경로에, 아까 설치한 최신의 Gradle 버전 폴더를 지정해줬다.
드디어 정상적으로 작동한다.

0번 과제 "Hello, world!"의 풀이는 간단하다. String "OK"를 반환하는 함수를 작성하면 된다.
자바라면,

```Java
return "OK"
```

와 같은 식이 되겠지만, 코틀린에서는

```Kotlin
fun start(): String = "OK"
```

와 같은 형식으로, return을 쓰지 않는다. 물론, Kotlin의 모든 함수는 반환값을 가진다.