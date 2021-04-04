import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import axios from 'axios'


function HomePage(){
    const [pageNumber, setPageNumber] = useState(0)
    const [numPages, setNumPages] = useState(0)
    const [products, setProducts] = useState([])
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/")
        .then(data => {
            return data.data
        })
        .then(res =>{
            setProducts(res.products_list)
            setPageNumber(res.page_number)
            setNumPages(res.num_pages)
        })
        .then( a=>{
            console.log(products)
        }
        )
    },[]);


    return (
      <div>
        <h1>Show all products here</h1>
        <br/>
        {products.map((product) => (
          <Link to={"products/" + product.product_id}>
            {product.product_name}
            <br />
          </Link>
        ))}
        <p>page {pageNumber} of {numPages}</p>
      </div>
    );
}

export default HomePage;