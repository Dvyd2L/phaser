import { createContainer } from '../utils/create-container.js';

export class GameMenuScene extends Phaser.Scene {
  constructor() {
    super('GameMenuScene');
    this.cursorKeys = null;
  }

  preload() {
    this.load.image('menu', 'assets/menu.png');
  }

  create() {
    // Añadir texto para el volumen
    this.volumeText = this.add.text(
      0,
      0,
      'Volumen: ' + this.sound.volume.toFixed(1),
      {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
        fontFamily: 'Victorian Decade',
      }
    );

    // Añadir botón para subir volumen
    this.increaseVolumeText = this.add
      .text(0, 50, 'Subir Volumen', {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
        fontFamily: 'Victorian Decade',
      })
      .setInteractive();

    // Añadir botón para bajar volumen
    this.decreaseVolumeText = this.add
      .text(0, 100, 'Bajar Volumen', {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
        fontFamily: 'Victorian Decade',
      })
      .setInteractive();

    // Añadir botón para volver al menú principal
    this.backText = this.add
      .text(0, 150, 'Volver', {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
        fontFamily: 'Victorian Decade',
      })
      .setInteractive();

    this.exitText = this.add
      .text(0, 200, 'Salir del juego', {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
        fontFamily: 'Victorian Decade',
      })
      .setInteractive();

    this.menuContainer = this.createContainer(
      this.volumeText,
      this.increaseVolumeText,
      this.decreaseVolumeText,
      this.backText,
      this.exitText
    );

    // Configurar eventos para los botones de volumen
    this.increaseVolumeText.on('pointerdown', () => this.changeVolume(0.1));
    this.decreaseVolumeText.on('pointerdown', () => this.changeVolume(-0.1));
    this.backText.on('pointerdown', () => {
      this.scene.resume('MainScene');
      this.scene.stop('GameMenuScene');
    });
    this.exitText.on('pointerdown', () => {
      this.scene.get('MainScene').backgroundMusic.stop();
      this.scene.stop('GameMenuScene');
      this.scene.stop('MainScene');
      this.scene.start('MenuScene');
    });
  }

  changeVolume(change) {
    this.sound.volume = Phaser.Math.Clamp(this.sound.volume + change, 0, 1);
    this.volumeText.setText('Volumen: ' + this.sound.volume.toFixed(1));
  }
}

Object.assign(GameMenuScene.prototype, { createContainer });
