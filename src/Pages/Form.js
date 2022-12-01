import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const onChnageHamdler = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const asteroidDataHandler = () => {
    navigate(`/getiddata/:${data}`);
  };
  const randomAsteroidData = () => {
    navigate(`/random`);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Asteroid Id"
          onChange={onChnageHamdler}
          value={data}
        />
        <button type="button" onClick={() => asteroidDataHandler(data.id)}>
          Get Data
        </button>
        <button type="button" onClick={randomAsteroidData}>
          Get Random Data
        </button>
      </form>
    </div>
  );
};
export { Form };
