---
title: How Rust Achieves Memory Safety
date: 2020-05-16 03:05:72
category: opencl
---

# Rust는 어떻게 메모리 안전성을 확보하는가

## Rust의 개발

파이어폭스의 Quantum CSS 엔진이 Rust로 쓰였는데, 이는 대부분 C++로 쓰였던 지금까지의 브라우저 엔진들을 교체하는 것. C++로 쓰는 것은 성능을 위한 것이었지만, 많은 문제를 야기. 그래서 C++의 문제를 해소한, 특히 Data Race 상황에 대해 더 병렬적 코드를 쓰기 쉽게 만드는 Rust를 사용하는 것.

## 가능한 문제들과 그 해결책

메모리 안전성에 관해 여러 문제들이 있다. 이는 안전성, 성능 모두에 문제가 되는 것.

## Garbage Collection

## 메모리 취약점

###### References

https://hacks.mozilla.org/2019/01/fearless-security-memory-safety/
