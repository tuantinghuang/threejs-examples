import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls'

let scene, renderer, camera;
let cubes = [];

function init() {

    /*
    set up scene
    */
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    let webglCanvas = renderer.domElement;
    webglCanvas.setAttribute('id', 'webgl');
    document.body.appendChild(webglCanvas);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    /*

   create an array of objects

   */
    let geo = new THREE.BoxGeometry(1, 1, 1);
    let mat = new THREE.MeshLambertMaterial({ color: 'blue' });

    //make 10 cubes and add them to the cubes array
    for (let i = 0; i < 10; i++) {
        let mesh = new THREE.Mesh(geo, mat);
        //to make it in the middle
        mesh.position.x = (i - 10 / 2) * 2;
        mesh.rotation.x = Math.random();
        scene.add(mesh);
        cubes.push(mesh);
    }

    let light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(50, 20, 50);
    scene.add(light);


    /*
   
    create a scroll base interaction
   
    */

    document.addEventListener('scroll', (event) => {
        console.log(event)
        for (let i = 0; i < cubes.length; i++) {
            cubes[i].rotation.x += 0.01;
        }
    });


}

function render() {

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
render();