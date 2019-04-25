//Global variables
var container, stats;
var scene, camera, renderer;
var geometry1,geometry2, material,material2,material4,material5,mesh,mesh2,mesh8,mesh9,mesh10;
var light1,light2;
var controls;
var geometry5,material3,mesh11,geometry6,mesh12,material7;
var texture5,material5,texture6,material6;
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
                texture5=new THREE.TextureLoader().load( 'image/s3.png' );
                    texture6=new THREE.TextureLoader().load( 'image/s3-1.png' );
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
          mesh2.position.set(0,-100,0);
          mesh2.position.z=-400;
          mesh2.rotation.y=3.5;
            mesh2.rotation.x=0.3;
              //mesh6.rotation.x=0.3;
          scene.add(mesh2);
          objects.push(mesh2);
        });
      });
      var mtlLoader3 = new THREE.MTLLoader();

      mtlLoader3.load("model/he.mtl", function(materials3){
      materials3.preload();

        var objLoader3 = new THREE.OBJLoader();
        objLoader3.setMaterials(materials3);

          objLoader3.load("model/he.obj", function(mesh3){
            mesh3.traverse(function(node){
              if( node instanceof THREE.Mesh ){
                node.castShadow = true;
                node.receiveShadow = true;
              }
            });
            var sizeRand = Math.random() * 0.5;
            mesh3.scale.set(3,3,3);
            mesh3.position.set(-600,50,0);
            mesh3.position.z=-800;
            mesh3.rotation.y=5.5;
              mesh3.rotation.x=0.3;
                //mesh6.rotation.x=0.3;
            scene.add(mesh3);
          });
        });
        var mtlLoader4= new THREE.MTLLoader();

        mtlLoader4.load("model/menkou4.mtl", function(materials4){
        materials4.preload();

          var objLoader4 = new THREE.OBJLoader();
          objLoader4.setMaterials(materials4);

            objLoader4.load("model/menkou4.obj", function(mesh4){
              mesh4.traverse(function(node){
                if( node instanceof THREE.Mesh ){
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });
              var sizeRand = Math.random() * 0.5;
              mesh4.scale.set(25,15,20);
              mesh4.position.set(-200,-100,0);
              mesh4.position.z=-750;
              mesh4.rotation.y=1.6;
                mesh4.rotation.x=0.3;
                  //mesh6.rotation.x=0.3;
              scene.add(mesh4);
            });
          });
          var mtlLoader5= new THREE.MTLLoader();

          mtlLoader5.load("model/nainai.mtl", function(materials5){
          materials5.preload();

            var objLoader5 = new THREE.OBJLoader();
            objLoader5.setMaterials(materials5);

              objLoader5.load("model/nainai.obj", function(mesh5){
                mesh5.traverse(function(node){
                  if( node instanceof THREE.Mesh ){
                    node.castShadow = true;
                    node.receiveShadow = true;
                  }
                });
                var sizeRand = Math.random() * 0.5;
                mesh5.scale.set(3,3,3);
                mesh5.position.set(100,80,0);
                mesh5.position.z=-800;
                mesh5.rotation.y=4;
                  mesh5.rotation.x=0.3;
                    //mesh6.rotation.x=0.3;
                scene.add(mesh5);
                objects.push(mesh5);
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
      geometry4= new THREE.PlaneGeometry(250, 180);
      geometry5= new THREE.PlaneGeometry(2000,800);
      geometry6 = new THREE.PlaneGeometry(100, 100);

  material = new THREE.MeshBasicMaterial( { color: "#ffffff" } );
  material2 = new THREE.MeshBasicMaterial( { map:texture, color: "#ffffff" } );
  material3 = new THREE.MeshBasicMaterial( { map:texture2, color: "#ffffff" } );
    material4 = new THREE.MeshBasicMaterial( { map:texture3, transparent:true } );
      material5 = new THREE.MeshBasicMaterial( { map:texture4,transparent:true  } );
      material6 =  new THREE.MeshBasicMaterial( { map:texture5,transparent:true  } );
      material7=new THREE.MeshBasicMaterial( { map:texture6,transparent:true  } );



  mesh1 = new THREE.Mesh( geometry1, material );
  mesh1.position.set(1,1,1);
  mesh1.position.z = -1000;
  mesh1.rotation.x=2;


mesh8 = new THREE.Mesh( geometry3, material4 );
mesh8.userData = { URL: "scene2.html"};// one of the button
mesh8.position.set(-50,-70,-300);
mesh9 = new THREE.Mesh( geometry3, material5 );
mesh9.position.set(50,-70,-300);
mesh9.userData = { URL: "scene4.html"};// one of the button

mesh10 = new THREE.Mesh( geometry4, material6 );
mesh10.position.set(-100,100,-500);
mesh11 = new THREE.Mesh( geometry5, material3 );
mesh11.position.set(0,300,-1500);// the background
mesh12 = new THREE.Mesh( geometry6, material7 );
mesh12.position.set(50,50,-300);

scene.add(mesh10);
scene.add( mesh8 );
scene.add( mesh9 );
scene.add(mesh11);
//scene.add(mesh12);

  //scene.add( mesh1 );
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
  console.log(event.clientX);
  console.log(event.clientY);
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects(   objects,true );
if
( intersects.length>0&&event.clientX <1200&&event.clientY<600) {
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
// when you click on the button you can go to another scene
  }

}

var render = function () {
  requestAnimationFrame( render );

  renderer.setClearColor("#3B454F");

  // Render the scene
  renderer.render(scene, camera);
};
function animate() {
   requestAnimationFrame( animate );
  renderer.render( scene, camera );}



init();
geometry();
render();
