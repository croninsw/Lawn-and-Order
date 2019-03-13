import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Lawn_Order from "./Components/Lawn_Order"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <Router>
    <Lawn_Order />
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()