import { useState } from "react";

export default function LocalStateCounter({ cno }) {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h3 className="box-title">{cno} : Local State Count: {count}</h3>
      <div className="box-controls">
        <button className="box-btn" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="box-btn" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}
