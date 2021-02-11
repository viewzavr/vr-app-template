# vr-app
A template for running your new Viewzavr apps and packages. It uses [Viewzavr system A](https://github.com/viewzavr/viewzavr-system-a).

## Usage

Clone this repo, and add your code.
* `index.html` is an entry point to the web. It setups required environment and calls `create` function of `app.js`.
* `app.js` is your application code in a viewzavr package form. Provide your app code in `create` function.

## Viewzavr codes hosting
This app template uses codes hosted by Viewzavr server. If you want to host them by yourself, you may:
1. Add `git@github.com/viewzavr/viewzavr-system-a` as a submodule to your project, and
2. Change links to loaded resources in `index.html` file.

## license

2021+ (c) Pavel Vasev. This template is available with MIT license. Your app license is up to you.
