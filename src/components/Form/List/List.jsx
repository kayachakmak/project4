import { Fragment } from "react";

/* eslint-disable react/prop-types */
export default function List({ activities,isGoodweather }) {
  return (
    <Fragment>
    <p>{isGoodweather? 'Weather is good': 'Weather is shitty'} </p>
    <ul>
      {activities.map((activity) => (
        <li key={activity.id} className="activity">
          {activity.name}
        </li>
      ))}
    </ul>
    </Fragment>
  );
}
