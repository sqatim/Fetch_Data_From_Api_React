import Nav from "./components/Nav/Nav";
import React, { useState } from "react";
import Index from "./pages/Index";
import './App.css'

function App() {
  const [type, setType] = useState("Users");
  return (
    <div className="App">
      <Nav setType={setType} />
      <Index type={type} />
    </div>
  );
}

export default App;
