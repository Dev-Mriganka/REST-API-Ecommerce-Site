import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {SmNavbar} from "./Components/SmallNav/Navbar";
import {AllRoutes} from "./Components/Pages/AllRoutes";
import SmFooter from "./Components/SmallNav/SmFooter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="yrop"
      >
        <SmNavbar />
        <AllRoutes />
        <SmFooter />
      </div>
    </>
  );
}

export default App;
