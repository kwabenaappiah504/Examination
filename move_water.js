<a-scene>
  <a-assets>
    <a-asset-item id="model" src="path/to/your/model.gltf"></a-asset-item>
  </a-assets>

  <!-- Model entity -->
  <a-entity gltf-model="#model" modify-materials></a-entity>
</a-scene>


  AFRAME.registerComponent('modify-materials', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
          if (node.isMesh) {
            node.material.color.set('#FF0000'); // Change color to red.
          }
        });
      });
    }
  });
