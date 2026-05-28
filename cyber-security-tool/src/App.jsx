import './App.css'
import URLChecker from './components/URLChecker'
import PasswordChecker from './components/PasswordChecker'

function App() {
  return (
    <div className="app">
      <h1>Cyber Security Toolkit</h1>

      <URLChecker />
      <PasswordChecker />
    </div>
  )
}

export default App