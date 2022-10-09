import { memo } from "react";
import fieldPropsAreEqual from "../../utils/fieldPropsAreEqual";
import styles from "./Fields.module.css";

const PathField = memo((props: any) => {
  console.log("Path rendering: ", props.element.id);
  return (
    <td key={`node-${props.element.id}`} className={styles.gridItem}>
      <div className={styles.path}></div>
    </td>
  );
}, fieldPropsAreEqual);

export { PathField };
