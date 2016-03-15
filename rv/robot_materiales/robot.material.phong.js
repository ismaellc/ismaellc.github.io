function Robotina(){
//se plantea las geometrias a utillixzar
THREE.Object3D.call(this);//utilizamos las propiedades de Object3D

//var esferaForma= new THREE.SphereGeometry(0.5);
//var esferaForma2= new THREE.SphereGeometry(1.25);
//var cilindroForma= new THREE.CylinderGeometry(2,1,3.5);//torso
//var cilindroForma2= new THREE.CylinderGeometry(1,2.5,2);//cadera
//var cilindroForma3= new THREE.CylinderGeometry(0.5,0.5,4);//pierna izquierda y derecha
//var cilindroForma4= new THREE.CylinderGeometry(0.3,0.3,2);//cuello
//var material= new THREE.MeshNormalMaterial();
 //Para generar una forma combinada se requiere de las mallas poaras poder desplazar las formas en el espacio virtual
 
  this.PieIzq = new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshPhongMaterial({color: '#ff8040'}));//pie izquierdo
  //this.PieDer = new THREE.Mesh(new THREE.SphereGeometry(0.5));//pie derecho
  this.PiernIzq = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({color: '#ff8040'}));//pierna izq
  //this.PiernDer = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4));//pierna derecha
  
 
 //se desplazan las mallas
 
 this.PieIzq.position.x=-1;
 this.PieIzq.position.y=-6;
 
 //this.PieDer.position.x=1;
 //this.PieDer.position.y=-6;
 
 this.PiernIzq.position.x=-1;
 this.PiernIzq.position.y=-4;
 
 //this.PiernDer.position.x=1;
 //this.PiernDer.position.y=-4;
 
 this.add(this.PieIzq);
 this.add(this.PiernIzq);
 //this.add(this.PieDer);
 //this.add(this.PiernDer);
}
Robotina.prototype =new THREE.Object3D();
function setup(){
	//Se declara un punto de luz
	var luzPuntual=new THREE.PointLight(0xffffff);
	luzPuntual.position.x=10;
	luzPuntual.position.y=10;
	luzPuntual.position.z=10;
	
	//Se declaran las formas y materiales del cuerpo
  var ManIzq = new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshPhongMaterial({color: '#ff8040'}));//mano isq
  var ManDer = new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshPhongMaterial({color: '#ff8040'}));//mano derecha
  var HombIzq = new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshPhongMaterial({color: '#ff8040'}));//hombro isq
  var HombDer = new THREE.Mesh(new THREE.SphereGeometry(0.5),new THREE.MeshPhongMaterial({color: '#ff8040'}));//hombro derecha
  var Cabeza = new THREE.Mesh(new THREE.SphereGeometry(1.25),new THREE.MeshPhongMaterial({color: '#ff8040'}));//cabeza
  var Torso = new THREE.Mesh( new THREE.CylinderGeometry(2,1,3.5),new THREE.MeshPhongMaterial({color: '#ff8040'}));//torso
  var Cadera = new THREE.Mesh(new THREE.CylinderGeometry(1,2.5,2),new THREE.MeshPhongMaterial({color: '#ff8040'}));//cadera
 
  var BrazIzq = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({color: '#ff8040'}));//brazo isq
  var BrazDer = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({color: '#ff8040'}));//brazo derecho
  var Cuello = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,2),new THREE.MeshPhongMaterial({color: '#ff8040'}));//cuello
  
   ManIzq.position.x=-2.25;
 ManIzq.position.y=-0.6;
 
 ManDer.position.x=2.25;
 ManDer.position.y=-0.6;
 
 HombIzq.position.x=-2.25;
 HombIzq.position.y=3.1;
 
 HombDer.position.x=2.25;
 HombDer.position.y=3.1;
 
 Cabeza.position.x=0;
 Cabeza.position.y=5.5;
 
 Torso.position.x=0;
 Torso.position.y=1.75;
 
 Cadera.position.x=0;
 Cadera.position.y=-1;
 
 
 BrazIzq.position.x=-2.25;
 BrazIzq.position.y=1.25;
 
 BrazDer.position.x=2.25;
 BrazDer.position.y=1.25;
 
 Cuello.position.x=0;
 Cuello.position.y=4.375;
 
 PiernaD= new Robotina();
 PiernaI=new Robotina();
 PiernaD.position.x=2;
 //PiernaI.position.z=1;
 
 step=0.01;


 
 //se genera una forma geometria abstracta
//  var forma = new THREE.Geometry();
 
 // se utiliza el paqyuete GeometryUtils para conjuntar las formas
// THREE.GeometryUtils.merge(forma, PieIzq);
 //THREE.GeometryUtils.merge(forma, PieDer);
 //THREE.GeometryUtils.merge(forma, ManIzq);
 //THREE.GeometryUtils.merge(forma, ManDer);
 //THREE.GeometryUtils.merge(forma, HombIzq);
 //THREE.GeometryUtils.merge(forma, HombDer);
 //THREE.GeometryUtils.merge(forma, Cabeza);
 //THREE.GeometryUtils.merge(forma, Torso);
 //THREE.GeometryUtils.merge(forma, Cadera);
 //THREE.GeometryUtils.merge(forma, PiernIzq);
 //THREE.GeometryUtils.merge(forma, PiernDer);
 //THREE.GeometryUtils.merge(forma, BrazIzq);
 //THREE.GeometryUtils.merge(forma, BrazDer);
 //THREE.GeometryUtils.merge(forma, Cuello);
 
 //se genera la malla a partir de la forma 
 
 //malla= new THREE.Mesh(forma, material);
 
 //Se inicializa la escena y se agrega la malla a esta 
 
 escena= new THREE.Scene();
 //escena.add(malla);
 escena.add(PiernaD);
 escena.add(PiernaI);
 escena.add(ManIzq);
 escena.add(ManDer);
 escena.add(HombIzq);
 escena.add(HombDer);
 escena.add(Cabeza);
 escena.add(Torso);
 escena.add(Cadera);
 escena.add(BrazIzq);
 escena.add(BrazDer);
 escena.add(Cuello);
 escena.add(luzPuntual);
 //se inicializa la camara y el renderet
 
 camara= new THREE.PerspectiveCamera();
 camara.position.z=20;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }
 
 function loop() {
  requestAnimationFrame(loop);
  renderer.render(escena,camara);
  //Es importante notar que las rotaciones son sobre los ejes que  estan fijos a la malla, no los ejees del lienzo, inicialmente ambos coincide
  if(Math.abs(PiernaD.rotation.x)>.5)
    step = -step;
    
      PiernaD.rotation.x+=step;
      PiernaI.rotation.x-=step;
 //malla.rotation.x +=0.01;
 //malla.rotation.y +=0.01;
  
 
}

var escena, camara, renderer; //malla;
var step, PiernaD, PiernaI;
setup();
loop();
