import { memo } from "react";
import fieldPropsAreEqual from "../../utils/fieldPropsAreEqual";
import styles from "./Fields.module.css";

const StartField = memo((props: any) => {
  const drag = (event: any) => {
    event.dataTransfer.setData("element", "start");
  };

  console.log("Start rendering: ", props.element.id);

  return (
    <td key={`node-${props.element.id}`} className={`${styles.gridItem}`}>
      <div
        draggable="true"
        onDragStart={(event) => drag(event)}
        style={{
          fontWeight: "bolder",
          backgroundColor: "blue",
          borderRadius: "100%",
          height: "95%",
          width: "95%",
          margin: "2%",
        }}
      >
        <p
          style={{
            display: "inline",
            color: "white",
            fontSize: "1vw",
            verticalAlign: "middle",
            lineHeight: "100%",
          }}
        >
          S
        </p>
      </div>{" "}
    </td>
  );
}, fieldPropsAreEqual);

export { StartField };
