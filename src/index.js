import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
// import { store } from "./store"
import { Provider } from "react-redux"
import store from "./redux/configureStore"

ReactDOM.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>,

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
