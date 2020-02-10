import React from 'react';

const Weather =(props)=>{
    
    return(
        <div className="weather__info">
        {/* the && operator is a condititon that in order for something to excute 
            all of the conditions must be true*/} 
    {props.city && props.country && <p className="weather__key"> Location: {props.city}{props.country}</p>}
    {/* what this is doing is saying if this.props.city and country is true then
    then render the <p>*/} 
    {props.temperature&& <p className="weather__key">Temperature:{props.temperature}</p>}

    {props.humidity && <p className="weather__key">Humidity:{props.humidity}</p>}

    {props.description &&<p className="weather__key">Condition:{props.description}</p>}

    {props.error && <p className="weather__key">Error:{this.error}</p>}
            

        </div>

    )
}
export default Weather;