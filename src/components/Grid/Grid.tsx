import { EndField } from "../Fields/EndField";
import { FreeField } from "../Fields/FreeField";
import { PathField } from "../Fields/PathField";
import { StartField } from "../Fields/StartField";
import { VisitedField } from "../Fields/VisitedField";
import { WallField } from "../Fields/WallField";
import styles from "./Grid.module.css";

interface GridProps {
  setGrid(any: any): any;
  grid: any[][];
}

const Grid = (props: GridProps) => {
  const onDropElement = (element: "start" | "end", dest: string) => {
    props.setGrid((prev: any[][]) =>
      prev.map((row: any) =>
        row.map((el: any) => {
          if (el.type === element) {
            el.type = "free";
          }
          if (el.id === dest) {
            el.type = element;
          }
          return el;
        })
      )
    );
  };

  const setWall = (element: any) => {
    const [i, j] = element.index;

    props.setGrid((prev: any) => {
      const newElems = [...prev];
      newElems[i][j].type = "wall";
      return newElems;
    });
  };

  const removeWall = (element: any) => {
    const [i, j] = element.index;

    props.setGrid((prev: any) => {
      const newElems = [...prev];
      newElems[i][j].type = "free";
      return newElems;
    });
  };

  return (
    <div style={{ height: "92%", overflow: "hidden" }}>
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          width: "100%",
          height: "100%",
        }}
      >
        <tbody>
          {props.grid.map((row, index) => (
            <tr key={`row-${index}`} style={{ height: "5%" }}>
              {row.map((e, col) => {
                if (e.type === "start") {
                  return <StartField element={e} />;
                } else if (e.type === "end") {
                  return <EndField element={e} />;
                } else if (e.type === "wall") {
                  return <WallField element={e} removeWall={removeWall} />;
                } else if (e.type === "visited") {
                  return <VisitedField element={e} />;
                } else if (e.type === "path") {
                  return <PathField element={e} />;
                } else {
                  return (
                    <FreeField
                      onDropElement={onDropElement}
                      element={e}
                      setWall={setWall}
                    />
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Grid };
