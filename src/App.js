import { Dashboard } from "components/Admin/Dashboard";
import { MainMenu } from "components/StaticScreens/NavigationScreen";
import { PaymentScreen } from "components/StaticScreens/PaymentScreen";
import { SuccessScreen } from "components/StaticScreens/SuccessScreen";
import { LandingLayout } from "Layout/LandingLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/payment" element={<PaymentScreen />} />
        <Route exact path="/success" element={<SuccessScreen />} />
        <Route exact path="/menu" element={<MainMenu />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
