function setup() {
//se crea una figura para las ruedas(orugas)
var figura = new THREE.Shape();
        figura.moveTo(-2,0)
        figura.lineTo(-.05,2);
        figura.lineTo(3,0);
        figura.lineTo(-2,0);
var trianguloForma =new THREE.ExtrudeGeometry(figura,{amount: 1});
//se plantean las geometrias a utilizar
//var esferaForma = new THREE.SphereGeometry(1);
var cilindroForma = new THREE.CylinderGeometry(0.25,0.25,3);
var cilindroForma2 = new THREE.CylinderGeometry(.5,.5,1);
var cilindroForma3 = new THREE.CylinderGeometry(0.25,0.25,1);
var cuadradoForma =new THREE.BoxGeometry(2,2,2);
//para generar una forma combinada se requiere de las mallas para poder desplazar las formas en el espacio virtual.
var oruga1 = new THREE.Mesh(trianguloForma);
var oruga2 = new THREE.Mesh(trianguloForma);
var brazo1 = new THREE.Mesh(cilindroForma);
var brazo2 = new THREE.Mesh(cilindroForma);
var cuerpo = new THREE.Mesh(cuadradoForma);
var ojo1 = new THREE.Mesh(cilindroForma2);
var ojo2 = new THREE.Mesh(cilindroForma2);
var cuello = new THREE.Mesh(cilindroForma3);

//se rotan los cuerpos segun se necesite.

oruga1.rotation.y = 270 * Math.PI / 180;
oruga2.rotation.y = 270 * Math.PI / 180;
brazo1.rotation.z = 90 * Math.PI / 180;
brazo2.rotation.z = 90 * Math.PI / 180;
ojo1.rotation.x = 90 * Math.PI / 180;
ojo2.rotation.x = 90 * Math.PI / 180;

// se desplazan las mallas.
oruga1.position.x=-2.5;
oruga1.position.y=1;
oruga2.position.x=2.5;
oruga2.position.y=1;
cuerpo.position.y=2.5;
brazo1.position.x=-3.5;
brazo1.position.y=3.5;
brazo2.position.x=3.5;
brazo2.position.y=3.5;
cuello.position.y=5;
ojo1.position.x=-0.5;
ojo1.position.y=6;
ojo1.position.x=0.5;
ojo1.position.x=6;
//se genera una forma (geometria) abstracta.
var forma= new THREE.Geometry();
//se utiliza el paquete GeometryUtils para conjugar las formas.
THREE.GeometryUtils.merge(forma,oruga1);
THREE.GeometryUtils.merge(forma,oruga2);
THREE.GeometryUtils.merge(forma,cuerpo);
THREE.GeometryUtils.merge(forma,brazo1);
THREE.GeometryUtils.merge(forma,brazo2);
THREE.GeometryUtils.merge(forma,ojo1);
THREE.GeometryUtils.merge(forma,ojo2);
THREE.GeometryUtils.merge(forma,cuello);

//se genera la malla a partir de la forma.
malla = new THREE.Mesh(forma);
escena= new THREE.Scene();
escena.add(malla)
//se inicializa la camara y el *renderer*.
camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}
function loop(){
  requestAnimationFrame(loop);
  //Es importante notar que las rotaciones son sobre los ejes que estan fijos a la malla, 
  //no los ejes del lienzo.Inicialmente ambos coinciden.
  malla.rotation.x =0.0;
  malla.rotation.y =0.0;
  
  renderer.render(escena,camara);
}
  var escena, camara, renderer, malla;
  setup();
  loop();
