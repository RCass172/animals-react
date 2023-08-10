import { useState } from "react";

function App() {
  const handleClick = () => {
    setCount(count + 1);
  };

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <p>Animals to show: {count}</p>
    </div>
  );
}

export default App;
