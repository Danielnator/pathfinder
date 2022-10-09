import { memo } from "react";
import fieldPropsAreEqual from "../../utils/fieldPropsAreEqual";
import styles from "./Fields.module.css";

const FreeField = memo((props: any) => {
  const allowDrop = (event: any) => {
    event.preventDefault();
  };

  const drop = (event: any) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("element");
    props.onDropElement(data, props.element.id);
  };

  return (
    <td
      key={`node-${props.element.id}`}
      className={`${styles.gridItem}`}
      onDrop={drop}
      onDragOver={allowDrop}
      onClick={() => props.setWall(props.element)}
    >
      <div style={{ height: "100%", width: "100%" }}></div>
    </td>
  );
}, fieldPropsAreEqual);

export { FreeField };
