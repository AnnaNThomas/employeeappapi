import React,{useState} from 'react'
import Nav from './Nav'

const Delete = () => {
    const [data,setData] = useState(
        {

            "empid": "",

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Empid</label>
                    <input type="text" className="form-control" empid={data.empid} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>Delete</button>
                    </div>
                </div>


                </div>
            </div>
        </div>

    </div>
  )
}

export default Delete