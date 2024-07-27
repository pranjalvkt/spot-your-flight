import { useState } from "react";
import "./styles/card.css";
function Card({data}) {
  const [actual_arrival, setActualA] = useState(data.actual_arrival)
  const [actual_departure, setActualD] = useState(data.actual_departure)
  const [schedule_arrival, setscheduleA] = useState(data.scheduled_arrival)
  const [schedule_departure, setscheduleD] = useState(data.scheduled_departure)
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src="./airplane.jpg" height="420" width="327" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <div className="basic-details">
            <div>
              <h1>{data.airline}</h1>
              <h2>{data.flight_id}</h2>
            </div>
            <div className="status">
              <p className={data.status == 'On Time' ? 'green' : data.status == 'Delayed' ? 'yellow ': 'red'}>{data.status}</p>
            </div>
          </div>
          <div className="actual">

            <h3 className="time arrival">{actual_arrival == null ? new Date(schedule_arrival).toLocaleTimeString() : new Date(actual_arrival).toLocaleTimeString()}</h3>
            {/* <p>{new Date(data.scheduled_arrival).toLocaleDateString('en-GB')}</p> */}
            <h3 className="time departure">{actual_departure == null ? new Date(schedule_departure).toLocaleTimeString() : new Date(actual_departure).toLocaleTimeString()}</h3>
            {/* <p>{new Date(data.scheduled_departure).toLocaleDateString('en-GB')}</p> */}
          </div>
          <div className="schedule">

            <h3 className="time arrival">{new Date(schedule_arrival).toLocaleTimeString()}</h3>
            {/* <p>{new Date(data.scheduled_arrival).toLocaleDateString('en-GB')}</p> */}
            <h3 className="time departure">{new Date(schedule_departure).toLocaleTimeString()}</h3>
            {/* <p>{new Date(data.scheduled_departure).toLocaleDateString('en-GB')}</p> */}
          </div>
          
        </div>
        <div className="product-price-btn">
        <p>Gate:<span> A12</span></p>
          {/* <button type="button">Know more</button> */}
        </div>
      </div>
    </div>
  );
}
export default Card;
