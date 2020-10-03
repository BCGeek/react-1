import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lakeList = [{
    id: 1,
    name: "Lake One",
    trailhead: "T1"
  },
  {
    id: 2,
    name: "Lake Two",
    trailhead: "T2"
  },
  {
    id: 3,
    name: "Lake Three",
    trailhead: "T3333"
  }

]

ReactDOM.render( <
  App lakes = {
    lakeList
  }
  />,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();