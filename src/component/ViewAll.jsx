import React from 'react'
import Nav from './Nav'

const ViewAll = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Empid</th>
      <th scope="col">Dept</th>
      <th scope="col">PhoneNo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>10</td>
      <td>cs</td>
      <td>801242378</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Markus</td>
      <td>11</td>
      <td>civil</td>
      <td>801242379</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Markol</td>
      <td>13</td>
      <td>Ec</td>
      <td>801242568</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewAll