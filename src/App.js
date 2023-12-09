import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Profile from "./components/profile1";
import Profile2 from "./components/profile2";
import Profile3 from "./components/profile3";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile/>} />
        <Route path="/nikhil" element={<Profile2/>} />
        <Route path="/prabal" element={<Profile3/>} />
        </Routes>
       </BrowserRouter>

    </>
  );
}

export default App;
