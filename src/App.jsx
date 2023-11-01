import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/Form/List/List";
import useLocalStorage from "use-local-storage";
import { useState } from "react";

function App() {
  const [activities, setActivites] = useLocalStorage("activities", []);
  const [isGoodweather,setIsGoodweather] = useState(true);
  
  function handleAddActivity(newActivity) {
    setActivites([{ ...newActivity, id: uid() }, ...activities]);
  }

  
   const filteredActivities= activities.filter((activity) => {
    return activity.isForGoodweather === isGoodweather})

  return (
    <>
      <List activities={filteredActivities} isGoodweather={isGoodweather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
