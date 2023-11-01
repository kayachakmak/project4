import "./List.css"
/* eslint-disable react/prop-types */
export default function List({ activities, onDeleteActivity }) {
  return (
    <ul className="activities">
      {activities.map((activity) => (
        <li key={activity.id} className="activities__activity">
          {activity.name}
          <button
            className="activities__activity__deleteButton"
            onClick={() => onDeleteActivity(activity.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
