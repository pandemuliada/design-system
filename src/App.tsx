import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
