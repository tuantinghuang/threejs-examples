
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// loader for an HDR image
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

//create a scene
let scene = new THREE.Scene();

//change background
//approach 1- change background color
//scene.background = new THREE.Color(0xff00ff);

//approach 2 - load an HDR image as a "skybox" image
let loader = new RGBELoader();
loader.load("./little_paris_eiffel_tower_4k.hdr", (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;

    //create a box
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    //material other than MeshBasicMaterial is subject to light
    let material = new THREE.MeshStandardMaterial({
        envMap: texture,
        roughness: 0,
        metalness: 0.9,
    });
    let mesh = new THREE.Mesh(geometry, material);
    //add the sphere to the scene
    scene.add(mesh);
});

//create a camera
let aspectRatio = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1000);
camera.position.z = 5;

//set up a renderer to show the camera view of our scene on <canvas>
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//appending the <canvas> to our browser
document.body.appendChild(renderer.domElement);

//add orbit contols
let controls = new OrbitControls(camera, renderer.domElement);


function render() {

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();


