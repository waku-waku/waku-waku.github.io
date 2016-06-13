var width = window.parent.screen.width;
var height = window.parent.screen.height;


// var geometry = new THREE.CubeGeometry(100, 100, 100); // 形
// var material = new THREE.MeshBasicMaterial({color: 0x0000aa}); // 材質

// var mesh = new THREE.Mesh(geometry, material);

var geometry = new THREE.BoxGeometry( 100, 100, 100 );
var material = new THREE.MeshNormalMaterial();
mesh = new THREE.Mesh( geometry, material );
mesh.position.x = 1000;

var camera = new THREE.PerspectiveCamera(21, width / height, 1, 1000);
camera.position.set(300,500,-400);
camera.lookAt(mesh.position);

var light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position = {x: 0, y:0.2, z: -1};

var scene = new THREE.Scene();
scene.add(mesh);
scene.add(light);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);	



var render = function () {
	requestAnimationFrame( render );

	mesh.rotation.x += 0.05;
	mesh.rotation.y += 0.05;

	renderer.render(scene, camera);
};

window.onload = function () {
	document.getElementById('bg-gl').appendChild(renderer.domElement);
	render();
};
