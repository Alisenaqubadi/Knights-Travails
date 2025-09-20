import { Queue } from "./queue.js"

function knightMoves(start,end) {
    const newQueue = new Queue();
    newQueue.enqueue([start, [start]]);
    let solved = false;
    let p = [];

    while(!solved){

    const [pos, pathSoFar] = newQueue.dequeue();
    const nextMoves = calculateKnight(pos)

    for(let i = 0; i < nextMoves.length; i++){

        if(end[1] === nextMoves[i][1] && end[0] === nextMoves[i][0]){
            solved = true
               return pathSoFar.concat([nextMoves[i]]);
        }

        const newPath = pathSoFar.concat([nextMoves[i]]);
        newQueue.enqueue([nextMoves[i],newPath])
    }
   }
}

function calculateKnight(key) {
  const x = key[0], y = key[1];

  let array = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  // loop backwards so splice doesn’t mess indexes
  for (let i = array.length - 1; i >= 0; i--) {
    const [nx, ny] = array[i];
    if (nx < 0 || nx > 7 || ny < 0 || ny > 7) {
      array.splice(i, 1);
    }
  }

  return array;
}



export {
    knightMoves,
}