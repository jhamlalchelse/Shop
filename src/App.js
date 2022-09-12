import ShoppingPage from "./ShoppingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Receipt from "./Receipt";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
