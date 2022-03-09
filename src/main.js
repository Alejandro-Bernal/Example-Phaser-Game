import Phaser from "phaser";
// Import Scenes
import TitleScreen from "./scenes/TitlesScreen";
import Game from "./scenes/Game";

const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  // Set Physics
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [TitleScreen, Game],
};

const game = new Phaser.Game(config);

// game.scene.add("titlescreen", TitleScreen);
// Logic
// game.scene.add("game", Game);

// Render this scene
// game.scene.start("game");
