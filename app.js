import React from "react";
import ReactDOM from "react-dom/client";


const heading=React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},[
React.createElement('h1',{},"i ma heading 1"),
React.createElement('h1',{},"i ma heading 2")

]),

React.createElement('div',{id:'child2'},[
    React.createElement('h1',{},'i am heading 1'),
    React.createElement('h2',{},"i m heading 2")

])

);

const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(heading);  













