import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard"
import Donation from "./Pages/Donation"
import PrayerService from "./Pages/PrayerService";
import JoinUs from "./Pages/JoinUs";
import Registration from "./Pages/Registration";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/donate" element={<Donation />} /> 
          <Route path="/prayer" element={<PrayerService />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/joinus" element={<JoinUs />} /> 
          <Route path="/registration" element={<Registration />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
