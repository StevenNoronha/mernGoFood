import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function SignUp() {
  let [address, setAddress] = useState("");
  let navigate = useNavigate()
  const [credentials , setcredentials] = useState({
    name: "",
    geolocation: "",
    email: "",
    password: ""
  })

  const handleClick = async (e) => {
    e.preventDefault();
    let navLocation = () => {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
    }
    let latlong = await navLocation().then(res => {
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      return [latitude, longitude]
    })
    // console.log(latlong)
    let [lat, long] = latlong
    console.log(lat, long)
    const response = await fetch(global.url+"api/getlocation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ latlong: { lat, long } })

    });
    const { location } = await response.json()
    console.log(location);
    setAddress(location);
    setcredentials({ ...credentials, [e.target.name]: location })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const respone = await fetch(global.url+"api/createuser",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        location: credentials.geolocation,
        email: credentials.email,
        password: credentials.password
       })
    });
    // const json = await respone.json()
    // console.log(json)

    // if(!json.success){
    //   alert("Enter Valid Credentials")
    // }

    try {if (!respone.ok) {
      throw new Error(`HTTP error! Status: ${respone.status}`);
    }
    const data = await respone.json();
    console.log("Response data:", data);
    if(data.success){
      navigate("/login")
    }
    }
     catch (error) {
    console.error("Error:", error);
    alert("Failed to Sign-Up try again");
    }

  }

  const onChange = (event)=> {
    setcredentials({...credentials, [event.target.name]: event.target.value})
  }

  return (
    <>
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded ' onSubmit={handleSubmit}>
        <div className="m-4">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} placeholder="Enter name" />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" id="Password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
          </div>

          {/* <div className="form-group">
            <label htmlFor="text">Address</label>
            <input type="text" className="form-control" id="text" name='geolocation' value={credentials.geolocation} onChange={onChange} placeholder="Address" />
          </div> */}

            <div >
              <label htmlFor="address" className="form-label">Address</label>
              <fieldset>
                <input type="text" className="form-control" name='address' placeholder='Click below for fetching address' value={address} onChange={(e)=>setAddress(e.target.value)} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            <div className="m-3">
              <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
            </div>

          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
