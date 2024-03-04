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

      <img className="res_logo"
       alt="res_logo" src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.webp?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U=">

      </img>
      <h1>Aslam Chic </h1>
      <h4>Butter Chicken,kebab</h4>
      <h4>4.5 stars</h4>
      <h4>40 minutes </h4>

    </div>


  );
}



const Body =()=>{

  return(

  <div className="body">
  <div className="search">Search</div>
  <div className="res-container">
  <ResturantCard />
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













