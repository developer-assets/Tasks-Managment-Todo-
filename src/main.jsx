import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About.jsx';
import PageLayout from './Components/PageLayout.jsx';
import Tasks from './Components/Tasks.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/tasks' element={<Tasks />} />
        </Routes>
      </PageLayout>
    </Router>
  </React.StrictMode>
)
