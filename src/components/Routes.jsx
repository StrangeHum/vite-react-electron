import { Routes, Route } from "react-router-dom";
import Setting from "./settings-page/settings.jsx";
import MainMenu from "./main-menu/Main-menu.jsx";
import Scripts from "./scripts-page/Scripts.jsx";
import GlobalEvents from "./global-events/Global-events.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainMenu />} />
      <Route exact path="/main-menu" element={<MainMenu />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/scripts" element={<Scripts />} />
      <Route path="/global-events" element={<GlobalEvents />} />
    </Routes>
  );
}
export default App;
