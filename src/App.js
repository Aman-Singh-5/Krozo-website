import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Landing } from './components/Landing';
import { Aboutme } from "./components/about/Aboutme";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<Aboutme/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;