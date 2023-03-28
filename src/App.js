import { Dashboard } from "components/Admin/Dashboard";
import { PaymentScreen } from "components/StaticScreens/PaymentScreen";
import { LandingLayout } from "Layout/LandingLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/payment" element={<PaymentScreen />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
