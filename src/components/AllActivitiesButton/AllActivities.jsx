import { useState } from "react";
import "./AllActivities.css";
// https://www.geeksforgeeks.org/how-to-create-a-toggle-switch-in-react-as-a-reusable-component/
export default function AllActivities({ activities }) {
  const [isAll, setIsAll] = useState(false);

  function handleShowAll() {
    setIsAll(!isAll);
  }
  console.log(isAll);
  return (
    <div className="container">
      Show All Activities
      <div className="toggle-switch">
        <input
          onChange={handleShowAll}
          type="checkbox"
          className="checkbox"
          name="all_activities"
          id="all_activities"
        />
        <label className="label" htmlFor="all_activities">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      <ul className="activities">
        {isAll &&
          activities.map((activity) => (
            <li key={activity.id} className="activities__activity">
              {activity.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
