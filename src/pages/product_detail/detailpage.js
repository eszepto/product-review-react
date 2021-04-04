import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import axios from 'axios';
import ReviewComponent from '../../components/review/review-component'
function DetailPage(props){
    const [productName, setProductName]= useState("")
    const [reviews, setReview] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [numPages, setNumPages] = useState(0);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+ props.id)
        .then(data => data.data)
        .then(res => {
            setProductName(res.product_name);
        })
        
        axios.get("http://localhost:8000/api/products/" + props.id + "/reviews")
        .then((data) => data.data)
        .then((res) => {
          setReview(res.reviews_list);
          setPageNumber(res.page_number);
          setNumPages(res.num_pages);
          console.log(res.reviews_list)
        });

        
    }, []);

    return (
    <div>
        
        <h2>Detail of </h2><h1>{productName}</h1>
        <p>page {pageNumber} of {numPages}</p>
        {reviews.map((review)=>(
            <ReviewComponent review={review}></ReviewComponent>
        ))}
        
    </div>
    )
}

export default DetailPage