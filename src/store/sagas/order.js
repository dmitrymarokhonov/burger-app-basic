import { put } from "redux-saga/effects";

import axios from "../../axios-orders";
import * as actions from "../actions";

export function* purchaseBurgerSaga(action) {
  try {
    yield put(actions.purchaseBurgerStart());

    const response = yield axios.post(
      "orders.json?auth=" + action.token,
      action.orderData
    );
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
  } catch (err) {
    yield put(actions.purchaseBurgerFail(err));
  }
}

export function* fetchOrdersSaga(action) {
    yield put(actions.fetchOrderStart());
    const queryParams =
    "?auth=" + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
    try {
    const reponse = yield axios.get("/orders.json" + queryParams);
    const fetchedOrders = [];
    for (const key in reponse.data) {
      fetchedOrders.push({
        ...reponse.data[key],
        id: key
      });
    }
    yield put(actions.fetchordersSuccess(fetchedOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail(err));
  }
}
