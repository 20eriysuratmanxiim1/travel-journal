import React from "react";

export default function Separate(props) {
  return (
    <section className="separate">
      <img src={`${props.imageUrl}`} alt="separate" className="separate--img" />

      <div className="separate--data">
        <div className="separate--top">
          <img
            src="../images/location--icon.png"
            alt="location--icon"
            className="separate--icon"
          />
          <h4 className="separate--location">{props.location}</h4>
          <a className="separate--link" href={`${props.googleMapsUrl}`}>
            View on Google Maps
          </a>
        </div>

        <h1 className="separate--title">{props.title}</h1>
        <h5 className="separate--date">
          {props.stratDate} - {props.endDate}
        </h5>
        <p className="separate--description">{props.description}</p>
      </div>
    </section>
  );
}
