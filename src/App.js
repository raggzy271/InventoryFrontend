import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Track from "./pages/Track";
import NotFound from "./pages/404";
import Dashboard from "./pages/track/Dashboard";
import Customers from "./pages/track/Customers";
import Orders from "./pages/track/Orders";
import Products from "./pages/track/Products";
import Purchases from "./pages/track/Purchases";
import Sales from "./pages/track/Sales";
import Suppliers from "./pages/track/Suppliers";
import { ToastProvider } from "./services/ToastService";

function setDarkTheme() {
  document.documentElement.setAttribute("data-bs-theme", "dark");
}

setDarkTheme();

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/signup" element={<SignUp />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/track" element={<Track />}>
            <Route exact path="/track/dashboard" element={<Dashboard />} />
            <Route exact path="/track/customers" element={<Customers />} />
            <Route exact path="/track/orders" element={<Orders />} />
            <Route exact path="/track/products" element={<Products />} />
            <Route exact path="/track/purchases" element={<Purchases />} />
            <Route exact path="/track/sales" element={<Sales />} />
            <Route exact path="/track/suppliers" element={<Suppliers />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
