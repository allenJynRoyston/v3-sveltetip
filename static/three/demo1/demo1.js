function threeInit(props){

  const {canvasele, resourceFolder, width, height, backgroundColor} = props

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
  

  var renderer = new THREE.WebGLRenderer( { canvas: canvasele } );
  renderer.setSize( width, height );

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  
  camera.position.z = 2;


  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;    
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate();

}
