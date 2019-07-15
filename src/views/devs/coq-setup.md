---
title:  "Install and setup opam/coq in debian / ubuntu"
date:   2019-07-13 17:41:43
description: Install and setup opam and coq in debian / ubuntu
category: devs
tags: [devs, debian, coq]
---

### Get the script

```bash
sh <(curl -sL https://raw.githubusercontent.com/ocaml/opam/master/shell/install.sh)
```

### Add the coq repo

```bash
opam repo add coq-released https://coq.inria.fr/opam/released
```

### Install dependency

```bash
sudo apt install git build-essential patch unzip m4
```

### Init Opam

To install opam in Crostini or WSL, you need to disable sandboxing, so we add the flag to disable bwrap sandboxing. Input desired ocaml compiler version.

```bash
opam init -n --compiler=ocaml-base-compiler.4.07.1 --disable-sandboxing
```

### Install Coq

Install desired coq version.

```bash
opam install coq.8.9.0
```

### Install CoqIDE

```bash
sudo apt install libgtksourceview2.0-dev
opam install coqide.8.9.0
```
