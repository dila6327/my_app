import { useState } from "react";
import Added from "./assets/components/Added";
import Form from "./assets/components/form";
import "./index.css";

import { apiKey } from "./const";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [valueId, setValueId] = useState(null);
  const [add, setAdd] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`;

  const handleSubmit = (e) => {
    e.preventDefault();
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          const isAdded = add.find((item) => item.weather[0].id === data.weather[0].id);
     
          if (isAdded) {
            return;
          }
          setAdd([...add, data]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  };

  const handleChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="parent">
      <div className="heading">Weather App</div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputVal={searchValue}
      />
      <Added add={add} />
    </div>
  );
}

export default App;
