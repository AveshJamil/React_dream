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

const ResturantCard=(props)=>{


console.log(props.rest_name.avgRating);

  return(

    <div className="res-card" style={stylebackground}>

      <img className="res_logo"
       alt="res_logo" src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.webp?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U=">

      </img>
      <h1>{props.rest_name.info.name} </h1>
      <h4>{props.cousine}</h4>
      <h4>4.5 stars</h4>
      <h4>40 minutes </h4>

    </div>


  );
}

const data={
  "info": {
    "id": "89140",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Wakad Road",
    "areaName": "Hinjawadi",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 4.1,
    "parentId": "547",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 5,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "5.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-03-08 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹179"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-wakad-road-hinjawadi-pune-89140",
    "type": "WEBLINK"
  }
}

const Body =()=>{

  return(

  <div className="body">
  <div className="search">Search</div>
  <div className="res-container">
  <ResturantCard  rest_name={data}  />
  
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













