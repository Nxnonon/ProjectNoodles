import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HomeIcon } from "lucide-react";
import Appdistance from "./root/AppRoot";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Appdistance/>
    </>
  );
}

export default App;
