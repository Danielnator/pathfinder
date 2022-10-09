import { sleep } from "../../utils/sleep";

const buildPath = async (grid: any, setGrid: any, end: any, speed: string) => {
  const path = [];

  let idx = end.parent.split("-");
  let pi = idx[0];
  let pj = idx[1];
  let currentNode = grid[pi][pj];

  while (currentNode.type !== "start") {
    console.log("currentNode: ", currentNode);
    const [i, j] = currentNode.index;
    path.push([i, j]);

    let pi = currentNode.parent.split("-")[0];
    let pj = currentNode.parent.split("-")[1];
    currentNode = grid[pi][pj];
  }

  await sleep(200);

  for (let k = path.length - 1; k >= 0; k--) {
    const [i, j] = path[k];

    setGrid((prev: any) => {
      const newElems = [...prev];
      newElems[i][j].type = "path";

      return newElems;
    });
    await sleep(speed);
  }
};

export { buildPath };
