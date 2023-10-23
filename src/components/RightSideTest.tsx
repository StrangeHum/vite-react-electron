import { Script } from "src/types/scriptTypes";

export const RightSideTest = ({ script: value }: { script: Script }) => {
  return (
    <div>
      <a>{value.name}</a>
    </div>
  );
};
