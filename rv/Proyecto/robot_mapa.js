function Muro(size,x,y){
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
Muro.prototype=new THREE.Mesh();

THREE.Scene.prototype.setMap=function(map){
	var _offset=Math.floor(map.length/2);
	for(var i=0;i<map.length;i++)
		for(var j=0;j<map.length;j++){
			if(map[i][j] === "x")
				this.add(new Muro(1,j-_offset,-(i-_offset)));
			else if(map[i][j] === "r"){
				this.robot = new Robot();
				this.robot.position.x = j-_offset;
				this.robot.position.y = -(i-_offset);
				this.robot.scale.set(1/17.25,1/17.25,1/17.25);
				this.robot.rotation.y = Math.PI/2;
				this.add(this.robot);
			}
		}
}


function setup(){
  var mapa = new Array();
  mapa[0]  = "xxxxxxxxxxxxxxxxxxxx";
  mapa[1]  = "x r       x        x";
  mapa[2]  = "xxxxxx    x x    xxx";
  mapa[3]  = "xx   x  x          x";
  mapa[4]  = "x       xxx      x x";
  mapa[5]  = "xxxx     x       x x";
  mapa[6]  = "x  x         xx    x";
  mapa[7]  = "x             x  x x";
  mapa[8]  = "x   xxxxxxxxxxx  x x";
  mapa[9]  = "x        x    x xx x";
  mapa[10] = "x        x  xxx    x";
  mapa[11] = "xx     xxx  x  xxxxx";
  mapa[12] = "xxx             x  x";
  mapa[13] = "x                  x";
  mapa[14] = "x   xx   xxx  x  xxx";
  mapa[15] = "x                  x";
  mapa[16] = "x           xxx   xx";
  mapa[17] = "x   xxxxx     x    x";
  mapa[18] = "xxx  xx          xxx";
  mapa[19] = "      x   xx    xxxx";
  mapa[20] = "xxxxxxxxxxxxxxxxxxxx";
  
  escenario = new THREE.Scene();
  
  escenario.setMap(mapa);
  
  camara=new THREE.PerspectiveCamera();
  camara.position.z=25;
  //camara.position.y=9.5;
  //camara.lookAt(new THREE.Vector3(0,0,0));
  
  //Se declara una fuente de luz
	var luzPuntual=new THREE.PointLight(0xffffff);
	luzPuntual.position.z=30;
	escenario.add(luzPuntual);
	/*var luzAmbiental = new THREE.AmbientLight(0xffffff);
	escenario.add(luzAmbiental);*/
	
	sensor_f = new THREE.Raycaster(escenario.robot.position,
		new THREE.Vector3(Math.cos(escenario.robot.rotation.y-Math.PI/2),Math.sin(escenario.robot.rotation.y-Math.PI/2),0));
	sensor_a = new THREE.Raycaster(escenario.robot.position,
		new THREE.Vector3(Math.cos(escenario.robot.rotation.y),Math.sin(escenario.robot.rotation.y),0));
	sensor_b = new THREE.Raycaster(escenario.robot.position,
		new THREE.Vector3(-1*Math.cos(escenario.robot.rotation.y),-1*Math.sin(escenario.robot.rotation.y),0));
	
	
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  escenario.add(camara);
  step = 0.05;
}

function loop(){
	requestAnimationFrame(loop);
	//Trayectoria
	sensor_f.set(escenario.robot.position, 
		new THREE.Vector3(Math.cos(escenario.robot.rotation.y-Math.PI/2),Math.sin(escenario.robot.rotation.y-Math.PI/2),0));
	sensor_a.set(escenario.robot.position, 
		new THREE.Vector3(Math.cos(escenario.robot.rotation.y),Math.sin(escenario.robot.rotation.y),0));
	sensor_b.set(escenario.robot.position, 
		new THREE.Vector3(-1*Math.cos(escenario.robot.rotation.y),-1*Math.sin(escenario.robot.rotation.y),0));
	var obstaculo1= this.sensor_f.intersectObjects(escenario.children);
	var obstaculo2= this.sensor_a.intersectObjects(escenario.children);
	var obstaculo3= this.sensor_b.intersectObjects(escenario.children);
		if(obstaculo1.length>0 && (obstaculo1[0].distance<=.55)){
			if(obstaculo3.length>0 && (obstaculo3[0].distance<=.55)){
				angle = Math.PI/2;
				escenario.robot.rotation.y+=angle;
			}
			else{
				angle = -Math.PI/2;
				escenario.robot.rotation.y+=angle;
			}
		}
		else{
		escenario.robot.position.x += 0.05*Math.cos(escenario.robot.rotation.y-Math.PI/2);
		escenario.robot.position.y += 0.05*Math.sin(escenario.robot.rotation.y-Math.PI/2);
		}
	//Movimiento
	if(Math.abs(escenario.robot.piernaD.rotation.x)>.5)
      step = -step; 
    escenario.robot.piernaD.rotation.x += step;
    escenario.robot.piernaI.rotation.x -= step;
	escenario.robot.brazoD.rotation.x -= step;
	escenario.robot.brazoI.rotation.x += step;

	
	renderer.render(escenario,camara);
}

var escenario, camara, renderer, sensor;

setup();
loop();