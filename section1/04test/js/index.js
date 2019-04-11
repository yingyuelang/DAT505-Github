//Global variables
var scene, camera, renderer;
var geometry1,geometry2, material,material2, mesh1,mesh2;
var light1, light2;

function init(){
    scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor("#000000");
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

}


function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.SphereGeometry(200, 5, 5);
  material = new THREE.MeshNormalMaterial({color:"#ff00ff"} );
  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.set(0,0,0);
  mesh1.position.z = -1000;
  scene.add( mesh1 );
  material2 = new THREE.MeshLambertMaterial({
    color: '#D2BE82',
    lightMap: null,
    lightMapIntensity: 1,
    emissive: 0x000000,
    emissiveMap: null,
    emissiveIntensity: 1,
    specularMap: null
  });
  light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  light2 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light2);



}

var render = function () {
  requestAnimationFrame( render );
  mesh1.rotation.x += 0.01;
  mesh1.rotation.y += 0.01;
  //mesh2.rotation.x += 0.02;
  //mesh2.rotation.y += 0.02;
  renderer.setClearColor("#2A3867");
  renderer.render(scene, camera);
};


init();
geometry();
render();
