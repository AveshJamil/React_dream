import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{

    return (


        <div className="header">

   <div className="Logo_containe">

   <img className="Logo"

     src="https://static.vecteezy.com/system/resources/thumbnails/002/382/557/small/fast-food-logo-concept-free-vector.jpg"
   />

   </div>
   <div className="nav-items">

   <ul>
   <li>Home</li>
   <li>About Us </li>
   <li> Contact Us</li>
   <li>Cart</li>
   </ul>

   </div>

   </div>



      
    );
};
const stylebackground={

  backgroundColor:"#f0f0f0",
  };

const ResturantCard=()=>{

  return(

    <div className="res-card" style={stylebackground}>

      <h1>Aslam Chic </h1>
      <img src="https://www.delhitourism.gov.in/dttdc/food_tour/images/aslam_butter_chicken_corner.jpg">
        
      </img>
    </div>


  );
}



const Body =()=>{

  return(



  <div className="body">
  <div className="search">Search</div>
  <div className="res-container">
  <ResturantCard />

  </div>





  </div>
  ) 
}

 const Applayout =()=>{

  return (

    <div className="App">

    <Header/>
    <Body />
    </div>
  );


 }



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);













