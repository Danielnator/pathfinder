import { sleep } from "../../utils/sleep";
import { buildPath } from "./buildPath";

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const findPathDFS = async (
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
  const stack = [start];
  let end;

  while (stack.length > 0) {
    const next = stack.pop();

    console.log("VISTING IN DFS: ", next.id);

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
    /*if (true) {
      await new Promise((r) => setTimeout(r, 20));
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
        stack.push(grid[x][y]);
        visited.add(grid[x][y].id);
      }
    }
  }

  if (end) {
    await buildPath(grid, setGrid, end, speed);
  } else {
    alert("NO PATH");
  }
  isBlocking.current = false;
};

export { findPathDFS };
