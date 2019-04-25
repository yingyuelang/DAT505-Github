//Global variables
var container, stats;
var scene, camera, renderer;
var geometry1,geometry2, material,material, mesh,mesh2,mesh8,mesh9,mesh10;
var light1,light2;
var geometry5,material3,mesh11,material4;
var texture, texture2,texture3,texture4;
var controls;
var texture5,material5,mesh12,mesh13;
var geometry6,geometry7;
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
    texture5=new THREE.TextureLoader().load( 'image/s2.png' );
    texture6=new THREE.TextureLoader().load( 'image/s2-1.png' );
    texture7=new THREE.TextureLoader().load( 'image/s2-2.png' );
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
        mesh.position.set(0,-100,0);
        mesh.position.z=-1000;
        mesh.rotation.x=0.2;
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
          mesh2.scale.set(3,3,3);
          mesh2.position.set(-100,-100,0);
          mesh2.position.z=-800;
          mesh2.rotation.y=5.5;

          scene.add(mesh2);
          objects.push(mesh2);
        });
      });
      var mtlLoader3 = new THREE.MTLLoader();

      mtlLoader3.load("model/xianhe.mtl", function(materials3){
      materials3.preload();

        var objLoader3 = new THREE.OBJLoader();
        objLoader3.setMaterials(materials3);

          objLoader3.load("model/xianhe.obj", function(mesh3){
            mesh3.traverse(function(node){
              if( node instanceof THREE.Mesh ){
                node.castShadow = true;
                node.receiveShadow = true;
              }
            });
            var sizeRand = Math.random() * 0.5;
            mesh3.scale.set(3,3,3);
            mesh3.position.set(200,-100,0);
            mesh3.position.z=-800;
            mesh3.rotation.y=0.5;
              mesh3.rotation.x=0.3;

            scene.add(mesh3);
            objects.push(mesh3);
          });
        });
                // to load the model
  document.body.appendChild( renderer.domElement );
  document.addEventListener( "mousedown", onDocumentMouseDown, false );
 document.addEventListener( "mousemove", onDocumentMouseMove, false );
 window.requestAnimationFrame(render);

}

function geometry(){
  geometry1 = new THREE.BoxGeometry(500, 500, 10);
  geometry3 = new THREE.PlaneGeometry(50, 50);
  geometry4= new THREE.PlaneGeometry(300, 150);
  geometry5= new THREE.PlaneGeometry(2000,800);
  geometry6= new THREE.PlaneGeometry(100,100);

  material = new THREE.MeshBasicMaterial( { color: "#ffffff" } );

  material2 = new THREE.MeshBasicMaterial( { map:texture2 , transparent:true} );
  material3 = new THREE.MeshBasicMaterial( { map:texture3, transparent:true } );
  material4 = new THREE.MeshBasicMaterial( { map:texture4 , transparent:true} );
  material5 = new THREE.MeshBasicMaterial( { map:texture5 , transparent:true} );
  material6 = new THREE.MeshBasicMaterial( { map:texture6 , transparent:true} );
  material7 = new THREE.MeshBasicMaterial( { map:texture7 , transparent:true} );

  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.set(1,1,1);
  mesh1.position.z = -1000;
  mesh1.rotation.x=2;

    mesh8 = new THREE.Mesh( geometry3, material3 );
    mesh8.userData = { URL: "scene1.html"};// one of the button
    mesh8.position.set(-50,-70,-300);
    mesh9 = new THREE.Mesh( geometry3, material4 );
    mesh9.position.set(50,-70,-300);
    mesh9.userData = { URL: "scene3.html"};// one of the button
    mesh10 = new THREE.Mesh( geometry4, material5 );
    mesh10.position.set(180,100,-500);
    mesh11 = new THREE.Mesh( geometry5, material2 );
    mesh11.position.set(0,300,-1300);// the background
    mesh12 = new THREE.Mesh( geometry6, material6 );
    mesh12.position.set(150,0,-500);
    mesh13 = new THREE.Mesh( geometry6, material7 );
    mesh13.position.set(-100,50,-500);
scene.add( mesh8 );
scene.add( mesh9 );
scene.add(mesh10);
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
  //scene.add(mesh3);
  console.log("x:"+event.clientX);
  console.log("y:"+event.clientY);
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects(   objects,true );
if
( intersects.length>0&&event.clientX <800) {
 scene.add(mesh13);}else if
   (intersects.length>0&&800<event.clientX <1000&&800<event.clientY<1200)
{scene.add(mesh12)}
else {scene.remove(mesh12,mesh13)}

}
//make sure there will be different  lines appear when the mouse move on different objects
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



  renderer.setClearColor("#ffffff");

  // Render the scene
  renderer.render(scene, camera);
};
function animate() {
   requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );}

init();
geometry();
render();
