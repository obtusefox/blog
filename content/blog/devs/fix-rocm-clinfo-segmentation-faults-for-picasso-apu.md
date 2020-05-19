---
title: Fix ROCM clinfo Segmentation Faults on Picasso APUs
date: 2020-05-17 14:05:73
category: devs
---

I don't know if it applies to all Picasso APUs,
but there were some problems present for me on a laptop that uses 3500U.
Fix it by installing ROCM 2.9.0, instead of the current(3.3.0 of now) version.
Try running below commands one by one.

```shell
wget -qO - http://repo.radeon.com/rocm/apt/2.9.0/rocm.gpg.key | sudo apt-key add -

sudo sh -c 'echo "deb [arch=amd64] http://repo.radeon.com/rocm/apt/2.9.0/ xenial main" >> /etc/apt/sources.list.d/rocm.list'

sudo usermod -a -G video $LOGNAME
echo 'ADD_EXTRA_GROUPS=1' | sudo tee -a /etc/adduser.conf
echo 'EXTRA_GROUPS=video' | sudo tee -a /etc/adduser.conf

/opt/rocm/bin/rocminfo
/opt/rocm/opencl/bin/x86_64/clinfo

echo 'export PATH=$PATH:/opt/rocm/bin:/opt/rocm/profiler/bin:/opt/rocm/opencl/bin/x86_64' |
sudo tee -a /etc/profile.d/rocm.sh

```
