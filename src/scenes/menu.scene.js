import { createContainer } from '../utils/create-container.js';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    // Reproducir música de fondo
    this.backgroundMusic = this.sound.add('end-of-the-days');
    this.backgroundMusic.play({ loop: true });

    this.createMenu();
  }

  startNewGame() {
    // Lógica para iniciar un nuevo juego
    this.backgroundMusic.stop();
    this.scene.start('MainScene');
    //this.scene.stop('MenuScene');
  }

  createMenu() {
    // Crear los textos de "Nuevo Juego" y "Opciones"
    this.newGameText = this.add
      .text(0, 0, 'Nuevo Juego', {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
        fontFamily: 'Victorian Decade',
      })
      .setInteractive();

    this.optionsText = this.add
      .text(0, 50, 'Opciones', {
        fontSize: '32px',
        fill: '#fff',
        align: 'center',
        fontFamily: 'Victorian Decade',
      })
      .setInteractive();

    this.menuContainer = this.createContainer(
      this.newGameText,
      this.optionsText
    );

    // Configurar eventos para los textos interactivos
    this.newGameText.on('pointerdown', () => {
      this.startNewGame();
    });

    this.optionsText.on('pointerdown', () => {
      this.scene.launch('OptionsScene');
    });
  }
}

Object.assign(MenuScene.prototype, { createContainer });
