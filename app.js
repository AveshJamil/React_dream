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

const {rest_name}=props;

  console.log(rest_name);


  return(

    <div className="res-card" style={stylebackground}>

      <img className="res_logo"
       alt="res_logo" src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.webp?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U=">

      </img>
      <h1>{props.rest_name} </h1>
      <h4>{props.cousine}</h4>
      <h4>4.5 stars</h4>
      <h4>40 minutes </h4>

    </div>


  );
}

const data={
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "235624",
        "name": "KFC",
        "city": "Nashik",
        "slugs": {
          "restaurant": "kfc-kfc-nashik-college-road",
          "city": "nashik"
        },
        "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Collage Road \n",
        "areaName": "College Road",
        "costForTwo": "40000",
        "costForTwoMessage": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "235624",
          "fees": [
            {
              "name": "distance",
              "fee": 2500
            },
            {
              "name": "time"
            },
            {
              "name": "special"
            }
          ],
          "totalFee": 2500,
          "icon": "v1648635511/Delivery_fee_new_cjxumu",
          "message": "Order above 149 for discounted delivery fee"
        },
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+ ratings",
        "sla": {
          "restaurantId": "235624",
          "deliveryTime": 21,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 25,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "stressFactor": 1,
          "rainMode": "RAIN_MODE_NONE",
          "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
          "zoneId": 550,
          "slaString": "20-25 MINS",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-06 03:00:00",
          "visibility": true,
          "opened": true,
          "restaurantClosedMeta": {
            
          }
        },
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            },
            {
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "Flat ₹50 discount | Above ₹500",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "visible": true
        },
        "badges": {
          
        },
        "slugString": "kfc-kfc-nashik-college-road",
        "isOpen": true,
        "labels": [
          {
            "title": "Timings",
            "message": "null"
          },
          {
            "title": "Address",
            "message": "Shop No. B-1, Metro 99, Commercial Complex College Road & Gangapur Link Road, Nashik\t\t\t\t\t"
          },
          {
            "title": "Cuisines",
            "message": "Burgers,Biryani"
          }
        ],
        "logo": "marketing-dashboard/carousel/jieoyuprsn64ubnthg0f",
        "totalRatings": 5000,
        "aggregatedDiscountInfoV2": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            },
            {
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "Flat ₹50 discount | Above ₹500",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "couponDetailsCta": "View coupon details"
        },
        "type": "F",
        "headerBanner": {
          "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/235624"
        },
        "expectationNotifiers": [
          {
            "text": "Order above 149 for discounted delivery fee",
            "icon": {
              "imageId": "v1648635511/Delivery_fee_new_cjxumu"
            },
            "popup": {
              "cta": {
                
              }
            },
            "type": "DISTANCE_FEE_NON_FOOD_LM",
            "halfCardPopup": {
              "halfCardPopupHeader": {
                
              }
            }
          }
        ],
        "generalPurposeInfoListV2": [
          {
            "cta": {
              "info": {
                "recordings": {
                  
                }
              },
              "linkCta": {
                
              }
            }
          }
        ],
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            
          },
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "nonSwiggyOneFreedelMessage": "3 FREE Deliveries available with Offer pack"
        },
        "ratingSlab": "RATING_SLAB_5",
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "hasBestsellerItems": true,
        "cartOrderabilityNudgeBanner": {
          "parameters": {
            
          },
          "presentation": {
            
          }
        },
        "latLong": "20.00710549,73.76356727",
        "backgroundImageOverlayInfo": {
          
        }
      },
      "analytics": {
        
      }
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
      "sectionId": "POP_UP_CROUTON_MENU"
    }
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













