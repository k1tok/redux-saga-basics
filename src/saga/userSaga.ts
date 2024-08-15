import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USERS, setUsersAction } from "../store/userReducer";
import { User } from "../types/UserDataTypes";

export const fetchUsersFromApi = (): Promise<Response> =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10");

function* fetchUserWorker() {
  const data: Response = yield call(fetchUsersFromApi);
  const json: Array<User> = yield call(
    () => new Promise((res) => res(data.json()))
  );
  yield put(setUsersAction(json));
}

export default function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
