import Phaser from "phaser";
import moose from "../assets/moose.png";
import bg from "../assets/background.jpeg";

export default class Game extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    // Load background
    this.load.image("background", `${bg}`);
    // load character
    this.load.image("moose", `${moose}`);
  }

  create() {
    // Set Background
    const background = this.add.image(0, 0, "background");
    background.setOrigin(0, 0);
    background.setDisplaySize(800, 500);

    // Add an image
    const moose = this.add.image(100, 100, "moose");
    moose.setScale(0.1);
    moose.setOrigin(0, 0);

    // Set Bounce effect to moose
    this.physics.add.existing(moose);
    moose.body.setBounce(1, 1);
    moose.body.setCollideWorldBounds(true, 1, 1);
    moose.body.setVelocity(200, 60);

    /* 
      Code for the ball starts down here!
    */
    // Make a ball
    // const ball = this.add.circle(420, 250, 10, 0xffffff, 1);
    // this.physics.add.existing(ball);
    // ball.body.setBounce(1, 1);
    // Add bounce effect
    // ball.body.setCollideWorldBounds(true, 1, 1);
    // Add velocity
    // ball.body.setVelocity(200, 60);
    // Add the paddles for pong
    // const paddleLeft = this.add.rectangle(30, 250, 20, 100, 0xffffff, 1);
    // this.physics.add.existing(paddleLeft, true);
    // Add collide to paddle left
    // this.physics.add.collider(paddleLeft, ball);
  }
}
