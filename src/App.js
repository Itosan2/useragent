import React, { useEffect, useState } from "react";

import "./App.css";

const DeviceDetector = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    setIsIOS(/iPhone|iPad|iPod/i.test(userAgent));
    setIsAndroid(/Android/i.test(userAgent));
  }, []);

  return (
    <div>
      {isIOS && <p>Using iOS</p>}
      {isAndroid && <p>Using Android</p>}
      <p>The above is detected</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Detect Mobile device</h1>
      <DeviceDetector />
    </div>
  );
}

export default App;
