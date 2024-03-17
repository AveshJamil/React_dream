import ResturantCard from "./ResturantCard";

import { useState }  from "react" ;

import {restcard}  from "../Utils/Mockdata";



const Body =()=>{

 //const [restdatalist,setrestdatalist]=useState(restcard);
 //setrestdatalist([]);

 const arr=useState(restcard);

 //console.log(arr);

const restdatalist=arr[0];

console.log(restdatalist);
const setrestdatalist=arr[1];

//console.log(restdatalist);


//   let restdatalist=
// [
//     {
//     "info": {
//       "id": "16061",
//       "name": "KFC",
//       "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food",
        
//       ],
//       "avgRating": 3.6,
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 33,
//       },
     
//     }, 
  
//   },
//   {
//     "info": {
//       "id": "16063",
//       "name": "MCD",
//       "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food",
        
//       ],
//       "avgRating": 4.6,
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 33,
//       },
     
//     }, 
  
//   },
//   {
//     "info": {
//       "id": "160614",
//       "name": "Aslam",
//       "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food",
        
//       ],
//       "avgRating": 4.2,
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 33,
//       },
     
//     }, 
  
//   }
// ];


    return(
  
    <div className="body">

    <div className="filter">

<button className="btn_filter" onClick={()=>{

 const filter =restdatalist.filter((res)=>res.info.avgRating==4.2);
 setrestdatalist(filter);

 //console.log(setrestdatalist);



// console.log(filter);
    

}}>This is top Rated Resturant</button>


    </div>
    <div className="search">Search</div>
    <div className="res-container">
   {restdatalist.map((restcard)=>(<ResturantCard key={restcard.info.id} restData={restcard}/>)
  
   )}
  
  
    </div>
    </div>
    ) 
  }

  export default Body;