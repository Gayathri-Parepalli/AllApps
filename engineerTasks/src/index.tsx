import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux1/Store";
// ReactDOM.render(
//   <React.StrictMode>
//   <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement:any = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(
	<Provider store={store}>
    <App />
    </Provider>
 

)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
