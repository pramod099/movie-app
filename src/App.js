import { Routes, Route } from "react-router-dom";
import { ViewAll } from "./components/ViewAll";
import { AddMovie } from "./components/AddMovie";
import { EditMovie } from "./components/EditMovie";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ViewAll />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
        <Route path="/edit" element={<EditMovie />}></Route>
      </Routes>
    </>
  );
}

export default App;
