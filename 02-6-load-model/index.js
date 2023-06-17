//import 'everything' with the alias 'THREE' from our import map 'three' (from index.html)
//using a module enable us to use import syntax
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

//declare variables
let scene, camera, renderer, controls, loader;

//initialize
function init() {
    //create a scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeffff);

    //create a camera
    let aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1000);
    camera.position.z = 5;

    //set up a renderer to show the camera view of our scene on <canvas>
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //appending the <canvas> to our browser
    document.body.appendChild(renderer.domElement);

    //set up orbit control
    controls = new OrbitControls(camera, renderer.domElement);

    //add light to environment
    let ambientLight = new THREE.AmbientLight(0xaaffee, 0.5);
    scene.add(ambientLight);

    //add model loader
    loader = new GLTFLoader();
    //load model
    loadModel();
}


function loadModel() {
    loader.load("tree_model/tree_small_02_1k.gltf", function (gltf) {
        scene.add(gltf.scene);
        console.log(gltf);
    })
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
render();


