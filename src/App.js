import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Video from "./components/Video";

const API_KEY = "1a0cbc646c0ca198078970b0abea1bf6";

class App extends React.Component {
  state = {
    clickButton: false,
    videoURL: 'weather-default',
    temperature: undefined,
    city: undefined,
    country: undefined,
    weather: undefined,
    humidity: undefined,
    wind: undefined,
    timezone: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }


  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}
      &appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    function getTime(timezone, unix) {
      const date = new Date();
      let localTimeZone = date.getTimezoneOffset()*(-60);
      let timeDifference = localTimeZone - parseInt(timezone);
      const realUnix = parseInt(unix) - timeDifference;
      const realTimeStamp = new Date(realUnix * 1000);
      let localTime = "";
      if (realTimeStamp.getHours() < 10) {
        localTime += "0";
      }
      localTime += realTimeStamp.getHours() + ":" ;
      if (realTimeStamp.getMinutes() < 10) {
        localTime += "0";
      }
      localTime += realTimeStamp.getMinutes();
      return localTime;
    }

    if(city && country) {
      if(data.cod === "404") {
        this.setState({
          clickButton: !this.state.clickButton,
          videoURL: "weather-default",
          temperature: undefined,
          city: undefined,
          country: undefined,
          weather: undefined,
          humidity: undefined,
          wind: undefined,
          sunrise: undefined,
          sunset: undefined,
          timezone: undefined,
          error: "Cannot find the city. Please check the city and country."
        });
      } else {
        this.setState({
          clickButton: !this.state.clickButton,
          videoURL: data.weather[0].main,
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          timezone: data.timezone,
          sunrise: getTime(data.timezone,data.sys.sunrise),
          sunset: getTime(data.timezone,data.sys.sunset),
          error: ""
        });
      }
    } else {
      this.setState({
        clickButton: !this.state.clickButton,
        videoURL: "weather-default",
        temperature: undefined,
        city: undefined,
        country: undefined,
        weather: undefined,
        humidity: undefined,
        wind: undefined,
        timezone: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please enter the city and country."
      });
    }
  }

  render() {
    return(
      <div className="wrapper">
        <div className="container">
          <Title />
          <Form getWeather={this.getWeather}/>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            weather={this.state.weather}
            humidity={this.state.humidity}
            wind={this.state.wind}
            timezone={this.state.timezone}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            error={this.state.error}
          />
        </div>
        {/* when click Search button, change different bg-video */}
        {this.state.clickButton? null : <Video video={this.state.videoURL}/>} 
        {this.state.clickButton? <Video video={this.state.videoURL}/> : null}  
      </div>
    );
  }
}

export default App;
