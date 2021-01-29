// viewzavr app/module

// module may contain `setup` function, which may add records to a table of visual components, used by visual interface
export function setup( vz ) {
  vz.addItemType( "my-test-component-type-id","My test component", function( opts ) {
    return create( vz, opts );
  } );
}

// place your app code in this function
export function create( vz, opts ) {
  var obj = vz.create_obj( {}, opts );

  var pts = vz.vis.addPoints( obj );
  pts.positions = [1,2,3, 1,2,5, 1,3,12];

  var lins = vz.vis.addLines( obj );
  lins.positions = [1,2,3, 1,2,5, 1,2,5, 1,3,12];
  
  obj.addCmd( "click", function() {
    obj.signalTracked( "r" );
  });
  obj.addSlider("r",10,0,100,1,function() {
    var acc = []; var r = obj.getParam("r");
    for (var i=0; i<100; i++) acc.push( r*(Math.random()-0.5),r*(Math.random()-0.5),r*(Math.random()-0.5) );
    pts.positions = acc;
    lins.positions = acc;
  } );

  return obj;
}
