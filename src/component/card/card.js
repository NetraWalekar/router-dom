import React from "react";
function Card(props){
    return(
        <div className="card">
            <img src={props.img} style={{height:350}} alt="cake"/>
        </div>
    )
}

export default Card;