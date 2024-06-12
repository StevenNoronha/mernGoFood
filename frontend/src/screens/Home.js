import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch(global.url + "api/foodData", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    response = await response.json();
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption " style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> {setSearch(e.target.value)}} />
                {/* <button button className="btn btn-success text-white bg-teal" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg" className="d-block w-100" style={{"position": "contain"}} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://c4.wallpaperflare.com/wallpaper/1005/1000/931/delicious-pizza-pepperoni-pizza-wallpaper-preview.jpg" className="d-block w-100" style={{"position": "contain"}}  alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://t4.ftcdn.net/jpg/05/80/83/11/360_F_580831163_gHJgKLXz4TxnZRSnVpdi779YnI6Vk0FL.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className='container'>
        {
          foodCat != [] ? foodCat.map((data) => {
            return (
              <div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem != [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName)  && (item.name.toLowerCase().includes(search.toLowerCase()))).map((filterItems) => {
                  return (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card foodItems={filterItems}
                        options={filterItems.options[0]}
                      />
                    </div>
                  )
                }) :
                  <div>No such Data Found</div>
                }
              </div>
            )
          })
            : <div>""""""""""""</div>
        }
      </div>
      <Footer />
    </div>

  )
}

