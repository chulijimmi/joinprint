import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers/rootReducer.js";
import saga from "./sagas/rootSaga.js";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();

const customizedMiddleware = getDefaultMiddleware({
  thunk: false,
  serializableCheck: false,
});

const middleware = [...customizedMiddleware, sagaMiddleware];

if (devMode) {
  middleware.push(logger);
}

export default () => {
  const store = configureStore({
    reducer,
    devTools: devMode,
    middleware,
  });
  sagaMiddleware.run(saga);
  return store;
};
