import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import TrainSelectionPage from "./pages/TrainSelectionPage";
import SeatsSelectionPage from "./pages/SeatsSelectionPage";
import PurchaseConfirmationPage from "./pages/PurchaseConfirmationPage";
import SuccessfullNotificationPage from "./pages/SuccessfulNotificationPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/train.html" element={<TrainSelectionPage />} />
        <Route path="/wagon/:id.html" element={<SeatsSelectionPage/>} />
        <Route path="/cart.html" element={<PurchaseConfirmationPage/>} />
        <Route path="/about.html" element={<SuccessfullNotificationPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;