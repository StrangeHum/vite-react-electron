import React, { useEffect, useState } from "react";
import { Script, SHAction } from "types/scriptTypes";
import { createAction as CreateAction } from "./createAction";
import { RenderElementsActions } from "./RenderElementsActions";

//https://habr.com/ru/articles/694832/
interface input {
  script: Script;
}

export const Scripts = ({ script }: input) => {
  const [state, setState] = useState<Array<SHAction>>(script.arrayActions);

  const createVal = (name: string, action: string) => {
    let temp: SHAction = {
      name: name,
      action: action,
    };
    setState((old) => {
      let value = [...old, temp];
      script.arrayActions = value;
      console.log(script);
      return value;
    });
  };

  const deleteVal = (name: string) => {
    setState((old) => old.filter((item) => item.name != name));
  };

  return (
    <React.Fragment>
      <h1>{script.name}</h1>

      <RenderElementsActions actions={state} />
      <CreateAction createVal={createVal} deleteVal={deleteVal} />
    </React.Fragment>
  );
};
