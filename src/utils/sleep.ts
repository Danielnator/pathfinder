const sleep = async (msOrSpeed: string | number) => {
  if (typeof msOrSpeed === "number") {
    await new Promise((r) => setTimeout(r, msOrSpeed));
    return;
  }

  let time: number;

  if (msOrSpeed === "Fast") {
    time = 1;
  } else if (msOrSpeed === "Medium") {
    time = 50;
  } else {
    time = 100;
  }
  await new Promise((r) => setTimeout(r, time));
};

export { sleep };
