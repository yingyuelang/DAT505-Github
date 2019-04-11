var renderer, scene, camera;
var controls;
var cubes=[];
var randomSpeedX=[];
var randomSpeedY=[];

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;
  controls= new THREE.OrbitControls(camera,renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 15; x +=5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -10; y <=15; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xffffff});
       //(var i= 0; i<= 100; i +=1){
    //cubes[i]= new THREE.Mesh(boxGeometry, boxMaterial);

    if(x==5&&y==5){
     boxMaterial = new THREE.MeshLambertMaterial({color:0x1aa687});
   }else if(x==-5&& y==-5){   boxMaterial = new THREE.MeshLambertMaterial({color:0x1aa687});}
    else{boxMaterial = new THREE.MeshLambertMaterial({color:0xffffff});}
        var box= new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
 box.position.x = x;
box.position.z = y;
    // mesh.position.z = z;vrr
        //  for (var j = 0; j<= 1; j +=0.01){
    //  box.rotation.x= 2;
    //box.rotation.y= 2;
      // box.rotation.z=2;
 var randomValueX = (Math.random()*0.1)-0.05;
            randomSpeedX.push(randomValueX);
           var randomValueY = (Math.random()*0.1)-0.05;
                randomSpeedY.push(randomValueY);



            /*mesh.rotation.x += 20*Math.random();
            mesh.rotation.z=50* Math.random();
            mesh.rotation.y=30*Math.random();*/
            /*for (var z= 0; z<= 1; z +=0.02){
                  mesh.rotation.y = z;}
              for (var a = 0; a<= 1; a +=0.01){
        mesh.rotation.z = a;
      }*/

      //scene.add(mesh);
        scene.add(box);
    cubes.push(box);


}
}





  document.body.appendChild(renderer.domElement);
}

function drawFrame(ts){
  requestAnimationFrame(drawFrame);
//  rot +=0.01;

//cubes.forEach(function(c,i){
//c.rotation.x += randomSpeedX[0]*0.01;
//c.rotation.y+= randomSpeedY[0];
//c.rotation.z += randomSpeedZ[0];
for(var i=0;i<5;i++){
cubes[21].rotation.x += randomSpeedX[0];
cubes[7].rotation.z += randomSpeedX[0];
}
//c.scale.z +=0.03;
//c.scale.y= Math.sin(ts/500*Math.PI+c.position.x*4.95+c.position.z/10)+1;
//c.material= new THREE.MeshNormalMaterial();


//cubes[8].rotation.x += randomSpeedX[0];
//cubes.rotation.x += randomroty[i];



  renderer.render(scene, camera);
}

init();
drawFrame();
