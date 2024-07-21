export class BatEnemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setCollideWorldBounds(true);
    this.body.setAllowGravity(true);
    this.body.setSize(16, 16);
    this.body.setOffset(0, 0);

    this.speed = 50;
    this.direction = 'right';
    this.isAlive = true;

    this.keys = scene.input.keyboard.addKeys({
      ...Phaser.Input.Keyboard.KeyCodes,
    });
  }

  create() {}

  update(time, delta) {
    if (!this.isAlive) {
      this.die();
      return;
    }
    // Inicializa la velocidad a 0 en cada frame
    this.body.setVelocity(0, 0);

    const isMoving =
      this.keys.W.isDown ||
      this.keys.A.isDown ||
      this.keys.S.isDown ||
      this.keys.D.isDown;

    // Manejo de las teclas de dirección
    this.keys.W.isDown && this.body.setVelocityY(-this.speed);
    this.keys.A.isDown &&
      (this.body.setVelocityX(-this.speed), (this.flipX = true));
    this.keys.S.isDown && this.body.setVelocityY(this.speed);
    this.keys.D.isDown &&
      (this.body.setVelocityX(this.speed), (this.flipX = false));

    // Control de animaciones
    isMoving
      ? this.anims.play('bat-monster-fly', true)
      : this.anims.play('bat-monster-idle', true);

    // Control de la dirección del sprite
    //this.flipX = this.body.velocity.x < 0;
  }

  die() {
    // this.isAlive = false;
    this.anims.play('bat-monster-dying');
    this.body.setVelocity(0, 0);
    this.body.enable = false;
    this.setVisible(false);
  }
}
