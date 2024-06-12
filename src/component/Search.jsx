import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState(
        {

            "employeeid": "",

        }
    )
    const [result,setResult]=useState([])
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8083/search",data).then(
            (response)=>{
                setResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.map)
            }
        ).finally()


    }
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Empid</label>
                                <input type="text" className="form-control" name='employeeid' value={data.employeeid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

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
                {result.map(
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
      
    )
}

export default Search