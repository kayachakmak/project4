import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";

function App() {
  const [activities, setActivites] = useState([]);

  function handleAddActivity(newActivity) {
    setActivites([{ ...newActivity, id: uid() }, { ...activities }]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
