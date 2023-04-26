import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
