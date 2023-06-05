$(document).ready(function(){
  var score = 0;
  var gameArea = $('#game-area');
  var scoreDisplay = $('#score');

  function createMole() {
    var mole = $('<div>');
    mole.addClass('mole');
    mole.css({
      'top': Math.random() * (gameArea.height() - mole.height()),
      'left': Math.random() * (gameArea.width() - mole.width())
    });
    mole.appendTo(gameArea);
    mole.click(function() {
      score++;
      scoreDisplay.text('Score: ' + score);
      mole.remove();
    });
    setTimeout(function() {
      mole.remove();
    }, 1000);
  }

  setInterval(createMole, 2000);
});
