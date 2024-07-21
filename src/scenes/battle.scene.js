export class BattleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BattleScene' });
  }

  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    this.add.image(0, 0, 'background').setOrigin(0, 0);
  }
}
