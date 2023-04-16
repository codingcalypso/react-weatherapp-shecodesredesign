import React from "react";

export default function WeatherIcon(props) {

  return (
    <img
      src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
}
