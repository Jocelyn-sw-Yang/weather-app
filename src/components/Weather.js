import React from "react";


class Weather extends React.Component {
  render() {
    return (
      <div className="weather-container">
        {this.props.temperature && 
        <div className="weather-item">
          <p>Temperature</p>
          <div className="temperature">
            {this.props.temperature}℃
          </div>
        </div>}
        {this.props.weather && 
        <div className="weather-item">
          <p>{this.props.weather}</p>
          <div className="weather-icon">
            <div className={`iconfont ${this.props.weather}`}></div>
          </div>
        </div>
        }
        {
          this.props.weather &&
          <div className="seperation"></div>
        }
        {this.props.humidity && 
        <div className="weather-item">
          <p>Humidity</p>
          <div className="weather-detail">
            <div className="iconfont">&#xe656;</div>
            <div className="weather-value">{this.props.humidity}%</div>
          </div>
        </div>
        }
        {this.props.wind && 
        <div className="weather-item">
          <p>Wind</p>
          <div className="weather-detail">
            <div className="iconfont">&#xe934;</div>
            <div className="weather-value">{this.props.wind}m/s</div>
          </div>
        </div>
        }
        {
          this.props.weather &&
          <div className="seperation"></div>
        }
        {this.props.sunrise && 
        <div className="weather-item">
          <p>Sunrise</p>
          <div className="weather-detail">
            <div className="iconfont">&#xe661;</div>
            <div className="weather-value">{this.props.sunrise}</div>
          </div>
        </div>
        }
        {this.props.sunset && 
        <div className="weather-item">
          <p>Sunset</p>
          <div className="weather-detail">
            <div className="iconfont">&#xe662;</div>
            <div className="weather-value">{this.props.sunset}</div>
          </div>
        </div>
        }
        
        {this.props.error && <p className="weather-error">{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;

// Clouds,Haze,Clear(Sunny),Rain, Snow, Mist
