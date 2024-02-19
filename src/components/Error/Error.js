import React from "react";
import { Link } from "react-router-dom";
function Error(){
    return(
        <div className="container">
            <h1 className="display-">Opps! There is no Such Page</h1>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default Error;