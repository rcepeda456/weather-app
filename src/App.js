import React from "react";
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';


const API_KEY ="8209c8ace16517a09dc5bb36951232cf"
class App extends React.Component {

  state={
    temperature: undefined,
    city: undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error: undefined

  }


 getWeather = async(e)=>{
  e.preventDefault();
  //create a var called city & country and it got the value of what we inputed
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  // create a var called api call and passes in the url
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
   const data = await api_call.json();
   //converted the api call to  json ^
//console.log(data);
// to access something we need to start off by saying data. then follow the path
// of the api to info we want when we inspect the page
// if the city and country is true then display the data
if(city === true && country === true){
this.setState({
  temperature: data.main.temp,
  city: data.name,
  country: data.sys.country,
  humidity: data.main.humidity,
  description: data.weather[0].description,
  error: ""
  

})
// else return undefined and a pleae enter a value input

 } else{
  this.setState=({
    temperature: undefined,
    city: undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error: "please enter a value."

  });

}
 }

  render(){
    return(
<div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;

