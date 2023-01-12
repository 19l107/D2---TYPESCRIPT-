interface Object {
    x: "String";
    y: boolean;
    z: number;
  }
  
  function printCoord(pt: Object) {
    console.log("Title : " + pt.x);
    console.log("boolean_type " + pt.y);
    console.log("ID Number"+ pt.z);

  }
  
  printCoord({x: "It's Ends with us", y: true, z: 1});