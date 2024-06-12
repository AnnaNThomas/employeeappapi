import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewAll = () => {
  const [data, changedata] = useState([])

  const fetchData = () => {
    axios.get("http://localhost:8083/view")
      .then(response => {
        changedata(response.data)
      })
      .catch()
      .finally()
  }
  useEffect(() => {fetchData();}, [])

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                 
                  <th scope="col">Name</th>
                  <th scope="col">Empid</th>
                  <th scope="col">Dept</th>
                  <th scope="col">PhoneNo</th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (value, index) => {
                    return <tr>
                      
                      <td>{value.name}</td>
                      <td>{value.employeeid}</td>
                      <td>{value.dept}</td>
                      <td>{value.phoneno}</td>

                    </tr>
                  }
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewAll