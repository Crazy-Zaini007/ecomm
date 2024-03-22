import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";
import CloudServices from "./components/cloudServices/CloudServices";
import ComputeCloud from "./components/cloudServices/cloudSection/ComputeCloud";
import SecureCloud from "./components/cloudServices/cloudSection/SecureCloud";
import HostCloud from "./components/cloudServices/cloudSection/HostCloud";
import DriveCloud from "./components/cloudServices/cloudSection/DriveCloud";
import ERPCloud from "./components/cloudServices/cloudSection/ERPCloud";
import Support from "./components/cloudServices/cloudSection/Support";
import SoftwareSolutions from "./components/softwareServices/SoftwareServices";
import Marketing from "./components/marketing/Marketing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route exact path="/cloud/services" element={<CloudServices />} />
          <Route exact path="/cloud/services/compute" element={<ComputeCloud />} />
          <Route exact path="/cloud/services/secure" element={<SecureCloud />} />
          <Route exact path="/cloud/services/hosting" element={<HostCloud />} />
          <Route exact path="/cloud/services/drive" element={<DriveCloud />} />
          <Route exact path="/cloud/services/erp" element={<ERPCloud />} />
          <Route exact path="/cloud/services/support" element={<Support />} />
          <Route exact path="/software/services" element={<SoftwareSolutions />} />
          <Route exact path="/marketing/services" element={<Marketing />} />






        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
