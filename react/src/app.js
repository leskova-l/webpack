import './assets/global.less';
import ReactDOM from 'react-dom';
import React from 'react';
import Main from "./components/main";

/**
 * Redux (reducer hot replacement)
 * */
// module.hot.accept('./reducers/reducers', () => {
//     const nextAppReducers = require('./reducers/reducers.js');
//     store.replaceReducer(nextAppReducers)
// });

if (module.hot) {
    module.hot.accept()
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
