import { useState } from 'react'
import ResultCard from './ResultCard'
import { checkURL } from '../utils/urlSecurity'

function URLChecker() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)

  const handleCheck = () => {
    if (!url.trim()) {
      setResult({
        status: 'Warning',
        message: 'Please enter a URL'
      })
      return
    }

    const response = checkURL(url)
    setResult(response)
  }

  return (
    <div className="checker-container">
      
      <h2 className="checker-title">
        URL Security Scanner
      </h2>

      <p className="checker-subtitle">
        Scan websites for possible threats 🔍
      </p>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="url-input"
        />

        <button
          onClick={handleCheck}
          className="scan-button"
        >
          Scan URL
        </button>
      </div>

      {result && (
        <ResultCard result={result} />
      )}

    </div>
  )
}

export default URLChecker