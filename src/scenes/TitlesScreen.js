import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {
  create() {
    const title = this.add.text(
      400,
      250,
      "This is a game about a moose that flies!"
    );
    title.setOrigin(0.5, 0.5);
  }
}
