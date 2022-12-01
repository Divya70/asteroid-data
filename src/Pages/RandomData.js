import { useState, useEffect } from "react";
import { DisplayAllData } from "./DisplayAllData";
const RandomData = () => {
  const [getRandomData, setGetRandomData] = useState([]);
  const fetchRandomData = async () => {
    try {
      const randomRes = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M`
      );
      const getRandomResponse = await randomRes.json();
      setGetRandomData(getRandomResponse);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRandomData();
  }, []);
  return (
    <div>
      {getRandomData.near_earth_objects?.map((items) => {
        return (
          <div key={items.id}>
            <DisplayAllData {...items} />
          </div>
        );
      })}
    </div>
  );
};
export { RandomData };
