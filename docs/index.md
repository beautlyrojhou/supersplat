# SuperSplat User Guide

Welcome to the SuperSplat User Guide.

SuperSplat is an open source, browser-based 3D Gaussian Splat Editor. You can use it to view, inspect, transform, combine, crop, clean up and optimize 3D Gaussian Splats.

## Installing SuperSplat

SuperSplat is a web app so you do not need to install it. Simply point your browser at:

https://playcanvas.com/supersplat/editor

However, for your convenience, you can also install SuperSplat as a PWA (Progressive Web App). This will make SuperSplat appear and behave more like a native application. An app icon for SuperSplat will be generated on your desktop or home screen. Furthermore, .ply files will be associated with the SuperSplat PWA, enabling you to launch SuperSplat more quickly.

## Loading Splats

SuperSplat loads splats from .ply files. Only .ply files containing 3D Gaussian Splat data can be loaded. If you attempt to load any other type of data from a .ply file, it will fail.

There are three ways that you can load a .ply file:

1. Drag and drop one or more .ply files from your file system into SuperSplat's client area.
2. Select the `Scene` > `Open` menu item and select one or more .ply files from your file system.
3. Use the `load` query parameter. This is in the form: `https://playcanvas.com/supersplat/editor?load=<PLY_URL>`. An example would be:

    https://playcanvas.com/supersplat/editor?load=https://raw.githubusercontent.com/willeastcott/assets/main/dragon.compressed.ply

    This is a useful mechanism for sharing splats with other people (say on social platforms like X and LinkedIn).

## Saving Splats

To save the currently loaded scene, select the `Scene` > `Save` or `Save As` menu items. This will save a `.ply` file to your file system.

SuperSplat can also export to two additional formats via the `Scene` > `Export` sub-menu:

* **Compressed Ply**: A lightweight, compressed format that is far smaller than the equivalent uncompressed .ply file. It quantizes splat data and drops spherical harmonics from the output file. See [this article](https://blog.playcanvas.com/compressing-gaussian-splats/) for more details on the format.
* **Splat File**: Another compressed format, although not as efficient as the compressed ply format.

## Controlling the Camera

The camera controls in SuperSplat are as follows:

| Control                                         | Description                     |
| ----------------------------------------------- | ------------------------------- |
| Left Mouse Button<br>Shift + Right Mouse Button | Orbit camera                    |
| Middle Mouse Button<br>Alt + Right Mouse Button | Dolly camera                    |
| Right Mouse Button                              | Pan camera                      |
| Left/Right Arrow Keys                           | Strafe camera left/right        |
| Up/Down Arrow Keys                              | Dolly camera forwards/backwards |
| F Key                                           | Frame selection                 |
| Scroll Wheel                                    | Dolly camera forwards/backwards |

> **Note (personal):** On a trackpad, two-finger scroll maps to the scroll wheel for dollying, and pinch-to-zoom also works well for quick framing.
