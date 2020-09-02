import React from 'react';

import { BrowserRouter, Route} from 'react-router-dom';

import App from './App';
import ReactOrg from './pages/ReactOrg';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={App}/>
            <Route path="/react-org" component={ReactOrg}/>
        </BrowserRouter>
    )
}

export default Routes;