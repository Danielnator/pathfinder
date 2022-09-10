import styles from "./Fields.module.css";

const WallField = (props: any) => {
  return (
    <div
      className={styles.wall}
      onClick={() => props.removeWall(props.element)}
    ></div>
  );
};

export { WallField };
