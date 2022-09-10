const generateRandomMaze = async (isBlocking: any, setGrid: any) => {
  if (isBlocking.current) {
    return;
  }
  isBlocking.current = true;
  let numWalls = Math.floor(Math.random() * 100) + 25;
  for (let idx = 0; idx < numWalls; idx++) {
    let i = Math.floor(Math.random() * 20);
    let j = Math.floor(Math.random() * 50);
    setGrid((prev: any) => {
      const newElems = [...prev];
      if (newElems[i][j].type === "free") {
        newElems[i][j].type = "wall";
      }
      return newElems;
    });
    if (idx % 2 === 0) {
      await new Promise((r) => setTimeout(r, 1));
    }
  }
  isBlocking.current = false;
};

export { generateRandomMaze };
