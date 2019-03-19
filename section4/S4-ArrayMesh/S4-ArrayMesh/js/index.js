var renderer, scene, camera;
var controls;
var cubes=[];
var rot=0;

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
  for (var x = -15; x <= 10; x +=5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -15; y <=10; y += 5) {
      for (var z = -15; z <= 10;z += 5) {
          console.log("x:"+x+",y"+y);
      var boxGeometry = new THREE.BoxGeometry(3, 6, 3);
      //The color of the material is assigned a random color
      var boxmaterial = new THREE.MeshLambertMaterial({color:0xffffff});
      if(x>=0&& y >=0&&z>=0){
      boxMaterial = new THREE.MeshLambertMaterial({color:0xff00ff});
      }else if(x<=0&& y>=0&&z>=0){
        boxMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
      }else {
       boxMaterial = new THREE.MeshLambertMaterial({color:0x0000ff});
      }

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.y = y;
        mesh.position.z = z;
        //  for (var j = 0; j<= 1; j +=0.01){
            mesh.rotation.x = 360*Math.random();
            /*for (var z= 0; z<= 1; z +=0.02){
                  mesh.rotation.y = z;}
              for (var a = 0; a<= 1; a +=0.01){
        mesh.rotation.z = a;
      }*/
      scene.add(mesh);
      cubes.push(mesh);
  }
}
}




  document.body.appendChild(renderer.domElement);
}
function drawFrame(){
  requestAnimationFrame(drawFrame);

  rot+=0.01;
  cubes.forEach(function(c,i){
    c.rotation.z = rot;
  });

  renderer.render(scene, camera);
}

init();
drawFrame();
