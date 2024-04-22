import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import loading from './assets/icons/loading.gif'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Carousel = React.lazy(() => import("./components/Carousel"));
const CloudServices = React.lazy(() => import("./components/cloudServices/CloudServices"));
const ComputeCloud = React.lazy(() => import("./components/cloudServices/cloudSection/ComputeCloud"));
const SecureCloud = React.lazy(() => import("./components/cloudServices/cloudSection/SecureCloud"));
const HostCloud = React.lazy(() => import("./components/cloudServices/cloudSection/HostCloud"));
const DriveCloud = React.lazy(() => import("./components/cloudServices/cloudSection/DriveCloud"));
const ERPCloud = React.lazy(() => import("./components/cloudServices/cloudSection/ERPCloud"));
const Support = React.lazy(() => import("./components/cloudServices/cloudSection/Support"));
const SoftwareSolutions = React.lazy(() => import("./components/softwareServices/SoftwareServices"));
const Marketing = React.lazy(() => import("./components/marketing/Marketing"));
const ElectronicRepair = React.lazy(() => import("./components/electronicRepair/ElectronicRepair"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className='text-center my-5'>
          <img src={loading} alt='' height='100px' width='100px'/>
          </div>}>
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
            <Route exact path="/electronics_repairs" element={<ElectronicRepair />} />
          </Routes>
        </Suspense>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
