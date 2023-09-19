import Navbar from "./Navbar.jsx";
import "./header.scss";
import { ReactComponent as SCV } from "/src/public/brow-icon.svg";

function Header() {
  return (
    <div className="header">
      <SCV
        className="header_logo"
        height="200"
        width="200"
        viewBox="0 0 512 512"
      />
      <div className="header_nav">
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
