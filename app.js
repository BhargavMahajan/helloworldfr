import React from 'react';
import {useState,useEffect} from 'react';

function App() {

  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        }
      )
  }, [])

  return (
    <div>
      {data.greeting}
    </div>
  );
  
}

export default App;
