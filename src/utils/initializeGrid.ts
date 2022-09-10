const initializeGrid = () => {
  const grid: any[][] = [];
  for (let i = 0; i < 20; i++) {
    let newRow: any[] = [];

    for (let j = 0; j < 50; j++) {
      let type = "free";
      if (i === 3 && j === 9) {
        type = "start";
      }
      if (i === 18 && j === 38) {
        type = "end";
      }
      let newObj = { type: type, index: [i, j], id: `${i}-${j}` };
      newRow.push(newObj);
    }
    grid.push(newRow);
  }
  return grid;
};

export { initializeGrid };
