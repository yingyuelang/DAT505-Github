//Global variables
var container, stats;
var scene, camera, renderer;
var geometry1,geometry2, material,material2, mesh,mesh2,mesh8,mesh9,mesh10;
var light1,light2;
var geometry5,material3,mesh11;
var material4,material5,material6;
var texture3,texture4,texture5;
var controls;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var objects = [];// to add the model into objects
function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor("#000000");
  renderer.setSize( window.innerWidth, window.innerHeight );
  texture=new THREE.TextureLoader().load( 'image/1.jpg' );
  texture2=new THREE.TextureLoader().load( 'image/bg.jpg' );
  texture3=new THREE.TextureLoader().load( 'image/back.png' );
  texture4=new THREE.TextureLoader().load( 'image/next.png' );
    texture5=new THREE.TextureLoader().load( 'image/s5.png' );
  // to load the texture
  var mtlLoader = new THREE.MTLLoader();

  mtlLoader.load("model/xuedi.mtl", function(materials){
  materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);

      objLoader.load("model/xuedi.obj", function(mesh){
        mesh.traverse(function(node){
          if( node instanceof THREE.Mesh ){
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        var sizeRand = Math.random() * 0.5;
        mesh.scale.set(12,8,8);
        mesh.position.set(0,-180,0);
        mesh.position.z=-1000;
        mesh.rotation.x=0.2;
            //mesh6.rotation.x=0.3;
        scene.add(mesh);
      });
    });
    var mtlLoader2 = new THREE.MTLLoader();

    mtlLoader2.load("model/yeye.mtl", function(materials2){
    materials2.preload();

      var objLoader2 = new THREE.OBJLoader();
      objLoader2.setMaterials(materials2);

        objLoader2.load("model/yeye.obj", function(mesh2){
          mesh2.traverse(function(node){
            if( node instanceof THREE.Mesh ){
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });
          var sizeRand = Math.random() * 0.5;
          mesh2.scale.set(2,2,2);
          mesh2.position.set(-80,-80,0);
          mesh2.position.z=-700;
          mesh2.rotation.y=-6;
            mesh2.rotation.x=0.1;
              //mesh6.rotation.x=0.3;
          scene.add(mesh2);
        });
      });
      var mtlLoader3 = new THREE.MTLLoader();

      mtlLoader3.load("model/house3.mtl", function(materials3){
      materials3.preload();

        var objLoader3 = new THREE.OBJLoader();
        objLoader3.setMaterials(materials3);

          objLoader3.load("model/house3.obj", function(mesh3){
            mesh3.traverse(function(node){
              if( node instanceof THREE.Mesh ){
                node.castShadow = true;
                node.receiveShadow = true;
              }
            });
            var sizeRand = Math.random() * 0.5;
            mesh3.scale.set(20,17,17);
            mesh3.position.set(-600,-130,0);
            mesh3.position.z=-700;
            mesh3.rotation.y=1.8;
              mesh3.rotation.x=0.3;
                //mesh6.rotation.x=0.3;
            scene.add(mesh3);
          });
        });
                // to load the model
  document.body.appendChild( renderer.domElement );
  document.addEventListener( "mousedown", onDocumentMouseDown, false );
    document.addEventListener( "mousemove", onDocumentMouseMove, false );
 window.requestAnimationFrame(render);
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.BoxGeometry(500, 500, 10);
  geometry3 = new THREE.PlaneGeometry(50, 50);
  geometry4= new THREE.PlaneGeometry(300, 150);
  geometry5= new THREE.PlaneGeometry(2000,800);

  material = new THREE.MeshBasicMaterial( { color: "#ffffff" } );
  material2 = new THREE.MeshBasicMaterial( { map:texture, color: "#ffffff" } );
  material3 = new THREE.MeshBasicMaterial( { map:texture2, color: "#ffffff" } );
    material4= new THREE.MeshBasicMaterial( { map:texture3,transparent:true } );
      material5 = new THREE.MeshBasicMaterial( { map:texture4, transparent:true } );
        material6= new THREE.MeshBasicMaterial( { map:texture5, transparent:true } );


  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.set(1,1,1);
  mesh1.position.z = -1000;
  mesh1.rotation.x=2;


mesh8 = new THREE.Mesh( geometry3, material4 );
mesh8.userData = { URL: "scene4.html"};// one of the button
mesh8.position.set(-50,-70,-300);
mesh9 = new THREE.Mesh( geometry3, material5 );
mesh9.position.set(50,-70,-300);
mesh9.userData = { URL: "scene6.html"};// one of the button
mesh10 = new THREE.Mesh( geometry4, material6 );
mesh10.position.set(-200,110,-500);
mesh11 = new THREE.Mesh( geometry5, material3 );
mesh11.position.set(0,300,-1600);// the background
scene.add(mesh10);
scene.add( mesh8 );
scene.add( mesh9 );
scene.add(mesh11);

  light1 = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(light1);

  light2 = new THREE.PointLight(0xffffff, 0.3);
  scene.add(light2);
// the scene's light
}

function onDocumentMouseMove( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  console.log(event.clientX);
  console.log(event.clientY);
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects(   objects,true );
if
( intersects.length>0&&event.clientX <300&&event.clientY<600) {
 scene.add(mesh2);}else if
   (intersects.length>0&&250<event.clientX <400&&800<event.clientY<1200)
{scene.add(mesh1)}
else {scene.remove(mesh1,mesh2)}

}

function onDocumentMouseDown( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  //scene.add(mesh3);
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects( scene.children );
 if( intersects.length>0) {
   top.location =(intersects[0].object.userData.URL);
// when you click on the button you can go to another scene
  }

}

var render = function () {
  requestAnimationFrame( render );



  renderer.setClearColor("#3B454F");

  renderer.render(scene, camera);
};
function animate() {
   requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );}


init();
geometry();
render();
