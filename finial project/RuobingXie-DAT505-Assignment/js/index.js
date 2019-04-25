//Global variables


var container, stats;
var scene, camera, renderer;
var geometry1,geometry2,geometry3,geometry4,geometry5,material,material2, mesh1,mesh2,mesh3,mesh8,mesh9,mesh10,mesh11;
var light1, light2;
var texture,texture2,texture5;
var material4,material3,material5,material6;
var controls;
var texture6,texture7;
var material7;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var objects = [];// to add the model into objects
function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );
  controls = new THREE.OrbitControls( camera );
  camera.position.set( 0, 0, 100 );
  controls.update();
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor("#000000");
  renderer.setSize( window.innerWidth, window.innerHeight );
  controls= new THREE.OrbitControls(camera,renderer.domElement);

  texture=new THREE.TextureLoader().load( 'image/1.jpg' );
  texture2=new THREE.TextureLoader().load( 'image/bg.jpg' );
  texture3=new THREE.TextureLoader().load( 'image/back.png' );
  texture4=new THREE.TextureLoader().load( 'image/next.png' );
  texture5=new THREE.TextureLoader().load( 'image/s1.png' );
  texture6=new THREE.TextureLoader().load( 'image/s1-1.png' );
  texture7=new THREE.TextureLoader().load( 'image/s1-2.png' );
  // to load the texture
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("model/nainai.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("model/nainai.obj", function(mesh){
  mesh.traverse(function(node){
  if( node instanceof THREE.Mesh ){
  node.castShadow = true;
  node.receiveShadow = true;
          }
        });
  var sizeRand = Math.random() * 0.5;
  mesh.scale.set(3,3,3);
  mesh.position.set(-700,120,-800);
  mesh.position.z=-1000;
  mesh.rotation.y=-1;
  mesh.rotation.x=0.11;
  scene.add(mesh);
  objects.push(mesh)
      });
    });
    var mtlLoader2 = new THREE.MTLLoader();
    mtlLoader2.load("model/menkou3.mtl", function(materials2){
    materials2.preload();

    var objLoader2 = new THREE.OBJLoader();
    objLoader2.setMaterials(materials2);
    objLoader2.load("model/menkou3.obj", function(mesh5){
    mesh5.traverse(function(node){

    if( node instanceof THREE.Mesh ){
    node.castShadow = true;
    node.receiveShadow = true;
            }
          });

    var sizeRand = Math.random() * 0.5;

    mesh5.scale.set(5,5,5);
    mesh5.position.set(-500,0,-800);
    mesh5.position.z=-1000;
    mesh5.rotation.y=1;
    mesh5.rotation.x=0.1;
    scene.add(mesh5);

        });
      });

      var mtlLoader3 = new THREE.MTLLoader();
      mtlLoader3.load("model/xuedi.mtl", function(materials3){
      materials3.preload();

      var objLoader3 = new THREE.OBJLoader();
      objLoader3.setMaterials(materials3);
      objLoader3.load("model/xuedi.obj", function(mesh6){
      mesh6.traverse(function(node){
      if( node instanceof THREE.Mesh ){
                node.castShadow = true;
                node.receiveShadow = true;
              }
            });
      var sizeRand = Math.random() * 0.5;
         mesh6.scale.set(12,9,12);
         mesh6.position.set(-80,-60,10);
         mesh6.position.z=-1000;
         mesh6.rotation.x=0.2;
          scene.add(mesh6);
          });
        });
        var mtlLoader4 = new THREE.MTLLoader();

        mtlLoader4.load("model/yeye.mtl", function(materials4){
        materials4.preload();

          var objLoader4 = new THREE.OBJLoader();
          objLoader4.setMaterials(materials4);

            objLoader4.load("model/yeye.obj", function(mesh7){
              mesh7.traverse(function(node){
                if( node instanceof THREE.Mesh ){
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });
              var sizeRand = Math.random() * 0.5;
              mesh7.scale.set(3,3,3);
              mesh7.position.set(0,-100,10);
              mesh7.position.z=-600;
              mesh7.rotation.y=5;

              scene.add(mesh7);
              objects.push(mesh7)
            });
          });
          // to load the model
document.body.appendChild( renderer.domElement );
document.addEventListener( "mousedown", onDocumentMouseDown, false );
document.addEventListener( "mousemove", onDocumentMouseMove, false );
window.requestAnimationFrame(render);

}


function geometry(){
  geometry = new THREE.PlaneGeometry(70, 70);
  geometry2 = new THREE.PlaneGeometry(100, 100);
  geometry3 = new THREE.PlaneGeometry(50, 50);
  geometry4= new THREE.PlaneGeometry(200,100);
  geometry5= new THREE.PlaneGeometry(2000,800);

  material = new THREE.MeshBasicMaterial( {  map:texture6,transparent:true } );
  material2 = new THREE.MeshBasicMaterial( { map:texture,transparent:true   } );
  material3 = new THREE.MeshBasicMaterial( { map:texture2, color: "#ffffff" } );
  material4 = new THREE.MeshBasicMaterial( { map:texture3,transparent:true } );
  material5 = new THREE.MeshBasicMaterial( { map:texture4,transparent:true } );
  material6= new THREE.MeshBasicMaterial( { map:texture5,transparent:true } );
    material7= new THREE.MeshBasicMaterial( {  map:texture7,transparent:true } );


  mesh1 = new THREE.Mesh( geometry, material7 );
  mesh1.position.set(80,80,-500);
  mesh2 = new THREE.Mesh( geometry, material );
  mesh2.position.set(-200,100,-500);

  mesh8 = new THREE.Mesh( geometry3, material4 );
  mesh8.userData = { URL: "index.html"};// one of the button
  mesh8.position.set(-50,-100,-300);
  mesh9 = new THREE.Mesh( geometry3, material5 );
  mesh9.position.set(50,-100,-300);
  mesh9.userData = { URL: "scene2.html"};// one of the button
  mesh10 = new THREE.Mesh( geometry4, material6 );
  mesh10.position.set(200,100,-400);
  mesh11 = new THREE.Mesh( geometry5, material3);
  mesh11.position.set(0,300,-1300);// the background


 scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );

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
if( intersects.length>0&&event.clientX <300&&event.clientY<600)
 {scene.add(mesh2);}
 else if
   (intersects.length>0&&250<event.clientX <400&&800<event.clientY<1200)
{scene.add(mesh1)}
else {scene.remove(mesh1,mesh2)}
//make sure there will be different  lines appear when the mouse move on different objects

}

function onDocumentMouseDown( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects( scene.children );
 if( intersects.length>0) {
   top.location =(intersects[0].object.userData.URL);
  }
// when you click on the button you can go to another scene
}


var render = function () {
  requestAnimationFrame( render );
  renderer.setClearColor("#000000");
  renderer.render(scene, camera);
};
function animate() {
   requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );}



init();
geometry();
render();
