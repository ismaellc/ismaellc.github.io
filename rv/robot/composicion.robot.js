function setup(){
//se plantea las geometrias a utillixzar

var esferaForma= new THREE.SphereGeometry(0.5);
var esferaForma2= new THREE.SphereGeometry(1.25);
var cilindroForma= new THREE.CylinderGeometry(2,1,3.5);//torso
var cilindroForma2= new THREE.CylinderGeometry(1,2.5,2);//cadera
var cilindroForma3= new THREE.CylinderGeometry(0.5,0.5,4);//pierna izquierda y derecha
var cilindroForma4= new THREE.CylinderGeometry(0.3,0.3,2);//cuello
var material= new THREE.MeshNormalMaterial();
 //Para generar una forma combinada se requiere de las mallas poaras poder desplazar las formas en el espacio virtual
 
  var esfera1 = new THREE.Mesh(esferaForma);//pie izquierdo
  var esfera2 = new THREE.Mesh(esferaForma);//pie derecho
  var esfera3 = new THREE.Mesh(esferaForma);//mano isq
  var esfera4 = new THREE.Mesh(esferaForma);//mano derecha
  var esfera5 = new THREE.Mesh(esferaForma);//hombro isq
  var esfera6 = new THREE.Mesh(esferaForma);//hombro derecha
  var esfera7 = new THREE.Mesh(esferaForma2);//cabeza
  var cilindro1 = new THREE.Mesh(cilindroForma);
  var cilindro2 = new THREE.Mesh(cilindroForma2);
  var cilindro3 = new THREE.Mesh(cilindroForma3);//pierna izq
  var cilindro4 = new THREE.Mesh(cilindroForma3);//pierna derecha
  var cilindro5 = new THREE.Mesh(cilindroForma3);//brazo isq
  var cilindro6 = new THREE.Mesh(cilindroForma3);//brazo derecho
  var cilindro7 = new THREE.Mesh(cilindroForma4);//brazo derecho
 //se desplazan las mallas
 
 esfera1.position.x=-1;
 esfera1.position.y=-6;
 
 esfera2.position.x=1;
 esfera2.position.y=-6;
 
 esfera3.position.x=-2.25;
 esfera3.position.y=-0.6;
 
 esfera4.position.x=2.25;
 esfera4.position.y=-0.6;
 
 esfera5.position.x=-2.25;
 esfera5.position.y=3.1;
 
 esfera6.position.x=2.25;
 esfera6.position.y=3.1;
 
 esfera7.position.x=0;
 esfera7.position.y=5.5;
 
 cilindro1.position.x=0;
 cilindro1.position.y=1.75;
 
 cilindro2.position.x=0;
 cilindro2.position.y=-1;
 
 cilindro3.position.x=-1;
 cilindro3.position.y=-4;
 
 cilindro4.position.x=1;
 cilindro4.position.y=-4;
 
 cilindro5.position.x=-2.25;
 cilindro5.position.y=1.25;
 
 cilindro6.position.x=2.25;
 cilindro6.position.y=1.25;
 
 cilindro7.position.x=0;
 cilindro7.position.y=4.375;
 
 //se genera una forma geometria abstracta
  var forma = new THREE.Geometry();
 
 // se utiliza el paqyuete GeometryUtils para conjuntar las formas
 THREE.GeometryUtils.merge(forma, esfera1);
 THREE.GeometryUtils.merge(forma, esfera2);
 THREE.GeometryUtils.merge(forma, esfera3);
 THREE.GeometryUtils.merge(forma, esfera4);
 THREE.GeometryUtils.merge(forma, esfera5);
 THREE.GeometryUtils.merge(forma, esfera6);
 THREE.GeometryUtils.merge(forma, esfera7);
 THREE.GeometryUtils.merge(forma, cilindro1);
 THREE.GeometryUtils.merge(forma, cilindro2);
 THREE.GeometryUtils.merge(forma, cilindro3);
 THREE.GeometryUtils.merge(forma, cilindro4);
 THREE.GeometryUtils.merge(forma, cilindro5);
 THREE.GeometryUtils.merge(forma, cilindro6);
 THREE.GeometryUtils.merge(forma, cilindro7);
 
 //se genera la malla a partir de la forma 
 
 malla= new THREE.Mesh(forma, material);
 
 //Se inicializa la escena y se agrega la malla a esta 
 
 escena= new THREE.Scene();
 escena.add(malla);
 //se inicializa la camara y el renderet
 
 camara= new THREE.PerspectiveCamera();
 camara.position.z=20;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }
 
 function loop() {
  requestAnimationFrame(loop);
  //Es importante notar que las rotaciones son sobre los ejes que  estan fijos a la malla, no los ejees del lienzo, inicialmente ambos coincide
  
  malla.rotation.x +=0.01;
  malla.rotation.y +=0.01;
  
  renderer.render(escena,camara);
}

var escena, camara, renderer, malla;
setup();
loop();
