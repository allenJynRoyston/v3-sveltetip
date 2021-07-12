function pixiInit(props){

  const {canvasele, resourceFolder, width, height, backgroundColor} = props

  const app = new PIXI.Application({
      view: canvasele,
      width, 
      height, 
      backgroundColor: 0x53146e,
      resolution: window.devicePixelRatio || 1,
  });


  const starTexture = PIXI.Texture.from(`${resourceFolder}/snow.png`);

  const starAmount = 500;
  const fov = 20;
  const baseSpeed = 0.25;
  const starStretch = 5;
  const starBaseSize = 0.5;

  let cameraZ = 0;      
  let speed = 0;  

  const randomizeStar = (star, initial) => {
    star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
    // Calculate star positions with radial random coordinate so no star hits the camera.
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;
    star.x = Math.cos(deg) * distance;
    star.y = Math.sin(deg) * distance;
  }

    // Create the stars
    const stars = [];
    for (let i = 0; i < starAmount; i++) {
      const star = {
          sprite: new PIXI.Sprite(starTexture),
          z: 0,
          x: 0,
          y: 0,
      };
      star.sprite.anchor.x = 0.5;
      star.sprite.anchor.y = 0.5;

      randomizeStar(star, true);
      app.stage.addChild(star.sprite);
      stars.push(star);
    }    

      // Listen for animate update
      app.ticker.add((delta) => {
        // Simple easing. This should be changed to proper easing function when used for real.
        speed += speed/20;
        cameraZ += delta * 10 * (speed + baseSpeed);
        for (let i = 0; i < starAmount; i++) {
            const star = stars[i];
            if (star.z < cameraZ){
              randomizeStar(star)
            }

            // Map star 3d position to 2d with really simple projection
            const z = star.z - cameraZ;
            star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
            star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

            // Calculate star scale & rotation.
            const dxCenter = star.sprite.x - app.renderer.screen.width / 2,
                  dyCenter = star.sprite.y - app.renderer.screen.height / 2,
                  distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter),
                  distanceScale = Math.max(0, (2000 - z) / 2000);
            star.sprite.scale.x = distanceScale * starBaseSize;
            star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
            star.sprite.rotation += star.sprite.scale.y * 0.1 //Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
          }
      });
}