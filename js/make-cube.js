// 描画領域サイズを定義
var width = 1000, 
height = 700;

// scene
var scene = new THREE.Scene();

// mesh
var geometry = new THREE.BoxGeometry(20,20,20);
var material = new THREE.MeshLambertMaterial({color: "#558800"});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(0,30,0);
scene.add(cube);

// camera
var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.set(300,500,300);
camera.lookAt(cube.position);

// rendering
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor("#eeeeee", 1);
// html にあらかじめ描画領域 <div id="stage"></div> を作っておく
document.getElementById('stage').appendChild(renderer.domElement);

// light
var light = new THREE.DirectionalLight("#ffffff", 1);
light.position.set(0,100,30);
light.castShadow = true;
scene.add(light);

renderer.render(scene, camera);
