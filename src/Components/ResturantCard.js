import {CDN_URL} from "../Utils/Constant";


const ResturantCard=(props)=>{

    const { restData}=props;
  
  
    const {name, cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId,sla}=restData?.info;
  
    const stylebackground={

        backgroundColor:"#f0f0f0",
        };

        
  
    return(
  
      <div className="res-card" style={stylebackground}>
  
        <img className="res_logo"
         alt="res_logo" src={CDN_URL+cloudinaryImageId}>
  
        </img>
        <h1>{name} </h1>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} rating </h4>
        <h4>{costForTwo}  </h4>
        <h4>{deliveryTime} minutes</h4>
  
      </div>
  
  
    );
  }

  export default ResturantCard;