import Phaser from "phaser";
// Images
import bg from "../assets/background.jpeg";
import mooseImg from "../assets/moose.png";
// Classes
import Moose from "../GameObjects/Moose";

export default class Game extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    // Load background
    this.load.image("background", `${bg}`);
    this.load.image("moose", `${mooseImg}`);
  }

  create() {
    // Set Background
    const background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    // background.setDisplaySize(800, 500);

    // Add character Moose
    this.player = new Moose(this, 0, 100, "moose");
    this.player.setScale(0.1);
    this.physics.add.existing(this.player);
    this.physics.world.setBounds(
      0,
      0,
      background.displayWidth,
      background.displayHeight
    );
    this.player.body.setCollideWorldBounds(true);

    this.cameras.main
      .setBounds(0, 0, background.displayWidth, background.displayHeight)
      .startFollow(this.player);

    // Get Inputs
    this.input = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.update(this.input);
  }
}
