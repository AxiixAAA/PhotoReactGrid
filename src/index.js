import React from 'react';
// import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC_URL}>
            {/* <Provider store={store}> */}
                <App />
            {/* </Provider> */}
        </HashRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

