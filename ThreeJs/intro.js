import * as THREE from 'https://unpkg.com/three@0.148.0/build/three.module.js';
import {GLTFLoader} from 'https://unpkg.com/three@0.148.0/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'https://unpkg.com/three@0.148.0/examples/jsm/controls/OrbitControls.js'

// import * as THREE from './three.js-master/build/three.module.js'
// import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js'

/*******************Importing the canvas**************** */
const canvas = document.querySelector('.webgl')

/******************Creating a New Scene ******************/
const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x000000 );

/*******************Blender model loading*******************/
const loader = new GLTFLoader()
loader.load('dream.glb',function(glb)
{
    const root = glb.scene;
    scene.add(root)
    root.position.set(6,0,0)
    root.scale.set(0.4,0.4,0.4)
    root.traverse(function(node){
        if(node.isMesh)
        node.castShadow = true
    })
},function(error){
    console.log("an error occurred")
})


/***************Setting the light for the scene********************** */
const light = new THREE.PointLight(0xffffff,0.5)
light.position.set(8,3,0)
scene.add(light)

const surround_light = new THREE.PointLight(0X129ADA,0.2)
surround_light.position.set(2,0,1000)
scene.add(surround_light)


const tubelight2 = new THREE.PointLight(0xE9AF08,4,2)
tubelight2.position.set(7.7,2.7,0.4)
scene.add(tubelight2)



const pianolight = new THREE.PointLight(0x08E9DF,1,2)
pianolight.position.set(6,1.9,2)
scene.add(pianolight)


const spotLightHelper = new THREE.PointLightHelper(pianolight);
scene.add( spotLightHelper );

/***************Setting the window sizes********************** */
const sizes = {
    width: window.innerWidth,
    height : window.innerHeight
}

/************Setting up the camera for the scene************* */
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera.position.set(10,4,10)
scene.add(camera);

window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

};

/***********Setting up the renderer for the scene************* */
const renderer = new THREE.WebGL1Renderer({canvas : canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(5);
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;
renderer.outputEncoding = THREE.sRGBEncoding;
function animate()
{
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
animate()


/*************************Controls of the scene******************/
const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.5, 0 );
controls.update();
controls.enablePan = false;
controls.enableDamping = false;
controls.enableZoom = false
