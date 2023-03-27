import { PaymentScreen } from "components/StaticScreens/PaymentScreen";
import { LandingLayout } from "Layout/LandingLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/payment" element={<PaymentScreen />} />

        <Route path="/" element={<LandingLayout />} />
        {/* <Navigate from="*" to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
