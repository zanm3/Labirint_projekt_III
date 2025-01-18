const canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const mazeSize = 30; // Number of rows and columns
const cellSize = canvas.width / mazeSize; // Size of each cell in pixels

// Define the maze grid structure (1 = wall, 0 = path)
const maze = [
  // Replace this array with the 30x30 maze grid structure
  // Each sub-array represents a row in the maze
  // Example:
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
  // ...
  // Total: 30 sub-arrays, each with 30 elements
];

// Draw the maze function
function drawMaze() {
  ctx.fillStyle = 'black'; // Wall color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white'; // Path color
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 0) {
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }
}

// Placeholder maze for visualization
const placeholderMaze = Array(30).fill(null).map(() => Array(30).fill(1));
placeholderMaze[0][0] = 0; // Example starting point
placeholderMaze[29][29] = 0; // Example ending point

// Use placeholder maze
maze.push(...placeholderMaze);

// Draw the maze
window.onload = drawMaze;
