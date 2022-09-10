const StartField = (props: any) => {
  const drag = (event: any) => {
    event.dataTransfer.setData("element", "start");
  };

  return (
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
    </div>
  );
};

export { StartField };
