import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Form from './assets/components/form';
import Added from './assets/components/Added';
import './index.css';

function App() {
  const [inputVal, setInputVal] = useState("");
  const [add, setAdd] = useState([]);
  const apiKey = "4d8fb5b93d4af21d66a2948710284366";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  const handleSubmit = (e) => {
    e.preventDefault();


    const cityExists = add.some((item) => item.name.toLowerCase() === inputVal.toLowerCase());

    if (cityExists) {
      alert("The city is already added.");
      return;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("Please search for a valid city");
          return null;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setAdd([...add, data]);
          console.log(data);
        }
      })
      .catch((err) => alert("An error occurred, please try again"));
  };

  const handleChange = (value) => {
    setInputVal(value);
  };

  return (
    <div className="parent">
      <div className="heading">Weather App</div>
   <Form handleChange={handleChange} handleSubmit={handleSubmit} inputVal={inputVal}/>
<Added add={add}/>
    </div>
  );
}

export default App;
