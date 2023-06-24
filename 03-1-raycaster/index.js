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
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    let controls = new OrbitControls(camera, renderer.domElement)


    /*

   create an array of objects

   */
    let geo = new THREE.BoxGeometry(1, 1, 1);
    let mat = new THREE.MeshBasicMaterial({ color: 'blue' });
    let activeMat = new THREE.MeshBasicMaterial({ color: 'red' });

    //make 10 cubes and add them to the cubes array
    for (let i = 0; i < 10; i++) {
        let mesh = new THREE.Mesh(geo, mat);
        //to make it in the middle
        mesh.position.x = (i - 10 / 2) * 2;
        scene.add(mesh);
        cubes.push(mesh);
    }


    /*
   
    create a raycaster based on mouse events
   
    */

    let raycaster = new THREE.Raycaster();

    document.addEventListener('mousemove', (event) => {

        //create a variable to store mouse position
        let mouse = new THREE.Vector2(0, 0);

        //console.log(event)

        //NDC - normalized device coordinates (-1 to 1)
        //position (0,0) would be in the middle of the screen
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (event.clientY / window.innerHeight) * 2 - 1;


        //updating the picking ray with the camera and the pointer(in this case, mouse) position
        raycaster.setFromCamera(mouse, camera);

        let intersects = raycaster.intersectObjects(cubes);

        //reset all materials
        for (let i = 0; i < cubes.length; i++) {
            cubes[i].material = mat;
        }

        //change the materials for selected ones
        for (let i = 0; i < intersects.length; i++) {
            intersects[i].object.material = activeMat;
        }

    });


}

function render() {

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
render();