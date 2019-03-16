
var scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#000000");

renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

var geometry = new THREE.CylinderGeometry(10, 10, 10);//zhengduobianxing
var geometry2 = new THREE.BoxGeometry(135,20,135);//zhengfangxiang
var geometry3 = new THREE.TorusGeometry( 80, 2, 16, 100 );
var geometry4 = new THREE.BoxGeometry( 3000, 50,300);//changtiao
var geometry5 = new THREE.BoxGeometry(500,20,500);//dafangkuai
var geometry6 = new THREE.SphereGeometry(350,20,200);
var geometry7 = new THREE.TorusGeometry( 60,2, 16, 100 );
var geometry8 = new THREE.BoxGeometry(800,800,800);
var geometry9 = new THREE.TorusGeometry( 110, 2, 16, 100 );
var geometry10 = new THREE.BoxGeometry(950,950,950);
var geometry11 = new THREE.BoxGeometry(1100,1100,1100);

var texture =  new THREE.TextureLoader().load( 'textures/77.jpg' );
var texture2 =  new THREE.TextureLoader().load( 'textures/55.jpg' );
var texture3 =  new THREE.TextureLoader().load( 'textures/33.jpg' );
var texture4 =  new THREE.TextureLoader().load( 'textures/1123.jpg' );


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
var material3 = new THREE.MeshBasicMaterial({color:"#428181"});
var material4 = new THREE.MeshBasicMaterial({color:"#9B9B9B"});
var material5 = new THREE.MeshBasicMaterial({color:"#F59797"});
var material6 = new THREE.MeshBasicMaterial({color:"#FFFF9B"});
var material7 = new THREE.MeshBasicMaterial({color:"#92FFA4"});
var material8 = new THREE.MeshBasicMaterial({map:texture4});
var material9 = new THREE.MeshBasicMaterial({color:"#ffffff"});
var material10 = new THREE.MeshBasicMaterial({color:"#757575"});
var material11 = new THREE.MeshBasicMaterial({color:"#656565"});







var mesh1 = new THREE.Mesh( geometry, material9);
mesh1.position.z = -800;
mesh1.position.x =0;
mesh1.position.y =0;
mesh1.rotation.x = 1.55;
var mesh2 = new THREE.Mesh( geometry4, material4);
mesh2.position.z = -1300;
mesh2.position.x =0;
mesh2.position.y =0;

var mesh3 = new THREE.Mesh( geometry2, material3);
mesh3.position.z = -1100;
mesh3.position.x =0;
mesh3.position.y =0;
mesh3.rotation.x = 1.55;
var mesh4 = new THREE.Mesh( geometry3, material9);
mesh4.position.z = -800;
mesh4.position.x =0;
mesh4.position.y =0;
//mesh4.rotation.x = 1.55;
var mesh5 = new THREE.Mesh( geometry5, material5);
mesh5.position.z = -1400;
mesh5.position.x =0;
mesh5.position.y =0;
mesh5.rotation.x = 1.55;
var mesh6= new THREE.Mesh( geometry6, material8);
mesh6.position.z = -1400;
mesh6.position.x =0;
mesh6.position.y =0;
mesh6.rotation.x = 1.55;
var mesh7= new THREE.Mesh( geometry7, material9);
mesh7.position.z = -500;
mesh7.position.x =0;
mesh7.position.y =0;
//mesh7.rotation.x = 1.55;
var mesh7= new THREE.Mesh( geometry7, material9);
mesh7.position.z = -500;
mesh7.position.x =0;
mesh7.position.y =0;
var mesh8= new THREE.Mesh( geometry8, material9);
mesh8.position.z = -1800;
mesh8.position.x =0;
mesh8.position.y =0;
mesh8.rotation.z=0.80;
var mesh9= new THREE.Mesh( geometry9, material4);
mesh9.position.z = -800;
mesh9.position.x =0;
mesh9.position.y =0;
var mesh10= new THREE.Mesh( geometry10, material10);
mesh10.position.z = -2000;
mesh10.position.x =0;
mesh10.position.y =0;
mesh10.rotation.z=0.80;
var mesh11= new THREE.Mesh( geometry11, material11);
mesh11.position.z = -2200;
mesh11.position.x =0;
mesh11.position.y =0;
mesh11.rotation.z=0.80;


scene.add(mesh1);
scene.add(mesh2);
scene.add(mesh3);
scene.add(mesh4);
scene.add(mesh5);
scene.add(mesh6);
scene.add(mesh7);
scene.add(mesh8);
scene.add(mesh9);
scene.add(mesh10);
scene.add(mesh11);



/*var group = new THREE.Group();
group.add(mesh1);
group.add(mesh2);
scene.add(group);

function changePivot(0,0,-1000,group){
  let wrapper = new THREE.Object3D();
  wrapper.position.set(0,0,-1000,group);
  wrapper.add(group);
  obj.position.set(0,0,1000);
  return wrapper;
}*/

//var mesh13 = new THREE.Mesh(geometry2, material6);
//mesh13.position.z = -2500;
// ------------------------------------------------

// Add mesh to scene

//scene.add(mesh13);

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

mesh1.rotation.y += 0.01;
//mesh2.rotation.y += 0.01; //Continuously rotate the mesh
mesh3.rotation.y -= 0.01;
mesh4.rotation.y += 0.02;
mesh5.rotation.y += 0.03;
mesh6.rotation.y += 0.01;
mesh7.rotation.x += 0.03;
mesh9.rotation.y += 0.01;
mesh9.rotation.x += 0.01;



  // Render the scene
  renderer.render(scene, camera);
};
render(); //Run the function render
