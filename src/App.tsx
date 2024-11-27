import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CallUserApi from "./pages/CallUserApi";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-api" element={<CallUserApi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
