const HORIZONTAL = 0;
const VERTICAL = 1;

const generateRecursiveDivisionMaze = async (isBlocking: any, setGrid: any) => {
  if (isBlocking.current) {
    return;
  }
  isBlocking.current = true;

  //Generate outer walls
  for (let j = 0; j < 50; j++) {
    setGrid((prev: any) => {
      const newElems = [...prev];
      if (newElems[0][j].type === "free") {
        newElems[0][j].type = "wall";
      }
      return newElems;
    });
    if (j % 2 === 0) {
      await new Promise((r) => setTimeout(r, 20));
    }
  }
  for (let i = 0; i < 20; i++) {
    setGrid((prev: any) => {
      const newElems = [...prev];
      if (newElems[i][49].type === "free") {
        newElems[i][49].type = "wall";
      }
      return newElems;
    });
    if (i % 2 === 0) {
      await new Promise((r) => setTimeout(r, 20));
    }
  }
  for (let j = 0; j < 50; j++) {
    setGrid((prev: any) => {
      const newElems = [...prev];
      if (newElems[19][50 - 1 - j].type === "free") {
        newElems[19][50 - 1 - j].type = "wall";
      }
      return newElems;
    });
    if (j % 2 === 0) {
      await new Promise((r) => setTimeout(r, 20));
    }
  }
  for (let i = 0; i < 20; i++) {
    setGrid((prev: any) => {
      const newElems = [...prev];
      if (newElems[20 - 1 - i][0].type === "free") {
        newElems[20 - 1 - i][0].type = "wall";
      }
      return newElems;
    });
    if (i % 2 === 0) {
      await new Promise((r) => setTimeout(r, 20));
    }
  }

  await divideGrid(setGrid, 1, 19, 1, 49);

  isBlocking.current = false;
};

const divideGrid = async (
  setGrid: any,
  minRow: number,
  maxRow: number,
  minCol: number,
  maxCol: number
) => {
  if (maxRow - minRow <= 1 || maxCol - minCol <= 1) {
    return;
  }
  let orientation = chooseOrientation(maxRow - minRow, maxCol - minCol);

  console.log(
    "CALLed WITH: orientation=" + orientation,
    minRow,
    maxRow,
    minCol,
    maxCol
  );

  if (orientation === HORIZONTAL) {
    const rowOptions = [];
    for (let idx = minRow; idx < maxRow; idx++) {
      if (idx % 2 === 0) {
        rowOptions.push(idx);
      }
    }
    let rowNum = rowOptions[Math.floor(Math.random() * rowOptions.length)];

    const passageOptions = [];
    for (let idx = minCol; idx < maxCol; idx++) {
      if (idx % 2 !== 0) {
        passageOptions.push(idx);
      }
    }
    let passage =
      passageOptions[Math.floor(Math.random() * passageOptions.length)];

    console.log("HORIZONTAL", rowNum, passage);

    for (let j = minCol; j < maxCol; j++) {
      setGrid((prev: any) => {
        const newElems = [...prev];
        if (j !== passage && newElems[rowNum][j].type === "free") {
          newElems[rowNum][j].type = "wall";
        }
        return newElems;
      });
      if (j % 3 === 0) {
        await new Promise((r) => setTimeout(r, 100));
      }
    }
    await divideGrid(setGrid, minRow, rowNum, minCol, maxCol);
    await divideGrid(setGrid, rowNum + 1, maxRow, minCol, maxCol);
  } else if (orientation === VERTICAL) {
    const colOptions = [];
    for (let idx = minCol; idx < maxCol; idx++) {
      if (idx % 2 === 0) {
        colOptions.push(idx);
      }
    }
    let colNum = colOptions[Math.floor(Math.random() * colOptions.length)];

    const passageOptions = [];
    for (let idx = minRow; idx < maxRow; idx++) {
      if (idx % 2 !== 0) {
        passageOptions.push(idx);
      }
    }
    let passage =
      passageOptions[Math.floor(Math.random() * passageOptions.length)];

    console.log("VERTICAL", colNum, passage);

    for (let i = minRow; i < maxRow; i++) {
      setGrid((prev: any) => {
        const newElems = [...prev];
        if (i !== passage && newElems[i][colNum].type === "free") {
          newElems[i][colNum].type = "wall";
        }
        return newElems;
      });
      if (i % 3 === 0) {
        await new Promise((r) => setTimeout(r, 100));
      }
    }
    await divideGrid(setGrid, minRow, maxRow, minCol, colNum);
    await divideGrid(setGrid, minRow, maxRow, colNum + 1, maxCol);
  }
};

const chooseOrientation = (height: number, width: number) => {
  if (height < width) {
    return VERTICAL;
  } else if (width < height) {
    return HORIZONTAL;
  } else {
    return Math.random() * 10 > 5 ? HORIZONTAL : VERTICAL;
  }
};

export { generateRecursiveDivisionMaze };
