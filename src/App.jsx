import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/Form/List/List";
import useLocalStorage from "use-local-storage";
import { useState } from "react";
import Header from "./components/Header/Header";
import useFetchWeatherData from "./hooks/useFetchWeatherData";

function App() {
  const [activities, setActivites] = useLocalStorage("activities", []);
  const [weather, setWeather] = useState({});

  useFetchWeatherData({ setData });
  function setData(data) {
    setWeather(data);
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
      <Header condition={weather.condition} temperature={weather.temperature} />
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
