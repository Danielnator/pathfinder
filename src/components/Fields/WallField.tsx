import { memo } from "react";
import fieldPropsAreEqual from "../../utils/fieldPropsAreEqual";
import styles from "./Fields.module.css";

const WallField = memo((props: any) => {
  console.log("Wall rendering: ", props.element.id);

  return (
    <td
      key={`node-${props.element.id}`}
      className={styles.wall}
      onClick={() => props.removeWall(props.element)}
    >
      <div className={styles.wallFilling}></div>
    </td>
  );
}, fieldPropsAreEqual);

export { WallField };
