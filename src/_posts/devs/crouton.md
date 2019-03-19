---
title:  "Crouton으로 크롬북에 개발환경 설정하기"
date:   2018-07-16 12:07:40
description: Crouton으로 크롬북에 개발환경 설정하기
categories: 개발
tags: [개발]
---
# 크롬북에서 Crouton 설정

## Crouton 셋팅하기

(그러나 결국 다시 Crostini를 쓰기로 했다. 대신 텍스트 입력 문제가 적은 emacs를 사용하기로 결심.)

## Crostini를 쓰지 않을 이유

성능은 crostini와 crouton 모두 비슷하다고 한다. 물론 crouton을 쓰면 그래픽 가속이 되지만, 나는 xiwi를 사용하기 때문에 해당 사항이 없다. 그러나 crostini를 쓸 때에는 간단하지만 기이한 버그가 나를 괴롭혔다. 입력 문제. 리눅스 앱으로 창 전환을 하면 `tttttt...`, `222222...` 등의 기이한 입력이 발생하는 것. 그리고 CoqIde 경우 파일 열기나 저장 다이얼로그를 아무리 꺼도 다시 창이 떠버리는 기이한 버그. 보고를 하긴 했는데 언제 고쳐질지 모르겠고, crostini가 그리 완벽하진 않음을 느꼈다. 가끔은 앱이 실행되지 않는듯 삐걱거리는 것이 늘 느껴진다. 결국 crostini가 제공하는 통합성을 포기하고 crouton을 사용하기로 했다.

## Crouton의 단점

클릭만 하면 되는 crostini에 비해 설치하기 복잡하다. 그리고 앱을 실행할 때마다 shell에서 명령어를 실행해야 한다. 크롬의 Crouton 확장이 잘 동작하지 않아 창이 실행되지 않을 때도 있다. 그래도 crostini처럼 이상하게 동작하진 않는다. 그러니 내가 쓰는 것.

## Crouton로 18.04 Bionic 설치하기

[crouton](https://github.com/dnschneid/crouton)의 `Usage` 안내를 따라 설치하되, 18.04를 설치하게 지정하자. 문제가 생길 수 있다고 하는데 아직 유의미한 문제를 마주하진 못했다. 링크에서 crouton을 받은 후에 크롬 창에서 ctrl + alt + T를 이용해 shell을 띄우고

```bash
> shell
sudo cd ~/Downloads
crouton -r bionic -t xiwi -n bionic
```

명령어를 입력하면 된다. 오래 오래 걸려서 설치가 된다.
다시 shell에서

```bash
> shell
sudo enter-chroot
```

로 container에 접속할 수 있다. 일단 `sudo apt update`로 패키지 정보를 업데이트하자.

## ChromeOS와 어울리는 테마 설치

```bash
sudo apt install git pcmanfm lxappearance gtk2-engines-murrine gtk2-engines-pixbuf
```

로 git, lxde의 파일관리자, 외형 관리자, gtk 엔진들을 설치하자.
gtk 테마로 구글이 crostini에 사용하는 [cros-adapata](https://chromium.googlesource.com/chromiumos/third_party/cros-adapta/+/master), 아이콘 테마로 [Flat Remix](https://github.com/daniruiz/flat-remix)를 사용하자.

```bash
git clone https://chromium.googlesource.com/chromiumos/third_party/cros-adapta
git clone https://github.com/daniruiz/flat-remix
```

로 두 파일을 받자. 그리고 크롬에서 새 shell을 띄우고

```bash
sudo startxiwi pcmanfm
```

을 이용해 탐색기를 띄워주자. 아까 받은 cros-adapata 테마를 .themes 폴더에 넣어주고, flat-remix 테마를 .themes 폴더에 넣어주자. 그리고 또 새 shell을 띄워서

```bash
sudo startxiwi lxappearance
```

로 외형 관리자를 실행하고 gtk 테마를 cros-adapta로, icon 테마를 flat-remix로 바꾸자. 이제 마찬가지 방식으로 다른 앱을 실행하면 예뻐져있는 것을 확인할 수 있다.

다만 앱으로 가는 바로가기를 만들 수 없다는 것이 안타깝다. 이것은 chrome extension으로 만들 수 있는 권한 밖의 것인지 확인해보고, 가능하다면 직접 만들어보는 것도 괜찮을 것 같다.