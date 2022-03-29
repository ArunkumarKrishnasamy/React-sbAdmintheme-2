import React from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {
  let params=useParams();
  return (
    <div>
      <h1> Edit {params.id}</h1>
        <form className="row g-3">
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label for="position" className="form-label">
            Position
          </label>
          <input type="text" className="form-control" id="position" required />
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label for="office" className="form-label">
            Office Location
          </label>

          <input type="text" className="form-control" id="office" required />
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label for="age" className="form-label">
            Age
          </label>
          <input type="number" className="form-control" id="age" required />
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label for="startdate" className="form-label">
            Start Date
          </label>
          <input type="date" className="form-control" id="startdate" required />
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label for="salary" className="form-label">
            Salary
          </label>
          <input type="number" className="form-control" id="salary" required />
        </div>

        <div className="col-12">
          <button className="btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUser