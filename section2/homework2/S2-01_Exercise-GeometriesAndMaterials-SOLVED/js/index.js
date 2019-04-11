
var scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#7A5B7A");

renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
var x = 0, y = 0;

var heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

var geometry3 = new THREE.ShapeGeometry( heartShape );

var geometry = new THREE.SphereGeometry(40, 5, 5);
var geometry2 = new THREE.PlaneGeometry(3000,2000);
var geometry4 = new THREE.TorusGeometry( 80, 5, 16, 100 );

var texture =  new THREE.TextureLoader().load( 'textures/77.jpg' );
var texture2 =  new THREE.TextureLoader().load( 'textures/55.jpg' );
var texture3 =  new THREE.TextureLoader().load( 'textures/33.jpg' );
var texture4 =  new THREE.TextureLoader().load( 'textures/bg.jpg' );


var material = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
var material2 = new THREE.MeshNormalMaterial();
var material3 = new THREE.MeshBasicMaterial({map:texture});
var material4 = new THREE.MeshBasicMaterial({map:texture2});
var material5 = new THREE.MeshBasicMaterial({map:texture3});
var material6 = new THREE.MeshBasicMaterial({map:texture4});




var mesh1 = new THREE.Mesh( geometry3, material3 );
mesh1.position.z = -1000;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry4, material4 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry4, material5 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;

var mesh4 = new THREE.Mesh( geometry4, material4);
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry4, material3 );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry3, material3 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

var mesh7 = new THREE.Mesh( geometry, material4 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry4, material4 );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry, material5 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry4, material5 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;

var mesh11 = new THREE.Mesh( geometry4, material4 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry4, material3 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;

//var mesh13 = new THREE.Mesh(geometry2, material6);
//mesh13.position.z = -2500;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
//scene.add(mesh13);

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;



  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
