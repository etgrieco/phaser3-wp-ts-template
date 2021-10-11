import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  preload() {
    this.load.image("logo", "assets/logo.png");
  }

  create() {
    const logo = this.add.image(400, 150, "logo");

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update(t: number, d: number): void {}
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
