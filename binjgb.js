var Module = {
  onRuntimeInitialized: function() {
      // Your game initialization code here
      console.log("WASM Module initialized");

      // Example of initializing canvas and context
      var canvas = document.getElementById('gameCanvas');
      var context = canvas.getContext('2d');

      // Example drawing code (replace with your game code)
      context.fillStyle = 'green';
      context.fillRect(10, 10, 150, 100);

      // Call your game's start function
      startGame();
  }
};

function startGame() {
  // Your game logic here
  console.log("Game started");
  // Example game loop
  function gameLoop() {
      // Game logic here
      console.log("Game loop tick");

      // Example of updating canvas
      var canvas = document.getElementById('gameCanvas');
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'green';
      context.fillRect(10, 10, 150, 100);

      // Request next frame
      requestAnimationFrame(gameLoop);
  }

  // Start the game loop
  gameLoop();
}
