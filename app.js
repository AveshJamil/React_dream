import React from "react";
import ReactDOM from "react-dom/client";



const Elem=()=>(

    <h1 className="hee">hello function Elem</h1>

    



);

const Head1=()=>(
    <div id="component">
        <h1> Hello Last</h1>


     </div>
);
const title=(
    
    <h1 className="head">  
<Elem/>    
    This is my component Heading
    <Head1/>

    </h1>
    );


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(title);













