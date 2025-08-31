import "./App.css";
import User from "./components/User";
import DasboardUsers from "./components/DasboardUsers";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/dashboard" element={<DasboardUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
