export class BaseContainer extends Phaser.GameObjects.Container {
  constructor(scene, x, y, children, { size } = { size: 'lg' }) {
    super(scene, x, y, children);
    scene.add.existing(this);

    // Crear los elementos de fondo
    this.backgroundStone = scene.add
      .image(0, 0, `board-${size}-stone`)
      .setOrigin(0.5, 0.5);
    this.backgroundParchment = scene.add
      .image(0, 0, `board-${size}-parchment`)
      .setOrigin(0.5, 0.5);

    // Añadir los elementos al contenedor
    this.add(this.backgroundStone);
    this.add(this.backgroundParchment);

    // Asegurar que el contenedor esté centrado en la pantalla
    this.setSize(this.backgroundStone.width, this.backgroundStone.height);
    this.setPosition(this.scene.scale.width / 2, this.scene.scale.height / 2);

    // Centrar los elementos dentro del contenedor
    Phaser.Actions.IncXY(this.list, -this.width / 2, -this.height / 2);
  }
}
