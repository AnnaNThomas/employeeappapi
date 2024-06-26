import React, { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const Search = () => {
    const [data, setData] = useState({
        "employeeid": "",
    });
    const [result, setResult] = useState([]);
    
   
    const deleteEmployee = (id) => {
        let input={ _id: id }
        axios.post("http://localhost:8083/delete",input)
            .then(response => {
                if (response.data.status === "success") {
                    alert("Successfully deleted");
                    // Update result after deletion
                } else {
                    alert("Error in deletion");
                }
            })
            .catch(error => {
                console.error("Delete error:", error);
                alert("Error occurred during deletion");
            });
    };

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        axios.post("http://localhost:8083/search", data)
            .then(response => {
                setResult(response.data);
            })
            .catch(error => {
                console.error("Search error:", error);
                alert("Error occurred during search");
            });
    };

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
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Empid</th>
                            <th scope="col">Dept</th>
                            <th scope="col">PhoneNo</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((value) => (
                            <tr key={value._id}>
                                <td>{value.name}</td>
                                <td>{value.employeeid}</td>
                                <td>{value.dept}</td>
                                <td>{value.phoneno}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteEmployee(value._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Search;
