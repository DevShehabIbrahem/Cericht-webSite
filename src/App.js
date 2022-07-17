import React, { useState, useEffect } from "react";

import "./css/App.css";
import "../src/loding.scss";
import Home from "./Components/Home/Home";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const Time = setTimeout(() => {
      setLoading(true);
    }, 4000);
    return () => clearTimeout(Time);
  }, [loading]);

  return (
    <div className="App">
      <>
        {!loading ? (
          <div class="Loader"></div>
        ) : (
          <>
            <Home />
          </>
        )}
      </>
    </div>
  );
}

export default App;
