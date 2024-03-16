import {LOGO_URL} from "../Utils/Constant";

const Header=()=>{


    return (


        <div className="header">

   <div className="Logo_containe">

   <img className="Logo" src={LOGO_URL}/>

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

export default Header; 