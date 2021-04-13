import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import {observe} from "web-vitals/dist/modules/lib/observe";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>

            <App state={state} addPost={state.addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

