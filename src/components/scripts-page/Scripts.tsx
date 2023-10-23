import React, { useEffect, useState } from "react";
import { Script, SHAction } from "types/scriptTypes";
import { createAction as Test1 } from "./createAction";

//https://habr.com/ru/articles/694832/
interface input {
  script: Script;
}

export const Scripts = ({ script }: input) => {
  const [state, setState] = useState<Array<SHAction>>(script.arrayActions);
  const [count, setCount] = useState(script.arrayActions.length);

  
  
  return (
    <React.Fragment>
      <h1>{script.name}</h1>
      <ul>
        {state.map((value, index) => {
          return (
            <li key={index}>
              <a>
                {value.name} - {value.action}
              </a>
              <button onClick={() => deleteVal(value.name)}>x</button>
            </li>
          );
        })}
      </ul>
      <Test1 />
      <button onClick={createVal}>create</button>
      {/* <CreateScriptAction/> */}
    </React.Fragment>
  );
};
