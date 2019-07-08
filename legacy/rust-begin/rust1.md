---
title:  "Rust 속성기초 1. Rust 패키지 시스템 Cargo"
date:   2018-07-16 12:07:40
description: Rust의 패키지 시스템 Cargo에 관하여
categories: 개발
tags: [개발, Rust, 러스트]
---

## 패키지 시스템
사실 학부 수준에서 프로그래밍을 배우며 패키지나 라이브러리를 신경쓸 일은 많지 않다. 내가 학부 수준에서 이와 관해 애먹은 경우는 단 두 번이었다. 한 번은 Principles of Programming Language 수업에서, IDE에서 Scala 프로젝트를 생성하거나 이미 제공된 패키지를 import해야 했던 경우. 이것은 사실 IDE에 익숙하지 않았던 탓이기도 하다. 다른 한 번은 NPM을 처음 사용해보던 때. 내가 만든 패키지 이름을 바꾸는 것, webpack에서 경로를 지정해주고... 등등. 신경쓰고 싶지 않다. 커널 빌드를 해보긴 했지만, 이때도 주어진 스크립트를 이용해서 패키지나 모듈을 신경 쓸 필요는 적었다. 하지만 이제 우리는 패키지를 신경써야 한다. "The Book"이 cargo를 처음부터 가르치는 것은, rust를 접하는 이들이 실제 production level에 있는 사람들이 많은 탓도 있을테고, 한편으로는 패키지가 기초부터 유용하게 쓰일 수 있음을 강조하는 것일지도?

## Cargo 생성
Cargo를 생성하면, 그에 대응하는 directory 또한 생성된다.
```
$ cargo new hello_cargo
$ cd hello_cargo
```
해당 경로에 들어가면 'Cargo.toml' [^1] 파일이 있다.

[^1]: Tom Preston-Werner라는 사람이 만든, Tom’s Obvious, Minimal Language라는 포맷이다. 컴공식 유머 감각이 빗나는 작명이다.

나의 경우, 'Cargo.toml'의 내용은
```
[package]
name = "hello_cargo"
version = "0.1.0"
authors = ["Han, Minhee <muteape@gmail.com>"]
edition = "2018"

[dependencies]
```
이었다. 아마 git 설정 내용이 있는 경우 이 내용을 바탕으로 추정을 하는 것으로 보인다. 각각의 항목들이 무엇을 뜻하는지는 쉽게 이해할 수 있다.
Cargo 디렉토리 안의 `src/main.rs`에는
```
fn main() {
    println!("Hello, world!");
}
```
가 이미 작성되어 있다. 이제 build를 해보자.
```
$ cargo build
```
를 하면 `/target/debug` 경로에 `hello_cargo` binary file이 생성된다.
```
$cargo run
```
을 입력하면 컴파일과 실행을 동시에 수행한다. 만약 소스가 변하지 않았다면 컴파일을 하지 않고 실행만 한다. `cargo check`명령어는 컴파일할 수 있는지를 검사하지만, executable한 파일을 생성하지는 않는다. 코드를 작성하는 중에 `check`명령어를 통해 코드 문법을 검사할 수 있다. 이것은 참으로 마음에 드는 기능이다! 큰 차이는 없지만 무의미하게 build를 해보는 것보다 세련되었다.

만약 일반적인 `cargo build` 대신에
```
cargo build --release
```
명령어를 사용한다면, `target/debug`경로가 아니라 `target/release` 경로에 executable 파일이 생성되는데, 이 경우 일반 `cargo build`명령어와 달리 최적화가 이뤄지기 때문에 컴파일 시간은 더 길게 걸린다.

이 정도로 cargo는 일단 넘어가도록 하자.