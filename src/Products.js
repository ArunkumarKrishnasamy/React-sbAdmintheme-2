import React,{useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
// let productlist = [
//   {
//     id: "Product-1",
//     name: "iPhone 11",
//     brand: "Apple",
//     price: "$100000",
//     address: "Chennai",
//   },
//   {
//     id: "Product-2",
//     name: "Galaxy S7",
//     brand: "Samsung",
//     price: "$25000",
//     address: "Bangalore",
//   },
//   {
//     id: "Product-3",
//     name: "Experia max",
//     brand: "Sony",
//     price: "$350000",
//     address: "Delhi",
//   },
//   {
//     id: "Product-4",
//     name: "V20 Pro",
//     brand: "Vivo",
//     price: "$40000",
//     address: "Mumbai",
//   },
//   {
//     id: "Product-5",
//     name: "F17 Reno",
//     brand: "Oppo",
//     price: "$550000",
//     address: "Kolkata",
//   },
// ];
function Products() {
  const productData= useContext(UserContext)
 
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Product Details</h1>
        <Link
          to={"/products/create-product"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          Product
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
             productData.products.map((product,index) => {
                return (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>{product.address}</td>
                    <td>
                      {" "}
                      <Link to={`/products/view-product/${index}`}>
                        {" "}
                        <button className="btn btn-primary mx-2"> View</button>
                      </Link>
                      <Link to={`/products/edit-product/${index}`}>
                        {" "}
                        <button className="btn btn-warning me-2"> Edit</button>
                      </Link>
                      <button className="btn btn-danger me-2"> Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
