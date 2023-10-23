import React, { useRef } from "react";

export const createAction = () => {
  const inputData1 = useRef();
  const createVal = () => {
    let temp: SHAction = {
      name: String(count),
      action: "",
    };
    setCount((prew) => prew + 1);
    setState((old) => [...old, temp]);
  };

  const deleteVal = (name: string) => {
    setState((old) => old.filter((item) => item.name != name));
  };
  return (
    <>
      <input type="text" ref={inputData1.current}></input>
      <button onClick={}></button>
    </>
  );
};
