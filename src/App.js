// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import FondTechHome from "./FondTechHome";
import AboutUs from "./AboutUs";
import OEMServices from "./OEMService";
import OnlinePlatformPage from "./OnlinePlatformPage";
import HealthTechSolutionPage from "./HealthTechSolutionPage";
import ContactUs from "./ContactUs";
function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FondTechHome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OEMServices />} />
          <Route path="/platform" element={<OnlinePlatformPage />} />
          <Route path="/health" element={<HealthTechSolutionPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
