import React, { useEffect, useState } from 'react';
import data from "./fake.json/fake.json"

function App() {
  const [fakeData, setFakeData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const result = data.filter(res => {
      return Object.values(res).some(name => String(name).toLowerCase().includes(search.toLowerCase()));
    })
    setFakeData(result)
  }, [search])


  console.log(fakeData);
  return (
    <div className='yebox'>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {fakeData.map((res, index) => {
          return (
          <li key={index}>
            {res.first_name} {res.last_name}
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
