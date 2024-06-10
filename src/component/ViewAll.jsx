import React, { useState } from 'react'
import Nav from './Nav'

const ViewAll = () => {
    const[data,changedata]=useState(
        [{
            "name":"anna",
            "empid":"12",
            "dept":"cs",
            "phoneno":"8098763245"
        },
        {
            "name":"annu",
            "empid":"13",
            "dept":"civil",
            "phoneno":"8098763289"
        },
        {
            "name":"anriya",
            "empid":"13",
            "dept":"Ec",
            "phoneno":"8098763212"
        },
        {
            "name":"anju",
            "empid":"14",
            "dept":"mechanic",
            "phoneno":"8098763125"
        },

        ]
    )
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
  {data.map(
    (value,index)=>{return  <tr>
        <th scope="row">{index+1}</th>
        <td>{value.name}</td>
        <td>{value.empid}</td>
        <td>{value.dept}</td>
        <td>{value.phoneno}</td>
        
      </tr>}
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