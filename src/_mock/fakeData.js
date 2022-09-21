import { useState, useEffect } from 'react';
function FakeData(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  return data;
}
export default FakeData;
