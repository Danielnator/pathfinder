import { memo } from "react";
import fieldPropsAreEqual from "../../utils/fieldPropsAreEqual";
import styles from "./Fields.module.css";

const VisitedField = memo((props: any) => {
  console.log("VISITED rendering: ", props.element.id);
  return (
    <td key={`node-${props.element.id}`} className={styles.gridItem}>
      <div className={styles.visited}></div>
    </td>
  );
}, fieldPropsAreEqual);

export { VisitedField };
