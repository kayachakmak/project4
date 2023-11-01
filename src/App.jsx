import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/Form/List/List";
import useLocalStorage from "use-local-storage";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";

function App() {
  const [activities, setActivites] = useLocalStorage("activities", []);
  const [weather, setWeather] = useState({});

  const URL = "https://example-apis.vercel.app/api/weather";

  useEffect(() => {
    async function Fetch() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }
    Fetch();
  }, []);

  
  function handleAddActivity(newActivity) {
    setActivites([{ ...newActivity, id: uid() }, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivites( 
      activities.filter( (activity) => activity.id!==id)
    )
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
