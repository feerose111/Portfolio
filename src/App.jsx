import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Story from './pages/Story'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-page-bg dark:bg-page-bg-dark transition-colors duration-300">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
