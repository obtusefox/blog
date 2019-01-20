---
title:  "Kotlin Koans 2 Named Arguments"
date:   2018-07-17 02:04:40
img: 
description: Kotlin Koans 2. Named Arguments - 여러 인자를 받는 함수에 대해, 인자의 이름으로 입력할 인자를 특정하는 법을 알아보자.
categories: 개발
tags: [개발, kotlin, 코틀린, 기초, Koans, Java]
---
# Named Arguments
사실 Java에서 이 개념을 별로 써보진 않은 것 같다. ~~오히려 Verilog에서 이 개념을 많이 썼다.~~ Java에서 named parameters를 사용하는 법에 대해 쓴 다른 [블로그 글](https://javax0.wordpress.com/2014/08/27/named-parameters-in-java/)을 링크한다.
여러 인자를 받는 함수가 있을 때, 내가 원하는 인자만을 입력할 수 있을까? 인자의 Type만 달라지는 경우라면, Java에서 나는 아마 다음과 같이 했을 것 같다.

```Java
public class someClass(){
    public someMethod(int intParam, String strnParam){
        Do something
    }
    public someMethod(int intParam){
        Do something
    }
    public someMethod(String strnParam1, String strnParam2){
        Do something
    }
}
```
그런데 이것은 Named Arguments와는 다르다. 이것은 그저 다른 인자 타입에 대해 다른 행동을 지정한 것일 뿐이다. 잠시 오버로딩, 오버라이딩 등에 대해 알아보고 넘어가자.

## 오버로딩 Overloading
[오버로딩](https://ko.wikipedia.org/wiki/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%98%A4%EB%B2%84%EB%A1%9C%EB%94%A9)은 함수나 연산자의 이름은 그대로 유지하면서, 받는 인자의 종류에 따라 동작을 다르게 정의하는 것을 뜻한다. 위의 예시 코드처럼.

## 오버라이딩 Overriding
[오버라이딩](https://ko.wikipedia.org/wiki/%EB%A9%94%EC%86%8C%EB%93%9C_%EC%98%A4%EB%B2%84%EB%9D%BC%EC%9D%B4%EB%94%A9)은 부모 클래스의 메소드를 자식 클래스가 특정한 형태로 구현하는 것을 의미한다.

Named Arguments는 이 둘과 달리 여러 인자를 한 번에 받는 메소드에 대해, 내가 원하는 특정 인자들의 값만을 입력하고 나머지 인자는 기본값으로 연산을 수행하는 것을 말한다.

## 예제
이 예제는 이미 정의된 joinToString method에 대해, 어떻게 named arguments를 구현할 것인지를 묻는다. `Collection` Class에 대한 method `joinToString`은 다음과 같다:

```Kotlin
fun joinToString(
    separator: String = "",
    prefix: String = "",
    postfix: String = "",
    /* ... */
): String
```

우리는, 예컨대 "a, b, c"의 Collection에 대해,
앞뒤로 "[", "]"를 붙여 "[a, b, c]"의 String을 return하는 method joinOptions를 만들어야 한다. prefix와 postfix만을 설정하는 것이다.

답은 간단하다.

```Kotlin
fun joinOptions(options: Collection<String>) = options.joinToString(prefix = "[", postfix = "]")
```
와 같은 식으로 named arguments를 사용할 수 있다.