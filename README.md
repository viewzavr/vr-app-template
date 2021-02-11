# vr-app-template
A template for running your new Viewzavr app / package. It uses [Viewzavr system A](https://github.com/viewzavr/viewzavr-system-a).

# Usage

Use this repo as a `template`, and place your code into `app.js` file.

# Running

## Option 1 - viewzavr-hosted player
You may use [viewzavr-hosted player](http://viewlang.ru/viewzavr-apps/viewzavr-system-a/player/) to run your app.
Run player with `src` parameter:
* http://viewlang.ru/viewzavr-apps/viewzavr-system-a/player/?src=path-to-your-app.js

Suboptions for serving app.js:
* Use uour own server for app.js. Don't forget to configure CORS headers!
* Use cdns like https://www.jsdelivr.com. For example, current app may be loaded in a such way:
http://viewlang.ru/viewzavr-apps/viewzavr-system-a/player/?src=https://cdn.jsdelivr.net/gh/viewzavr/vr-app-template@main/app.js
* Use Viewzavr experimental feature to proxy github files. Example:
http://viewlang.ru/viewzavr-apps/viewzavr-system-a/player/?src=https://github.com/viewzavr/vr-app-template/blob/main/app.js

## Option 2 - own server for html and app.js
Use `index-viewzavr-remote.html` as a template. This file uses viewzavr codes hosted on viewzavr server.

This option gives you control over html. You do not need to configure CORS.

## Option 3 - 100% own
Use `index-viewzavr-own.html` as a template. Before using it, add viewzavr as a submodule to your project:
```
git submodule add git@github.com/viewzavr/viewzavr-system-a
```

This option gives you full control over everything, but requires you to update viewzavr system time to time.

## license

2021+ (c) Pavel Vasev. This template is available with MIT license. Your app license is up to you.
