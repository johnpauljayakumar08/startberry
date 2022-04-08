import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div className="App">
       <Router >
          
              
       <Switch>
            
            <Route exact path='/' component={SearchPage} />
            <Route exact path='/detailsPage/:id' component={DetailsPage} />
            
        </Switch>
              
          
        </Router>
    </div>
  );
}

export default App;
