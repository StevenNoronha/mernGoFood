import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const respone = await fetch(global.url+"api/loginuser", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await respone.json()
    console.log(json)

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
    
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded ' onSubmit={handleSubmit}>
        <div className="m-4">
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" id="Password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
          </div>

          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link to='/createuser' className='m-3 btn btn-danger'>I'm a New User</Link>
          <Link to='/' className='m-3 btn btn-success'>Home</Link>
          
        </div>
        </form>
      </div>
    </div>
    </>
  )
}
