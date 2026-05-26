import { Application, Color, Entity, Vec3 } from 'playcanvas';

/**
 * SuperSplat - 3D Gaussian Splat viewer and editor
 * Main application entry point
 */

const canvas = document.getElementById('application-canvas') as HTMLCanvasElement;

if (!canvas) {
    throw new Error('Could not find application canvas element');
}

// Create the PlayCanvas application
const app = new Application(canvas, {
    mouse: true,
    touch: true,
    keyboard: true
});

// Configure the application
app.setCanvasFillMode('FILLMODE_FILL_WINDOW');
app.setCanvasResolution('RESOLUTION_AUTO');

// Handle window resize
window.addEventListener('resize', () => {
    app.resizeCanvas();
});

// Set up the scene
app.scene.ambientLight = new Color(0.2, 0.2, 0.2);

// Create the camera entity
const camera = new Entity('Camera');
camera.addComponent('camera', {
    clearColor: new Color(0.15, 0.15, 0.15),
    farClip: 10000,
    nearClip: 0.01
});
camera.setPosition(0, 0, 5);
app.root.addChild(camera);

// Create a directional light
const light = new Entity('DirectionalLight');
light.addComponent('light', {
    type: 'directional',
    color: new Color(1, 1, 1),
    intensity: 1.0
});
light.setEulerAngles(45, 30, 0);
app.root.addChild(light);

// Start the application
app.start();

// Main update loop
app.on('update', (dt: number) => {
    // Update logic will be handled by scene managers
});

export { app, camera };
