import { useDispatch, useSelector } from "react-redux";

export default function CounterReduxParent(props) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h3 className="box-title">{props.cno} : Global State (Redux) Count: {count}</h3>
      <div className="box-controls">
        <button className="box-btn" onClick={() => dispatch({ type: "INCREMENT" })}>
          Increase
        </button>
        <button className="box-btn" onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrease
        </button>
      </div>
    </div>
  );
}
