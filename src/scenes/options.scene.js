import { createContainer } from '../utils/create-container.js';

export class OptionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'OptionsScene' });
  }

  create() {
    //this.background = this.add.image(0, 0, 'menu').setOrigin(0, 0);
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

    this.menuContainer = this.createContainer(
      this.volumeText,
      this.increaseVolumeText,
      this.decreaseVolumeText,
      this.backText
    );

    // Configurar eventos para los botones de volumen
    this.increaseVolumeText.on('pointerdown', () => this.changeVolume(0.1));
    this.decreaseVolumeText.on('pointerdown', () => this.changeVolume(-0.1));

    this.backText.on('pointerdown', () => {
      this.scene.stop('OptionsScene');
    });
  }

  changeVolume(change) {
    this.sound.volume = Phaser.Math.Clamp(this.sound.volume + change, 0, 1);
    this.volumeText.setText('Volumen: ' + this.sound.volume.toFixed(1));
  }
}

Object.assign(OptionsScene.prototype, { createContainer });
