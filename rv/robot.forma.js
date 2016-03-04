function setup() {
//se plantean las geometrias a utilizar
var esferaForma = new THREE.SphereGeometry(1);
var cilindroForma = new THREE.CylinderGeometry(0.5,0.5,4);
var cuagradoForma =new THREE.BoxGeometry(1,1,1);
//para generar una forma combinada se requiere de las mallas para poder desplazar las formas en el espacio virtual.
var esfera1 = new THREE.Mesh(esferaForma);
var esfera2 = new THREE.Mesh(esferaForma);
var esfera3 = new THREE.Mesh(esferaForma);
var esfera4 = new THREE.Mesh(esferaForma);

// se desplazan las mallas.
esfera1.position.x=2;
esfera2.position.x=-2;
esfera3.position.x=-2;
esfera4.position.x=-2;
esfera3.position.z=-4;
esfera4.position.z=-4;
//se genera una forma (geometria) abstracta.
var forma= new THREE.Geometry();
//se utiliza el paquete GeometryUtils para conjugar las formas.
THREE.GeometryUtils.merge(forma,esfera1);
THREE.GeometryUtils.merge(forma,esfera2);
THREE.GeometryUtils.merge(forma,esfera3);
THREE.GeometryUtils.merge(forma,esfera4);

//se genera la malla a partir de la forma.
malla = new THREE.Mesh(forma);
escena= new THREE.Scene();
escena.add(malla)
//se inicializa la camara y el *renderer*.
camara = new THREE.PerspectiveCamera();
camara.position.z=10;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}
function loop(){
  requestAnimationFrame(loop);
  //Es importante notar que las rotaciones son sobre los ejes que estan fijos a la malla, 
  //no los ejes del lienzo.Inicialmente ambos coinciden.
  malla.rotation.x +=0.01;
  malla.rotation.y +=0.01;
  
  renderer.render(escena,camara);
}
  var escena, camara, renderer, malla;
  setup();
  loop();
