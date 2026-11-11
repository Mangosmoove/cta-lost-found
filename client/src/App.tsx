import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Found from "./pages/Found";
import Lost from "./pages/Lost";
import Activity from "./pages/Activity";
import FoundDetail from "./pages/FoundDetail";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/found" element={<Found />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity/found/:id" element={<FoundDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
