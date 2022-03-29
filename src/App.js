import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Chart from "./Chart";
import CreateUser from "./CreateUser";
import CreateProduct from "./CreateProduct";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import ViewProduct from "./ViewProduct";
import EditProduct from "./EditProduct";
import { UserProvider } from "./UserContext";
import { useState } from "react";
function App() {
  const [users,setUsers] =useState([]);
  const [products,setProducts]= useState([]) ;
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{users,setUsers,products,setProducts}}>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="" element={<Chart />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users/create-user" element={<CreateUser />} />
                <Route
                  path="/products/create-product"
                  element={<CreateProduct />}
                />
                <Route path="/users/view-user/:id" element={<ViewUser />} />
                <Route path="/users/edit-user/:id" element={<EditUser />} />
                <Route
                  path="/products/view-product/:id"
                  element={<ViewProduct />}
                />
                <Route
                  path="/products/edit-product/:id"
                  element={<EditProduct />}
                />
              </Routes>
            </div>
          </div>
        </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
