import ReactDOM from 'react-dom';
import App from './App.js';
import ContextAPI from './Shopping_Cart/ContextApi.js';
import {Provider} from 'react-redux';
//import store from './Store/index.js';
import store from './Store/indextoolkit.js';
ReactDOM.render(
    <ContextAPI>
        <Provider store={store} >
            <App/>
        </Provider>
    </ContextAPI>,
    document.getElementById('root')
    );

