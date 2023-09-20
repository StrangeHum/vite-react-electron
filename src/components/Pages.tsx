import { Routes, Route } from "react-router-dom";
import Setting from "./settings-page/settings.tsx";
import MainMenu from "./main-menu/Main-menu.tsx";
import Scripts from "./scripts-page/Scripts.tsx";
import GlobalEvents from "./global-events/Global-events.tsx";

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/main-menu" element={<MainMenu />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/scripts" element={<Scripts />} />
      <Route path="/global-events" element={<GlobalEvents />} />
    </Routes>
  );
}
{
  /* <Route exact path="/" element={<MainMenu />} />
      <Route exact path="/main-menu" element={<MainMenu />} /> */
}
