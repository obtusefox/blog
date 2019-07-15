---
title:  "Setup Debian WSL on Windows"
date:   2019-07-13 17:41:43
description: Install and setup debian for WSL on Windows
category: devs
tags: [devs, wsl, debian]
---

### Prerequisite

Windows 10 Version 16215.0 or higher (most Windows 10 machines meet this standard)

### Turn on Required Windows Features

#### Turn on Developer Mode

Go to windows settings and turn on Developer mode

1. After hitting `win` key, or in `settings` search for `Developer settings`
2. Turn on `Developer mode`
3. Reboot

#### Turn on WSL

In PowerShell, run:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

### Install Debian in Microsoft Store

In Windows Store, search for "debian" and install [Debian](https://www.microsoft.com/store/apps/9MSVKQC78PK6).
Why Debian? Acutally not much reasons. I've chosen Debain as it "feels"(I don't have any concrete evidence) more stable for me. Then, run Debian from the start menu, follow the instructions.

### Upgrade to Buster (Debian 10)

In Debian shell, run

```bash
sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list
```

then

```bash
sudo apt update
sudo apt upgrade
```

Done.

### Change mirror

As I'm currently in Korea, I changed the mirror to Korea.

```bash
sudo sed -i 's/deb.debian/ftp.kr.debian/g' /etc/apt/sources.list  
```

put desired mirror in `ftp.kr.debian`.

### Setup X-Window Gui Environment

Now, to run GUI applications, we need to install Windows X-server.

Install [VcXsrv](https://sourceforge.net/projects/vcxsrv/) and run X-server. No additional settings required.

```bash
sudo systemd-machine-id-setup
sudo dbus-uuidgen --ensure
```

```bash
sed -e "\$aexport DISPLAY=:0" ~/.bashrc
source ~/.bashrc
```

Now, you are ready to run GUI apps for WSL.

### Setup Visual Studio Code for WSL

Install [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) in VSCode, press `F1`(command shortcut) and search for `Remote-WSL: New Window` and run it.

VSCode will install required files in WSL. In the remote WSL window, you can run and edit files in WSL. Done!

### References

[What's the easiest way to run GUI apps on Windows Subsystem for Linux as of 2018?](https://askubuntu.com/questions/993225/whats-the-easiest-way-to-run-gui-apps-on-windows-subsystem-for-linux-as-of-2018)
[SED: insert text after the last line?](https://unix.stackexchange.com/questions/20573/sed-insert-text-after-the-last-line)
[Microsoft Docs](https://docs.microsoft.com/en-gb/windows/wsl/install-win10)
[VS Code Docs](https://code.visualstudio.com/docs/remote/remote-overview)
