import Navbar from "./Navbar.jsx";
import "./header.scss";
import Shimage from "/round-tab-icon--raccoon.png";
import SCV from "/react.svg";
function Header() {
  return (
    <div className="header">
      <img src={SCV} className="header_logo" />
      <div className="header_nav">
        <Navbar />
      </div>
    </div>
  );
}
export default Header;