import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import TrainSelectionPage from "./pages/TrainSelectionPage";
import PlaceSelectionPage from "./pages/PlaceSelectionPage";
import PurchaseConfirmationPage from "./pages/PurchaseConfirmationPage";
import SuccessfullNotificationPage from "./pages/SuccessfulNotificationPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/train.html" element={<TrainSelectionPage />} />
        <Route path="/catalog/:id.html" element={<PlaceSelectionPage/>} />
        <Route path="/cart.html" element={<PurchaseConfirmationPage/>} />
        <Route path="/about.html" element={<SuccessfullNotificationPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;