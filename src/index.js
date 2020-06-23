import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import reactime from 'dev-reactime';

const rootContainer = document.getElementById('root');
ReactDOM.render(<App />, rootContainer);
reactime(rootContainer);