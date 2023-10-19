import Home from "./pages/home/Home";
import { BsFillPersonFill } from "react-icons/bs";

import "primeicons/primeicons.css";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div
    >
      <Home />

      <Profile />
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
