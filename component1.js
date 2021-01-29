// you may create a component for viewzavr
// which will be usable both from javascript and visual interface

// here we add record to a table of visual components
export function register( vz ) {
  vz.addItemType( "my-test-component-type-id","My test component", function( opts ) {
    return create( vz, opts );
  } );
}

// this is the real component code usable from js
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
