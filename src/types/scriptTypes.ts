export type SHAction = {
  name: string;
  action: string;
};
type Script = {
  name: string;
  arrayActions: Array<SHAction>;
};
export type { Script };
