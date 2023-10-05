import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          ALERT! BAD STUFF!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Button!</Button>
    </div>
  );
}

export default App;
