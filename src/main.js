import * as config from './game.config.json' with { type: 'json' };
import {
  BattleScene,
  BootloaderScene,
  GameMenuScene,
  MainScene,
  MenuScene,
  OptionsScene,
} from './scenes/index.js';

const gameConfig = {
  ...config.default,
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: innerWidth,
    height: innerHeight,
  },
  scene: [
    BootloaderScene, 
    MenuScene, 
    OptionsScene, 
    MainScene, 
    GameMenuScene, 
    BattleScene,
  ],
};

export const game = new Phaser.Game(gameConfig);
