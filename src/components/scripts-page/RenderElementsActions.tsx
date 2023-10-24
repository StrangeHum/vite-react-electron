import React from "react";
import { SHAction } from "types/scriptTypes";

interface input {
  actions: Array<SHAction>;
}

export const RenderElementsActions = ({ actions }: input) => {
  return (
    <ul>
      {actions.map((value, index) => {
        return (
          <li key={index}>
            <a>
              {value.name} - {value.action}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
