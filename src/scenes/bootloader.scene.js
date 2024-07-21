export class BootloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootloaderScene' });
  }

  preload() {
    // gui
    this.load.pack('assets/gui/fantasy-wooden.pack');

    // objects
    this.load.pack('assets/images/seabed/seabed.pack');

    // audio
    this.load.pack('assets/audio/piano-instumental-loops/audio.pack');

    // enemies
    this.load.atlas(
      'bat-monster',
      'assets/bat-monster/bat_monster.png',
      'assets/bat-monster/bat-monster.atlas.json'
    );
    this.load.json(
      'bat-monster-anims',
      'assets/bat-monster/bat-monster.anims.json'
    );
  }

  create() {
    // Almacena la referencia a las teclas en el sistema de datos
    this.registry.set(
      'keys',
      this.input.keyboard.addKeys({
        ...Phaser.Input.Keyboard.KeyCodes,
      })
    );

    this.input.gamepad?.once('connected', (gamepad) => {
      console.log('Gamepad connected', gamepad.id);
      this.registry.set('gamepad', gamepad);
    });

    this.createAnimations('bat-monster-anims');

    // Añadir un listener para una interacción del usuario (autoplay audio not allowed)
    this.input.keyboard.on(
      'keydown',
      () => this.scene.start('MenuScene'),
      this
    );

    this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2,
        'Pulsa cualquier tecla para empezar',
        {
          fontSize: '32px',
          fill: '#fff',
          align: 'center',
          fontFamily: 'Victorian Decade',
        }
      )
      .setOrigin(0.5, 0.5);
  }

  createAnimations(animKey) {
    const animations = this.cache.json.get(animKey);
    animations.anims.forEach((anim) => this.anims.create(anim));
  }
}
