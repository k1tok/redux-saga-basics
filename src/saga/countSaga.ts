import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DEC,
  ASYNC_INC,
  decAction,
  incAction,
} from "../store/countReducer";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incAction());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decAction());
}

export default function* countWatcher() {
  yield takeEvery(ASYNC_INC, incrementWorker);
  yield takeEvery(ASYNC_DEC, decrementWorker);
}
