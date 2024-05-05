import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { Help } from './scenes/Help';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import { InvertPipeline } from './pipelines/InvertPipeline';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    parent: 'game-container',
    backgroundColor: '#ffffff',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Boot, Preloader, MainMenu, Help, Game, GameOver],
    pipeline: {
        Invert: InvertPipeline,
    },
};

export default new Phaser.Game(config);
