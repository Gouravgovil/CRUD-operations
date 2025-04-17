import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Updateusers() {
    const { id } = useParams()
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3002/getUser/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.Name)
                setEmail(result.data.Email)
                setAge(result.data.Age)
            })
            .catch(err => console.log(err))
    }, [id]) // this line is important to prevent infinite loop


    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3002/Updateuser/${id}`, { Name, Email, Age })
            .then(result => {
                console.log(result)
                navigate('/')
            })

            .catch(error => console.log(error))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">

                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="number" placeholder="Enter Age" className="form-control" value={Age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Updateusers;