import React from 'react';

const Weather =(props)=>{
    
    return(
        <div>
        {/* the && operator is a condititon that in order for something to excute 
            all of the conditions must be true*/} 
    {props.city && props.country && <p>Location: {props.city}{props.country}</p>}
    {/* what this is doing is saying if this.props.city and country is true then
    then render the <p>*/} 
    {props.temperature&&<p>Temperature:{props.temperature}</p>}

    {props.humidity &&<p>Humidity:{props.humidity}</p>}

    {props.description &&<p>Condition:{props.description}</p>}

    {props.error && <p>Error:{this.error}</p>}
            

        </div>

    )
}
export default Weather;