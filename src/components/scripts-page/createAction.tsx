import { useRef } from "react";

interface input {
  createVal: Function;
  deleteVal: Function;
}

export const createAction = ({ createVal, deleteVal }: input) => {
  const inputData1 = useRef<HTMLInputElement>(null);

  return (
    <>
      <input type="text" ref={inputData1} />

      <button
        onClick={() => {
          createVal(inputData1.current!.value, "action");
        }}
      >
        create
      </button>

      <button
        onClick={() => {
          deleteVal(inputData1.current!.value);
        }}
      >
        delete
      </button>
    </>
  );
};
