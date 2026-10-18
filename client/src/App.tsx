import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Found from "./pages/Found";
import Lost from "./pages/Lost";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/found" element={<Found />} />
        <Route path="/lost" element={<Lost />} />
      </Route>
    </Routes>
  );
};

export default App;
