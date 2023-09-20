import { useLocation } from "react-router-dom";

export function SHLocation() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>;
}
