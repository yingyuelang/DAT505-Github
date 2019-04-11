//Global variables
var scene, camera, renderer,texture,texture2,texture3,texture4;
var geometry1,geometry2,geometry3,geometry4,geometry5,geometry6, material,material2,
material3,material4,material5,material6, mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7;
var mouseX = 0, mouseY = 0;
 var particles = [];

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});
 texture=new THREE.TextureLoader().load( 'textures/zqb.png' );
 texture2=new THREE.TextureLoader().load( 'textures/bg.png' );
 texture3=new THREE.TextureLoader().load( 'textures/sample.png' );
  texture4=new THREE.TextureLoader().load( 'textures/sphere1.png' );
;

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  geometry1 = new THREE.PlaneGeometry(380, 530);
  material = new THREE.MeshBasicMaterial({
    map:texture,
  transparent:true
} );
  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.z = -1000;
  scene.add( mesh1 );


  geometry2 = new THREE.SphereGeometry(380, 2,2,);
  material2 = new THREE.MeshNormalMaterial({wireframe:true,color:"#affff7"
} );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1150;
  mesh2.position.y = 30;
  scene.add( mesh2 );

  geometry3 = new THREE.PlaneGeometry(2500,2000);
  material3 = new THREE.MeshBasicMaterial({map:texture2
} );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1600;
  scene.add( mesh3 );

  geometry4 = new THREE.PlaneGeometry(200,130);
  material4 = new THREE.MeshBasicMaterial({map:texture3,  transparent:true
  } );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -500;
  mesh4.position.x = 0;
  mesh4.position.y = -100;

  scene.add( mesh4);

  geometry5 = new THREE.SphereGeometry(250,200,200);
  material4 = new THREE.MeshNormalMaterial({opacity: 0.5,transparent:true});
  mesh5 = new THREE.Mesh( geometry5, material4 );
  mesh5.position.z = -1300;
  //mesh4.position.x = -200;
  //mesh4.position.y = 100;

  scene.add( mesh5);

  geometry6 = new THREE.SphereGeometry(150,200,200);
  material5 = new THREE.MeshBasicMaterial({opacity: 0.8,transparent:true,map:texture4});
  mesh6 = new THREE.Mesh( geometry6, material5 );
  mesh6.position.z = -1200;
    mesh6.position.x = -200;
      mesh6.position.y = 200;
  scene.add( mesh6);

  geometry7 = new THREE.SphereGeometry(50,200,200);
  material6 = new THREE.MeshBasicMaterial({opacity: 0.8,transparent:true,map:texture4});
  mesh7 = new THREE.Mesh( geometry7, material6 );
  mesh7.position.z = -1200;
    mesh7.position.x = 300;
      mesh7.position.y = -200;
  scene.add( mesh7);
}


// Render Loop
var render = function () {
  requestAnimationFrame( render );

  //mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.01;
  mesh2.rotation.z += 0.01;




  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};


init();
geometry();
render();
