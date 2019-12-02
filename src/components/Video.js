import React from "react";

class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <video autoPlay loop muted preload='auto'>
          {
            this.props.video === "Rain" || "Clear" || "Clouds" || "Haze" || "Mist" || "Snow" 
            ? <source type="video/mp4" src={require(`../video/${this.props.video}.mp4`)} />
            : <source type="video/mp4" src={require(`../video/weather-default.mp4`)} />
          }
          Your browser does not support HTML5 video.
        </video>
      </div>
    )
  }
}

export default Video;
