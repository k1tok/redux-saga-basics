import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AsyncDecAction, AsyncIncAction } from "./store/countReducer";
import { fetchUsersAction } from "./store/userReducer";

function App() {
  const nums = useSelector(
    (state: { countReducer: { num: number } }) => state.countReducer.num
  );
  const users = useSelector(
    (state: { userReducer: { users: [] } }) => state.userReducer.users
  );
  const dispatch = useDispatch();
  const asyncIncrement = () => {
    dispatch(AsyncIncAction());
  };
  const asyncDecrement = () => {
    dispatch(AsyncDecAction());
  };
  const fetchUsers = () => {
    dispatch(fetchUsersAction());
  };

  return (
    <div>
      <div>{nums}</div>
      <div style={{ display: "flex" }}>
        <div>
          <button onClick={() => asyncIncrement()}>Инкремент (+)</button>
          <button onClick={() => asyncDecrement()}>Декремент (-)</button>
          <button onClick={() => fetchUsers()}>Добавить пользователей</button>
        </div>
      </div>
      <div>
        {users.map((user: { name: string; id: number }) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
