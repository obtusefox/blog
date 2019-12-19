---
title:  "Using MIDI output in Crostini"
date:   2019-07-01 15:44:34
description: Sound / MIDI output in crostini
category: devs
tags: [devs, crostini, chromeos, ukulele]
---

There was no midi output out of the box in TuxGuitar

## Sound output in Crostini

As of the current Chrome version, 76, sound output in Crostini works without tuing. However, some additional packages might be required, for example, alsamixer or something similar.

## MIDI output in Crostini

Just install timidity++,

```bash
sudo apt install timidity++
```

and after a reboot, it just works (but with some little bit of noise and glitching sounds).

For TuxGuitar, in Tools - Setting - Sound, change the midi port to TiMidity port 0.

Done. :)
