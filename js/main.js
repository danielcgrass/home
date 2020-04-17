container = document.getElementById('main');

const text = new blotter.Text('Liquid', {
  family: 'serif',
  size: 110,
  fill: '#fff',
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.1;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text,
});

let scope = blotter.forText(text);

scope.appendTo(container);
