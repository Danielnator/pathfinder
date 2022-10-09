import { sleep } from "../../utils/sleep";
import { buildPath } from "./buildPath";

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const findPathBFS = async (
  isBlocking: any,
  grid: any,
  setGrid: any,
  speed: string
) => {
  if (isBlocking.current) {
    return;
  }
  isBlocking.current = true;

  let start: any;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 50; j++) {
      if (grid[i][j].type === "start") {
        start = grid[i][j];
      }
    }
  }

  const visited = new Set();
  const queue = [start];
  let end;

  while (queue.length > 0) {
    const next = queue.shift();

    if (next.type === "end") {
      end = { ...next };
      console.log("FOUND END: ", end);
      console.log(grid);
      break;
    }

    let [i, j] = next.index;

    setGrid((prev: any) => {
      const newElems = [...prev];
      if (newElems[i][j].type === "free") {
        newElems[i][j].type = "visited";
      }
      return newElems;
    });
    /*if (i % 2 === 0) {
      await new Promise((r) => setTimeout(r, 50));
    }*/
    await sleep(speed);

    for (let [dx, dy] of DIRECTIONS) {
      let x = i + dx;
      let y = j + dy;
      if (
        x >= 0 &&
        x < 20 &&
        y >= 0 &&
        y < 50 &&
        (grid[x][y].type === "free" || grid[x][y].type === "end") &&
        !visited.has(grid[x][y].id)
      ) {
        grid[x][y].parent = next.id;
        queue.push(grid[x][y]);
        visited.add(grid[x][y].id);
      }
    }
  }

  if (end) {
    await buildPath(grid, setGrid, end, speed);
  } else {
    alert("NO PATH FOUND");
  }
  isBlocking.current = false;
};

export { findPathBFS };
