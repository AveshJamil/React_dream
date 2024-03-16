import ResturantCard from "./ResturantCard";

import {restcard}  from "../Utils/Mockdata";

let restdatalist=
[
    {
    "info": {
      "id": "16061",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food",
        
      ],
      "avgRating": 3.6,
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
      },
     
    }, 
  
  },
  {
    "info": {
      "id": "160614",
      "name": "Aslam",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food",
        
      ],
      "avgRating": 4.2,
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
      },
     
    }, 
  
  }
];




const Body =()=>{


    return(
  
    <div className="body">

    <div className="filter">

<button className="btn_filter" onClick={()=>{

 restdatalist=restdatalist.filter((res)=>res.info.avgRating>4);


 console.log(restdatalist);
    

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