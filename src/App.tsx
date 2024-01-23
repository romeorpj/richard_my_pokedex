import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'

const App = () => {

    return (
      <Router>
        <main className="container">
          <Header/>
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </main>
      </Router>
    )
  }

export default App
App.displayName = 'App'