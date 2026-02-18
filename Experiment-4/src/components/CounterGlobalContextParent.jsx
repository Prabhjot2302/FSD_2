import { useContext } from "react";
import { CounterContext } from "./context/CounterGlobalContextAPI";

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="box">
      <h3 className="box-title">{props.cno} : Global State (ContextAPI) Count: {count}</h3>
      <div className="box-controls">
        <button className="box-btn" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="box-btn" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}
