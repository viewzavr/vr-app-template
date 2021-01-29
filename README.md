# vr-app
A template for creating new viewzavr apps.

## instruction

Clone this repo, and add your code to `app.js` file, and (or) to `component1.js`, or fix `index.html`.

## license

This template is available with MIT license. Your app license is up to you.

## copyright

2020 Pavel Vasev

# example codes for app.js

## add points component
```
var pts = vz.vis.addPoints();
pts.positions = [1,2,3, 1,2,5, 1,3,12];
```

## add lines component
```
var lins = vz.vis.addLines();
lins.positions = [1,2,3, 1,2,5, 1,2,5, 1,3,12];
```

## add your custom component
```
import * as comp1 from "./component1.js";
var obj = comp1.create( vz );
```

## register your component in visual interface
```
import * as comp1 from "./component1.js";
comp1.register( vz );
```