import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let fid="";

  const [qty,setQty] = useState(1);
  const [size,setSize] = useState(""); 

  const handleAddToCart = async ()=> {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItems._id && item.size === size) {
        food = item;
        fid=item.id;
        break;
      }
    }
    if (food != []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: fid, price: finalPrice, qty: qty, size: size})
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, qty: qty, size: size,img: props.foodItems.img })
        // Size different so simply ADD one more to the list
        return
      }
      return
    }
    await dispatch({type: "ADD", id: props.foodItems._id,name : props.foodItems.name, price: finalPrice, qty: qty, size: size, img:props.foodItems.img})
  }


  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

  return (
    <div>
      <div className="card m-4" style={{ width: "19rem", height: "500px" }}>
        <img src={props.foodItems.img} width="100%" height="50%" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodItems.name}</h5>
          <p className="card-text ncard">{props.foodItems.description}</p>
          <div className="container w-100">
            <select className="rounded m-2 h-100 bg-success" onChange={(e)=> {setQty(e.target.value)}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {""}{i + 1}{""}
                  </option>
                );
              })}
            </select>
            <select className="rounded m-2 h-100 bg-success" ref={priceRef} onChange={(e)=> {setSize(e.target.value)}}>
              {priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className="d-inline fs-5">₹{finalPrice}/-</div>
            <hr/>
            <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
