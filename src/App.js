import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";

/**
 * Importa a store
 */
import store from "./store";

function App() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
