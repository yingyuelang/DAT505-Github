//Global variables
var container, stats;
var scene, camera, renderer;
var geometry1,geometry2, material,material2, mesh,mesh2,mesh8,mesh9,mesh10;
var light1,light2;
var geometry5,material3,mesh11;
var material4,material5;
var texture5, material6;
var texture3,texture4;
var texture6,geometry6,material7,mesh12;
var controls;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var objects = [];

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
    texture5=new THREE.TextureLoader().load( 'image/s6.png' );
      texture6=new THREE.TextureLoader().load( 'image/s6-1.png' );

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
          mesh2.scale.set(3,3,3);
          mesh2.position.set(0,-130,0);
          mesh2.position.z=-800;
          mesh2.rotation.y=6.5;
              //mesh6.rotation.x=0.3;
          scene.add(mesh2);
          objects.push(mesh2);
        });
      });
      var mtlLoader3 = new THREE.MTLLoader();

      mtlLoader3.load("model/house4.mtl", function(materials3){
      materials3.preload();

        var objLoader3 = new THREE.OBJLoader();
        objLoader3.setMaterials(materials3);

          objLoader3.load("model/house4.obj", function(mesh3){
            mesh3.traverse(function(node){
              if( node instanceof THREE.Mesh ){
                node.castShadow = true;
                node.receiveShadow = true;
              }
            });
            var sizeRand = Math.random() * 0.5;
            mesh3.scale.set(4,4,4);
            mesh3.position.set(-200,-100,0);
            mesh3.position.z=-800;
            mesh3.rotation.y=1.3;
              mesh3.rotation.x=0.1;
                //mesh6.rotation.x=0.3;
            scene.add(mesh3);
          });
        });
        var mtlLoader4 = new THREE.MTLLoader();

        mtlLoader4.load("model/nainai.mtl", function(materials4){
        materials4.preload();

          var objLoader4 = new THREE.OBJLoader();
          objLoader4.setMaterials(materials4);

            objLoader4.load("model/nainai.obj", function(mesh4){
              mesh4.traverse(function(node){
                if( node instanceof THREE.Mesh ){
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });
              var sizeRand = Math.random() * 0.5;
              mesh4.scale.set(3,3,3);
              mesh4.position.set(-20,0,0);
              mesh4.position.z=-550;
              mesh4.rotation.y=0;
                mesh4.rotation.x=0;
                  //mesh6.rotation.x=0.3;
              scene.add(mesh4);
              objects.push(mesh4);
            });
          });
          var mtlLoader5 = new THREE.MTLLoader();

          mtlLoader5.load("model/xianhe.mtl", function(materials5){
          materials5.preload();

            var objLoader5 = new THREE.OBJLoader();
            objLoader5.setMaterials(materials5);

              objLoader5.load("model/xianhe.obj", function(mesh5){
                mesh5.traverse(function(node){
                  if( node instanceof THREE.Mesh ){
                    node.castShadow = true;
                    node.receiveShadow = true;
                  }
                });
                var sizeRand = Math.random() * 0.5;
                mesh5.scale.set(2,2,2);
                mesh5.position.set(500,200,0);
                mesh5.position.z=-1200;
                mesh5.rotation.y=5;
                  mesh5.rotation.x=0.5;
                    //mesh6.rotation.x=0.3;
                scene.add(mesh5);
                objects.push(mesh5)
              });
            });


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
  geometry6=new THREE.PlaneGeometry(100,100);

  material = new THREE.MeshBasicMaterial( { color: "#ffffff" } );
  material2 = new THREE.MeshBasicMaterial( { map:texture, color: "#ffffff" } );
  material3 = new THREE.MeshBasicMaterial( { map:texture2, color: "#ffffff" } );
  material4= new THREE.MeshBasicMaterial( { map:texture3,transparent:true } );
  material5 = new THREE.MeshBasicMaterial( { map:texture4, transparent:true } );
  material6 = new THREE.MeshBasicMaterial( { map:texture5, transparent:true } );
material7 = new THREE.MeshBasicMaterial( { map:texture6, transparent:true } );

  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.set(1,1,1);
  mesh1.position.z = -1000;
  mesh1.rotation.x=2;


  mesh8 = new THREE.Mesh( geometry3, material4 );
  mesh8.userData = { URL: "scene5.html"};
  mesh8.position.set(-50,-70,-300);
  mesh9 = new THREE.Mesh( geometry3, material5 );
  mesh9.position.set(50,-70,-300);
  mesh9.userData = { URL: "index.html"};
  mesh10 = new THREE.Mesh( geometry4, material6 );
  mesh10.position.set(-180,100,-500);
  mesh11 = new THREE.Mesh( geometry5, material3 );
  mesh11.position.set(0,300,-1500);
  mesh12 = new THREE.Mesh( geometry6, material7 );
  mesh12.position.set(200,30,-500);
  scene.add(mesh10);
  scene.add( mesh8 );
  scene.add( mesh9 );
  scene.add(mesh11);

  //scene.add(mesh12);
  light1 = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(light1);

  light2 = new THREE.PointLight(0xffffff, 0.3);
  scene.add(light2);

}

function onDocumentMouseMove( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  //scene.add(mesh3);
  console.log(event.clientX);
  console.log(event.clientY);
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects(   objects,true );
if
( intersects.length>0&&event.clientX <1300&&event.clientY<600) {
 scene.add(mesh12);}
else {scene.remove(mesh12)}
}

function onDocumentMouseDown( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  //scene.add(mesh3);
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects( scene.children );
 if( intersects.length>0) {
   top.location =(intersects[0].object.userData.URL);
//  top.location ="homepage.html";
  //scene.add(mesh3);
  }

}

var render = function () {
  requestAnimationFrame( render );

  //mesh1.rotation.x += 0.01;
  //mesh1.rotation.y += 0.01;
  //mesh2.rotation.x += 0.05;
  //mesh2.rotation.y += 0.05;


  renderer.setClearColor("#3B454F");

  // Render the scene
  renderer.render(scene, camera);
};
function animate() {
   requestAnimationFrame( animate );     // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();
  renderer.render( scene, camera );}


init();
geometry();
render();
