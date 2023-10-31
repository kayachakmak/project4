/* eslint-disable react/prop-types */
export default function List({ activities }) {
  console.log(activities);
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id} className="activity">
          {activity.name}
        </li>
      ))}
    </ul>
  );
}
