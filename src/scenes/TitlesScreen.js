import Phaser from "phaser";
import start from "../assets/button.png";

export default class TitleScreen extends Phaser.Scene {
  constructor() {
    super("starGame");
  }

  preload() {
    this.load.image("start", `${start}`);
  }

  create() {
    const title = this.add.text(400, 250, "The Moose that Flies!");
    title.setOrigin(1, 10);

    const button = this.add.image(400, 400, "start");
    button.setScale(0.2);

    // Click image
    button.setInteractive();
    this.input.on("pointerdown", () => {
      this.scene.start("playGame");
    });
  }
}
