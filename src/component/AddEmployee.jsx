import React, { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const AddEmployee = () => {
    const [data, setData] = useState({
        name: '',
        empid: '',
        dept: '',
        phoneno: ''
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        console.log(data);
        axios.post('http://localhost:8083/add', data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === 'success') {
                    alert('Successfully Added');
                } else {
                    alert('Failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form');
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
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="empid" className="form-label">Empid</label>
                                <input type="text" className="form-control" name="empid" value={data.empid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="dept" className="form-label">Dept</label>
                                <input type="text" className="form-control" name="dept" value={data.dept} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="phoneno" className="form-label">PhoneNo</label>
                                <input type="text" className="form-control" name="phoneno" value={data.phoneno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
