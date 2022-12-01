import "./styles.css";
import { Form } from "./Pages/Form";
import { Routes, Route } from "react-router-dom";
import { GetIdData } from "./Pages/GetIdData";
import { RandomData } from "./Pages/RandomData";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/getiddata/:id" element={<GetIdData />} />
        <Route path="/random" element={<RandomData />} />
      </Routes>
    </div>
  );
}
