import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDelivery from './Pages/Delivery/AllDelivery';
import RegulerDelivery from './Pages/Delivery/RegulerDelivery';
import ExpressDelivery from './Pages/Delivery/ExpressDelivery';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllDelivery />} />
            <Route path="/allDelivery" element={<AllDelivery />} />
            <Route path="/regulerDelivery" element={<RegulerDelivery />} />
            <Route path="/expressDelivery" element={<ExpressDelivery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
