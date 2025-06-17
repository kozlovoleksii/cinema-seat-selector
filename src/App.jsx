import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";
import { SeatSelectionPage } from "./pages/SeatSelectionPage/SeatSelectionPage"
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="seats" element={<SeatSelectionPage />} />
        <Route path="success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}

export default App;
