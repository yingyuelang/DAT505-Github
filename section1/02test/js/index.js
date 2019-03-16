
var scene, camera, renderer;
var geometry,geometry2, material, mesh1,mesh2;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}
function gometry(){
  geometry = new THREE.BoxGeometry(200, 20, 10);
  material = new THREE.MeshBasicMaterial( { color: "#1f9f8b" } );
  mesh1 = new THREE.Mesh( geometry, material );
  mesh1.position.set(1,1,1);
  mesh1.position.z = -1000;
  scene.add( mesh1 );
}
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01;
  mesh1.rotation.y += 0.01;



  renderer.setClearColor("#000000");

  renderer.render(scene, camera);
};


init();
geometry();
render();
