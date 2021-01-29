// viewzavr module

// module may contain `setup` function, which may add records to a table of visual components, used by visual interface
export function setup( vz ) {
  vz.addItemType( "my-test-component-type-id","My test component", function( opts ) {
    return create( vz, opts );
  } );
}

// the component js code
export function create( vz, opts ) {
  var obj = vz.create_obj( {}, opts );

  var pts = vz.vis.addPoints( obj );
  pts.positions = [1,2,3, 1,2,5, 1,3,12];

  var lins = vz.vis.addLines( obj );
  lins.positions = [1,2,3, 1,2,5, 1,2,5, 1,3,12];

  return obj;
}
