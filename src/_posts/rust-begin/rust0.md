---
title:  "Rust 속성기초 0. 개발 환경 셋팅, Hello Rust"
date:   2018-07-16 12:07:40
description: Rust 개발 환경 셋팅, Hello World 출력
categories: 개발
tags: [개발, Rust, 러스트]
---

### 기준 환경
**Rust 튜토리얼의 대표주자 ["The Book"](https://doc.rust-lang.org/book/ch01-02-hello-world.html)를 기준으로 작성**
**Crostini 환경을 기준으로 함. 일반적인 리눅스 배포판에서는 그대로 동작하리라 예상**

## Rust를 배워보자
사실 Rust를 첫 프로그래밍 언어로 배우는 사람은 거의 없을 것이다. 그렇기에 많은 개념들은 건너뛰며 빠르게 넘어가도 되리라는 생각에서, 속성 기초 튜토리얼을 작성해본다. 다만, 중간중간 프로그래밍 언어에서의 추상적인 개념들을 함께 다루고자 한다. (즉 순전히 나의 개인적인 학습 목적의 글인 것.)

## rustup 설치
먼저 Rust toolchain installer인 rustup을 설치한다. [Rust 홈페이지의 설치 안내](https://www.rust-lang.org/tools/install)를 따라서 진행하자. 터미널에서
```
curl https://sh.rustup.rs -sSf | sh
```
명령어로 설치 가능하다.
설치 후에,
```
To get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH
environment variable. Next time you log in this will be done automatically.
```
라는 메시지가 노출되는데, 그대로 터미널에
```
source $HOME/.cargo/env
```
를 입력하여 경로를 설정한다.

이제 터미널에 ```rustup```을 실행해보면, rustup이 설치된 것을 알 수 있다.
```
$ rustup
rustup 1.16.0 (beab5ac2b 2018-12-06)
The Rust toolchain installer
```

## Hello World
먼저 프로젝트가 생성될 디렉토리를 하나 만들자.
```
mkdir helloWorld
cd helloWorld
```
그리고 해당 디렉토리 안에, 다음과 같이 main.rs를 생성해주자.
```
fn main() {
    println!("Hello, World!");
}
```
컴파일하자:
```
$ rustc main.rs
```
`main`이라는 이름의 binary 파일이 생성된다. 다만, rustc는 기본적으로 rs파일의 이름으로 binary 파일을 생성한다. 고로 hello.rs로 작성한 경우, `rustc hello.rs`로 컴파일하면 `hello`라는 binary 파일이 생성될 것이다.

`./main` 명령어로 main 파일을 실행하면:
```
Hello, World!
```
로 출력된다.