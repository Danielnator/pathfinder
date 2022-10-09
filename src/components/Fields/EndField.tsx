import { memo } from "react";
import fieldPropsAreEqual from "../../utils/fieldPropsAreEqual";
import styles from "./Fields.module.css";

const EndField = memo((props: any) => {
  const drag = (event: any) => {
    event.dataTransfer.setData("element", "end");
  };

  console.log("End rendering: ", props.element.id);

  return (
    <td key={`node-${props.element.id}`} className={`${styles.gridItem}`}>
      <div
        draggable="true"
        onDragStart={(event) => drag(event)}
        style={{
          fontWeight: "bolder",
          backgroundColor: "rgb(30,235,30)",
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
          E
        </p>
      </div>
    </td>
  );
}, fieldPropsAreEqual);

export { EndField };
