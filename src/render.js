



import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(

        <React.StrictMode>

            <App state = {state} addPost = {state.addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}