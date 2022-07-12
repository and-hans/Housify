import { useEffect, useState } from 'react';
import './App.css';

type Time = {
  Name: string;
  Age: number;
  Date: string;
};

function App() {
  const [time, setTime] = useState({
    name: "",
    age: 0,
    date: ""
  });

  useEffect(() => {
    fetch("/time").then((res) =>
        res.json().then((time: Time) => {
            // Setting a data from api
            setTime({
                name: time.Name,
                age: time.Age,
                date: time.Date,
            });
        })
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Housify</h1>
        <p>{time.name}</p>
        <p>{time.age}</p>
        <p>{time.date}</p>
      </header>
    </div>
  );

}

export default App;
