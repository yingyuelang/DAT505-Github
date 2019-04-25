# DAT505-Github XIERUOBING's finial work
## B161006095
## name: XIERUOBING


## The content of the finial project
  the project is an interactive picture book. It tells a story about a crane how to help a kind couple which saved it before. It is a tales of Asian that I listened in my childhood.

  In this project, peope can read a story easily by it's picture. There are 6 scene in this project so that when you use this project you may find it is also like real book. Of course, these is a big difference between this project and real book is that there are some simple lines appear if your mouse move on the character. i believe these will help people more easier to read this book. Especially for children.

  there is a picture which show the part about interactive.
  ![screen](https://github.com/yingyuelang/DAT505-Github/blob/master/finial%20project/images/1.png)
    ![screen](https://github.com/yingyuelang/DAT505-Github/blob/master/finial%20project/images/2.png)


### The background story of this interactive picture book
  Long long ago, an old couple lived in a village. They are poor but kind

  One day, the husband went to cut wood and he met a wounded crane. The crane was cry so the kind person helped the crane. He dressed the crane’s wound and gave it some food.

  After a few days, a girl knocked on the couple’s door at night. She said she is missing in the snow and she wants to find a place a sleep. The couple is so kind so that they give the girl a room to live.  After talking to the girl, they know that the girl has no parents so she was vagrancy. The couple have no child so they decide to adopt the girl.

  After the couple adopt the girl, they found that the girl is such clever and hard-working. Especially the clothes she made. The couple never see such beautiful clothes before. The girl asked them to sold these clothes and then they become richer than before.

  Only one thing is very strange is that the girl forbade everyone to see how she make these clothes even the kind couple. But the couple was so interested so that one day they peep the girl when she was made clothes. Surprisingly, there was no girl in the room but a crane, It made clothes out of its feather.

  The husband found that the crane is the crane which he saved that day. The crane found the couple know it’s real appearance so that it told them the reason. The crane is so thanks for the husband and wants to pay back the couple. The crane is spirit and it changed to a girl to help the couple. After the crane tell the couple reason, the crane flied away and never go back.


## How do I finish this project
  When I decided to make a an interactive picture book, I draw some sketchs first so that I can know how to make the character and scene's models.

  There are some pictures about the scene and character I designed.
  ![screen](https://github.com/yingyuelang/DAT505-Github/blob/master/finial%20project/images/3.png)

  ![screen](https://github.com/yingyuelang/DAT505-Github/blob/master/finial%20project/images/4.png)

  Of course, all the models are modeled by myself.
  There are some models I made in 3D MAX.
  ![screen](https://github.com/yingyuelang/DAT505-Github/blob/master/finial%20project/images/5.png)

  ![screen](https://github.com/yingyuelang/DAT505-Github/blob/master/finial%20project/images/6.png)

## The part of code
I use a lot of code to control the mouse click event
For example, in the scene1:



    function onDocumentMouseMove( event ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    //scene.add(mesh3);
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

    }

    function onDocumentMouseDown( event ) {
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      raycaster.setFromCamera( mouse, camera );

      var intersects = raycaster.intersectObjects( scene.children );
      if( intersects.length>0) {
        top.location =(intersects[0].object.userData.URL);
      }
      }


the function of mousemove give the picture book the effect that if you move your mouse on the
character, there will be some words on it. This effect makes the picture book can also be a comic book.

the function of mousedown make two PlaneGeometrys become a button. If you click on these buttons, you will go to the last or next scene.

Of course, the code which control the geometry is also very important.



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
    mesh8.userData = { URL: "index.html"};
    mesh8.position.set(-50,-100,-300);
    mesh9 = new THREE.Mesh( geometry3, material5 );
    mesh9.position.set(50,-100,-300);
    mesh9.userData = { URL: "scene2.html"};
    mesh10 = new THREE.Mesh( geometry4, material6 );
    mesh10.position.set(200,100,-400);
    mesh11 = new THREE.Mesh( geometry5, material3);
    mesh11.position.set(0,300,-1300);


    scene.add( mesh8 );
    scene.add( mesh9 );
    scene.add( mesh10 );
    scene.add( mesh11 );

    light1 = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(light1);

    light2 = new THREE.PointLight(0xffffff, 0.3);
    scene.add(light2);}



The mesh8 and mesh9 is button. The url control what scene you go to after you click on this button
The mesh10 is the words the story
The mesh11 is the scene background
