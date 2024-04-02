import ResturantCard from "./ResturantCard";

import { useEffect, useState }  from "react" ;

import {restcard}  from "../Utils/Mockdata";



const Body =()=>{


const [restdatalist,setrestdatalist]=useState(restcard);

useEffect(()=>{

fetchdata();

},[]);



  const fetchdata= async()=>{

    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json=await data.json();

    console.log(json.data.cards);


  }
    return(
  
    <div className="body">

    <div className="filter">

<button className="btn_filter" onClick={()=>{

 const filter =restdatalist.filter((res)=>res.info.avgRating==4.2);
 setrestdatalist(filter);

    

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