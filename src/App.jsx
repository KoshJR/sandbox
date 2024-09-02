import { Grid } from "./pages/Grid/Grid";
import { Home } from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/index.css";

function App() {
  return (
    <div className="container">
      <div className="content-wrapper">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      
      </div>
    </div>
  );
}

export default App;
