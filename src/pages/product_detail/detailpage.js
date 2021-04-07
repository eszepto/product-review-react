import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import axios from 'axios';


import ApiClient from '../../api-client'
import ReviewComponent from '../../components/review/review-component'

function DetailPage(props){
    const [productName, setProductName]= useState("")
    const [reviews, setReview] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [numPages, setNumPages] = useState(0);
    
    useEffect(() => {
        ApiClient.getProductById(props.id)
        .then(res => {
            setProductName(res.product_name);
        })
        
        ApiClient.getReviewsByProductId(props.id)
        .then((res) => {
          setReview(res.reviews_list);
          setPageNumber(res.page_number);
          setNumPages(res.num_pages);
          console.log(res.reviews_list)
        });

        
    }, []);

    return (
    <div>
  
        <p>page {pageNumber} of {numPages}</p>
        {reviews.map((review)=>(
            <ReviewComponent key={review.review_id} review={review}></ReviewComponent>
        ))}
        
    </div>
    )
}

export default DetailPage