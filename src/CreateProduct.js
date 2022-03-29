import { useFormik } from "formik";
import React, { useContext } from "react";
import UserContext from "./UserContext";

function CreateProduct() {
  const productData=useContext(UserContext)
  let formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      price: "",
      address: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please Enter Product Name";
        if (!values.brand) {
          errors.brand = "Please Enter Brand Name";
        }

        if (!values.price) {
          errors.price = "Please Enter Price";
        }
        if (!values.address) {
          errors.address = "Please Enter Address";
        }
      }
      return errors;
    },
    onSubmit: (values) => {
      productData.setProducts([...productData.products,values])
      formik.resetForm();
    },
  });
  return (
    <div>
      <form className="row g-3" onSubmit={formik.handleSubmit}>
        <div className="col-md-6 col-lg- col-xl-6">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        </div>
        <div className="col-md-6 col-lg- col-xl-6">
          <label className="form-label">Brand</label>
          <input
            type="text"
            className="form-control"
            id="brand"
            name="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.brand}</span>
        </div>
        <div className="col-md-6 col-lg- col-xl-6">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.price}</span>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.address}</span>
        </div>
        <div className="col-12">
          <button disabled={!Object.keys(formik.errors).length === 0} className="btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
