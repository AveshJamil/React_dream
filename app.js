import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{

    return (


        <div className="header">

   <div className="logo_containe">

   <img className="Logo"

     src="https://www.canva.com/p/templates/EAFowsrK6x8-red-and-yellow-catering-flat-illustrative-food-place-logo/"
   />

   </div>
   <div className="nav_items">

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

 const Applayout =()=>{

  return (

    <div className="App">

    <Header/>
    </div>
  );


 }



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(Applayout);













