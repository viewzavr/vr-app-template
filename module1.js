// viewzavr module contains a list of components (0 or more)

// here we add record to a table of visual components
export function setup( vz ) {
  vz.addItemType( "my-test-component-type-id","My test component", function( opts ) {
    return create( vz, opts );
  } );
  // you may add many components in 1 module
}

// this is real component code usable right from js
// you may give an arbitrary name to this function
export function create( vz, opts ) {
  var obj = vz.create_obj( {}, opts );

  var pts = vz.vis.addPoints( obj );
  pts.positions = [1,2,3, 3,3,5, 2,2,7];

  obj.addSlider( "alfa",0,0,100,1,function(v) {
  });

  obj.addCmd( "go", function() {
  });

  return obj;
}
