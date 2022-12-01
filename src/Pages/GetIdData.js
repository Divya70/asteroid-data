import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DisplayAllData } from "./DisplayAllData";
const GetIdData = () => {
  const [displayIdData, setDisplayIdData] = useState({});
  const { id } = useParams();
  const getDataById = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=CSxKGsTgc73LWDCDQgKrC9j9lKZpgawKcmrLvbaX`
      );
      const getRes = await res.json();
      setDisplayIdData(getRes);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDataById();
  }, []);
  return (
    <div>
      <DisplayAllData {...displayIdData} />
    </div>
  );
};
export { GetIdData };
