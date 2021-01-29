# vr-app
A template for creating new viewzavr apps and components.

## instruction

Clone this repo, and add your code.
* `index.html` is an entry point to the web. It setups required environment and calls `app.js`.
* `app.js` is your application code.
* `component1.js` is your example component.

## license

This template is available with MIT license. Your app license is up to you.

## copyright

2020 Pavel Vasev

# example codes for app.js

## add points component
A points graphical object will be added to the scene with specified point coordinates.
```
var pts = vz.vis.addPoints();
pts.positions = [1,2,3, 1,2,5, 1,3,12];
```

## add lines component
A lines graphical object will be added to the scene with specified point coordinates.
```
var lins = vz.vis.addLines();
lins.positions = [1,2,3, 1,2,5, 1,2,5, 1,3,12];
```

## add your custom component
Your custom object will be added to the scene.
```
import * as comp1 from "./component1.js";
var obj = comp1.create( vz );
```

## register your component in visual interface
A user will be able add your custom object to a scene via visual interface.
```
import * as comp1 from "./component1.js";
comp1.register( vz );
```
