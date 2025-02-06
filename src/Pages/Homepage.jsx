import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Homepage = () => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);

    function getData(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(()=>{
        getData();
    },[]);

    function handleCart(){
        
    }

  return (
    <div className='container'> 
        <div className="row mt-4">
            <div className="col-md-12">
                <h5>Top Selling Products</h5>
            </div>
        </div>
        <div className="row">
            {loading && "Loading..."}
            {
                data.map((data, index)=>
                    <div key={data.id} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img src={data.image} alt="" className='product_image p-3'/>
                            <div className="card-body p-3">
                                <h6 className="card-title">{data.title}</h6>
                                <p className="card-text text-truncate">{data.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="h5 mb-0">${data.price}</span>
                                    <div>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-half text-warning"></i>
                                        <small className="text-muted">({data.rating.rate})</small>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light">
                                <button className="btn btn-primary btn-sm" onClick={handleCart(data.id)}>Add to Cart</button>
                                <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-heart"></i></button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Homepage