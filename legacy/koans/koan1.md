---
title:  "Kotlin Koans 1 : Java to Kotlin"
date:   2018-07-16 12:07:40
description: Kotlin Koans 1. Java to Kotlin Conversion을 수행하며 루프, 조건문 등의 차이를 알아보자
categories: 개발
tags: [개발, kotlin, 코틀린, 기초, Koans, Java]
---

# Java to Kotlin Conversion
내게는 Java 기반으로 다른 언어를 설명하는 것이 편하다. Java에도 능숙하다고 하기는 어렵지만, 그나마 익숙한 것이 Java이다. 물론 이제는 Scala나 ML 같은 함수형 언어가 더 친숙해졌지만. Java Code를 Kotlin으로 옮기며 둘의 차이를 살펴보자.

## Java Code
Java Code의 역할을 살펴보자.

```Java
    public String toJSON(Collection<Integer> collection) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        Iterator<Integer> iterator = collection.iterator();
        while (iterator.hasNext()) {
            Integer element = iterator.next();
            sb.append(element);
            if (iterator.hasNext()) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
```
정수 Collection을 받아 순서대로 "[1, 2, 3, ... , 4]" 형태의 String으로 만들어 반환한다.
사실 Collection Type을 그대로 써본 적은 없다. 그 하위 Type으로 Queue, List, Set 등을 써보긴 했지만, Collection도 이들과 같은 인터페이스를 제공할까? 일단 Collection에 대해 알아보자.

### Collection
Java에서 Collection에 대해서는 [GeeksforGeeks Article](https://www.geeksforgeeks.org/collections-in-java-2/)을 참고한다.

> Collection : Root interface with basic methods like add(), remove(), contains(), isEmpty(), addAll(), ... etc.

내부적으로 Collection이 어떻게 동작하는지는 추후에 알아보자. Java의 Source Code를 들여다보면 알 수 있을 것이다.

그럼 Kotlin에서 Collection은 어떻게 동작하는가? [공식 문서](https://kotlinlang.org/docs/reference/collections.html)를 참고하자.

> The Kotlin `List<T>` type is an interface that provides read-only operations like size, get and so on. Like in Java, it inherits from `Collection<T>` and that in turn inherits from `Iterable<T>`.

Java에서와 비슷한 형식으로 Collections Type이 구현되는 것 같다. 다만 다른 언어와는 다른 특징은 선언할 때 mutable한지 immutable한지 설정한다는 것이다.

> Unlike many languages, Kotlin distinguishes between mutable and immutable collections (lists, sets, maps, etc). Precise control over exactly when collections can be edited is useful for eliminating bugs, and for designing good APIs.

나는 더 자세하게 설정하는 방식을 선호한다. 일부러 변수명도 자세히 적고 필요 없더라도 가독성을 위해 빈 괄호를 넣는 등. 그래서 내게는 이런 방식이 더 낫다고 느껴진다. 잘 모르겠지만, 오버헤드도 더 적어지리라 생각된다. immutable 방식은 get, size 등 데이터를 수정하지 않는 method만을 허용한다. Iterator도 비슷하게 쓰이는 듯 하다.

### Stringbuilder
[Kotlin API](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-string-builder/)를 살펴보자. 거의 유사하기에 따로 말할 것은 없을 것 같다. 

## Kotlin Code
사실 val로 변수 선언하는 것 외에는 큰 차이가 없다. 그냥 거의 그대로 code를 쓴다.
정말, 함수의 첫 선언과 val로 변수를 선언한다는 것 외에는 거의 유사해서 특별히 덧붙일 말이 없다.
이처럼 Kotlin을 Java와 거의 유사한 문법으로 쓸 수도 있다.

```Kotlin
fun toJSON(collection: Collection<Int>): String {
    val sb = StringBuilder()
    sb.append("[")
    val iterator = collection.iterator()
    while(iterator.hasNext()){
        val element = iterator.next()
        sb.append(element)
        if(iterator.hasNext()){
            sb.append(", ")
        }
    }
    sb.append("]")
    return sb.toString()
}
```