# vr-app
A template for running your new Viewzavr app / package. It uses [Viewzavr system A](https://github.com/viewzavr/viewzavr-system-a).

# Usage

Use this repo as a `template`, and place your code into `app.js` file.

# Running

## Option 1 - cloud based
You may use [viewzavr-hosted player](http://viewlang.ru/viewzavr-apps/viewzavr-system-a/player/) and you may use https://www.jsdelivr.com to load your app. For example, current app may be loaded in a such way:
* http://viewlang.ru/viewzavr-apps/viewzavr-system-a/player/?src=https://cdn.jsdelivr.net/gh/viewzavr/vr-app-template@main/app.js

This option has a drawback - jsdelivr.com caches files, so you have to change `@main` tag in url to more recent branches.

## Option 2 - own server for app.js
To run your app, use viewzavr-hosted player:
* http://viewlang.ru/viewzavr-apps/viewzavr-system-a/player/?src=path-to-your-app.js

This option allows easy development.

## Option 2 - own server for html and app.js, remote viewzavr
Use `index-viewzavr-remote.html` as a template. This file uses viewzavr codes hosted on viewzavr server.

This option gives you control over html.

## Option 3 - 100% own
Use `index-viewzavr-local.html` as a template. Before using it, add viewzavr as a submodule to your project:
```
git submodule add git@github.com/viewzavr/viewzavr-system-a
```

This option gives you 100 control over everything, but requires you to update viewzavr system time to time.

## license

2021+ (c) Pavel Vasev. This template is available with MIT license. Your app license is up to you.
