import ResturantCard from "./ResturantCard";

import { useEffect, useState }  from "react" ;

import {restcard}  from "../Utils/Mockdata";



const Body =()=>{


const [restdatalist,setrestdatalist]=useState(restcard);

useEffect(()=>{

    console.log("useeffect called");


},[]);

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