import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import axios from 'axios'

import ApiClient from '../../api-client'


function HomePage(){
    const [pageNumber, setPageNumber] = useState(0)
    const [numPages, setNumPages] = useState(0)
    const [products, setProducts] = useState([])
    
    useEffect(()=> {
        ApiClient.getAllProducts()
        .then(res =>{
            setProducts(res.products_list)
            setPageNumber(res.page_number)
            setNumPages(res.num_pages)
        })
        .then( a=>{
            console.log(products)
        })
    },[]);


    return (
      <div>
        <h1>Show all products here</h1>
        <br/>
        {products.map((product) => (
          <Link key={product.product_id} to={"products/" + product.product_id}>
            {product.product_name}
            <br />
          </Link>
        ))}
        <p>page {pageNumber} of {numPages}</p>
      </div>
    );
}

export default HomePage;