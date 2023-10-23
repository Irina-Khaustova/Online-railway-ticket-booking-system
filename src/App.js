import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import TrainSelectionPage from "./pages/TrainSelectionPage";
import SeatsSelectionPage from "./pages/SeatsSelectionPage";
import PaymentPage from "./pages/ PaymentPage";
import SuccessfullNotificationPage from "./pages/SuccessfulNotificationPage";
import NotFoundPage from "./pages/NotFoundPage";
import PassengerPage from "./pages/PassengerPage";
import OrderCompletedPage from "./pages/OrderCompletedPage.";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/train.html" element={<TrainSelectionPage />} />
        <Route path="/wagon.html" element={<SeatsSelectionPage/>} />
        <Route path="/payment.html" element={<PaymentPage/>} />
        <Route path="/about.html" element={<SuccessfullNotificationPage/>}/>
        <Route path="/passenger.html" element={<PassengerPage/>}/>
        <Route path="/complet.html" element={<OrderCompletedPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;