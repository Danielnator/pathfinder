const FreeField = (props: any) => {
  const allowDrop = (event: any) => {
    event.preventDefault();
  };

  const drop = (event: any) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("element");
    props.onDropElement(data, props.element.id);
  };

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      onDrop={drop}
      onDragOver={allowDrop}
      onClick={() => props.setWall(props.element)}
    ></div>
  );
};

export { FreeField };
