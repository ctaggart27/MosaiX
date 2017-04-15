var game = new Phaser.Game(700, 450, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update
});




function preload() {

  game.load.image('phaser', 'images/uploads/user_avatars/tumblr_mt5uigj1xJ1s5nvu8o1_1280.gif');

  game.load.audio('explosion', '/gameJs/instantrapairhorn.mp3');
}

var sprite;

var upKey;
var downKey;
var leftKey;
var rightKey;
// ---
var explosion;
var keys;

function create() {

  sprite = game.add.sprite(300, 0, 'phaser');

  //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

  explosion = game.add.audio('explosion');

  game.sound.setDecodedCallback([explosion, this]);
}


function update() {
  $("body").keydown(function(){
         explosion.play();
     });
     $("body").keyup(function(){
         explosion.play();
     });
  if (upKey.isDown) {
    sprite.y--;
  } else if (downKey.isDown) {
    sprite.y++;
  }
  if (leftKey.isDown) {
    sprite.x--;
  } else if (rightKey.isDown) {
    sprite.x++;
  }
}
// _______________________
