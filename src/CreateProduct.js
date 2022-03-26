import React from "react";

function CreateProduct() {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-6 col-lg- col-xl-6">
          <label for="name" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="col-md-6 col-lg- col-xl-6">
          <label for="brand" className="form-label">
            Brand
          </label>
          <input type="text" className="form-control" id="brand" required />
        </div>
        <div className="col-md-6 col-lg- col-xl-6">
          <label for="price" className="form-label">
            Price
          </label>
          <input type="text" className="form-control" id="price" required />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6">
          <label for="address" className="form-label">
            Address
          </label>
          <input type="number" className="form-control" id="address" required />
        </div>
        <div className="col-12">
          <button className="btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
