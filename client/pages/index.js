import { UserContext } from "../context";
import { useContext } from "react";

const home = () => {
  const [state, setState] = useContext(UserContext);
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h1>Home Page</h1>

          <img src="/images/default.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default home;
