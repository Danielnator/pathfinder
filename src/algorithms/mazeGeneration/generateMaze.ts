import { generateRandomMaze } from "./randomMaze";
import { generateRecursiveDivisionMaze } from "./recursiveDivision";

const generateMaze = (algorithm: string, isBlocking: any, setGrid: any) => {
  console.log("CALLING GNERATE MAZE: ", algorithm, isBlocking, setGrid);

  if (algorithm === "random") {
    generateRandomMaze(isBlocking, setGrid);
    return;
  } else if (algorithm === "recursive") {
    generateRecursiveDivisionMaze(isBlocking, setGrid);
  }
};

export { generateMaze };
