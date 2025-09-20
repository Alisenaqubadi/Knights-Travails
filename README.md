# Knights Travails

This project is a solution to the "Knights Travails" problem, part of The Odin Project curriculum. It calculates the shortest path a knight can take on a chessboard from a starting position to a target position.

## Features

- **Knight's Moves Calculation**: Determines all possible moves a knight can make from a given position on an 8x8 chessboard.
- **Shortest Path Finder**: Uses a breadth-first search algorithm to find the shortest path between two positions.
- **Queue Implementation**: A custom queue class is used to manage the breadth-first search process.

## How It Works

1. **Knight's Moves**:
   - The `calculateKnight` function generates all valid moves a knight can make from a given position, ensuring the moves stay within the bounds of the chessboard.

2. **Shortest Path**:
   - The `knightMoves` function uses a breadth-first search algorithm to explore all possible paths from the starting position to the target position. It returns the shortest path as an array of positions.

3. **Queue**:
   - A custom `Queue` class is implemented to manage the nodes during the breadth-first search.

## Code Overview

### `knight-travails.js`

- **`knightMoves(start, end)`**:
  - Finds the shortest path a knight can take from `start` to `end`.
  - Uses the `calculateKnight` function to determine valid moves and a queue to explore paths.

- **`calculateKnight(key)`**:
  - Calculates all valid moves a knight can make from the given position `key`.

### `queue.js`

- **Queue Class**:
  - Implements a queue with methods for enqueue, dequeue, peek, and checking if the queue is empty.

### `main.js`

- Demonstrates the functionality of the `knightMoves` function with a sample input.

## Example Usage

```javascript
import { knightMoves } from "./knight-travails.js";

console.log(knightMoves([0, 1], [7, 6]));
// Output: Shortest path as an array of positions
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Alisenaqubadi/Knights-Travails.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Knights-Travails
   ```
3. Run the example:
   ```bash
   node src/main.js
   ```

## Technologies Used

- JavaScript (ES6+)
- Node.js

## Acknowledgments

This project is part of [The Odin Project](https://www.theodinproject.com/), a free, open-source curriculum for learning web development.