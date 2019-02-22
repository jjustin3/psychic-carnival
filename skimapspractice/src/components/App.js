import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './Header'
import MapList from './MapList'

const App = () =>{
    return(
        <div>
            <BrowserRouter>
              <div>
                  <Header/>
                  <Switch>
                      <Route path = "/" exact component ={MapList}/>
                  </Switch>
              </div>
            </BrowserRouter>
        </div>
    )
};

export default App;