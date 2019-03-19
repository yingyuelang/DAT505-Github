var scene, camera, renderer;
var p1, p2;
var geometry,material,mesh;

/*var de2ra =function(degree){
  return degree*(Math.PI/180);
};*/

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );


}
function geometry(){
geometry = new THREE.SphereGeometry(200,10,10);
material = new THREE.MeshNormalMaterial();
mesh= new THREE.Mesh(geometry,material);
mesh.position.set(0,0,0);
  light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);



}




// Render Loop
var render= function() {
  requestAnimationFrame( render );

//  mesh.rotation.x += 0.01;
//  mesh.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
