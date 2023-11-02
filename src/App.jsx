import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/Form/List/List";
import useLocalStorage from "use-local-storage";
import { useState } from "react";
import Header from "./components/Header/Header";
import useFetchWeatherData from "./hooks/useFetchWeatherData";
import { defaultActivities } from "./assets/DefaultActivities";
import AllActivities from "./components/AllActivitiesButton/AllActivities";

function App() {
  const [activities, setActivites] = useLocalStorage(
    "activities",
    defaultActivities
  );
  const [weather, setWeather] = useState({});

  const body = document.querySelector("body");
  const statement = document.querySelector(".weather__statement");

  useFetchWeatherData({ setData });
  function setData(data) {
    setWeather(data);
  }

  if (weather.isGoodWeather === true) {
    body.classList.add("sunny");
    body.classList.remove("rainy");
    statement.classList.add("sunny");
  } else {
    body.classList.add("rainy");
    body.classList.remove("sunny");
  }

  function handleAddActivity(newActivity) {
    setActivites([{ ...newActivity, id: uid() }, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivites(activities.filter((activity) => activity.id !== id));
  }

  const filteredActivities = activities.filter((activity) => {
    return activity.isForGoodweather === weather.isGoodWeather;
  });

  return (
    <>
      <Header
        condition={weather.condition}
        temperature={weather.temperature}
        isGoodWeather={weather.isGoodWeather}
      />
      <List
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
      <AllActivities activities={activities} />
    </>
  );
}

export default App;
