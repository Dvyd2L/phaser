import { BatEnemy } from '../characters/bat.enemy.js';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
    this.enemies = new Map();
  }

  create() {
    this.keys = this.registry.get('keys');
    this.gamepad = this.registry.get('gamepad');

    this.backgroundMusic = this.sound.add('midnight-witch');
    this.backgroundMusic.play({ loop: true });

    this.addObstacle('Blue_coral1_shadow1');
    this.addObstacle('Gray-red_coral3_shadow2');
    this.addObstacle('Pearl_sea_shell1_shadow1');
    this.addObstacle('Riff4_shadow3');
    this.addObstacle('Sea_urchin1_shadow2');
    this.addObstacle('Starfish2_shadow1');
    this.addObstacle('Statue1_shadow2');
    this.addObstacle('Violet-pink_coral1_shadow3');
    this.addObstacle('Yellow-white-gray_shell1_shadow3');

    this.addEnemy();

    this.enemies.forEach((enemy) => enemy.create());

    this.input.keyboard.on('keydown', ({ key }) => {
      if (key === 'Escape') {
        this.scene.pause('MainScene');
        this.scene.launch('GameMenuScene');
      }
    });
  }

  update(time, delta) {
    if (this.gamepad) {
      if (this.gamepad.A) {
        console.log('A button pressed');
      }
      if (this.gamepad.B) {
        console.log('B button pressed');
      }
      if (this.gamepad.leftStick.x !== 0 || this.gamepad.leftStick.y !== 0) {
        console.log('Left stick moved:', this.gamepad.leftStick);
      }
    }

    this.enemies.forEach((enemy) => enemy.update(time, delta));
  }

  // customMethods
  addPlayer() {}

  addEnemy() {
    this.enemies.set(
      'bat-monster',
      new BatEnemy(this, 100, 100, 'bat-monster')
    );
  }

  addObstacle(imageKey) {
    this.add
      .image(Math.random() * innerWidth, Math.random() * innerHeight, imageKey)
      .setOrigin(0, 0);
  }

  addBackground() {
    const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    bg.displayWidth = this.cameras.main.width;
    bg.displayHeight = this.cameras.main.height;
  }
}
