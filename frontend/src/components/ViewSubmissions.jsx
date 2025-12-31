import { useState, useEffect } from 'react'
import axios from 'axios'

function ViewSubmissions() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Simple password - you can change this to whatever you want
  const ADMIN_PASSWORD = 'ktk2024' // Change this to your preferred password

  useEffect(() => {
    // Check if already authenticated (stored in sessionStorage)
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
      fetchSubmissions()
    } else {
      setLoading(false)
    }
  }, [])

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_authenticated', 'true')
      setPasswordError('')
      fetchSubmissions()
    } else {
      setPasswordError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/submissions')
      setSubmissions(response.data)
      setLoading(false)
    } catch (err) {
      setError('Failed to load submissions')
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) {
      return
    }

    try {
      await axios.delete(`/api/submissions?id=${id}`)
      // Remove from local state
      setSubmissions(submissions.filter(sub => sub.id !== id))
    } catch (err) {
      console.error('Error deleting submission:', err)
      alert('Failed to delete submission. Please try again.')
    }
  }

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#2D3561' }}>
              Admin Access
            </h1>
            <p className="text-lg" style={{ color: '#2D3561', opacity: 0.7 }}>
              Enter password to view all submissions
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError('')
                }}
                placeholder="Enter password..."
                className="input-style w-full px-5 py-4 rounded-lg text-lg focus:outline-none transition-all"
                autoFocus
                required
              />
              {passwordError && (
                <p className="text-sm mt-2" style={{ color: '#E8927C' }}>{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="button-primary w-full py-4 rounded-lg text-lg font-semibold"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
        <div className="text-6xl mb-4">⏳</div>
        <h2 className="text-3xl font-bold" style={{ color: '#2D3561' }}>Loading submissions...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
        <div className="text-6xl mb-4">😢</div>
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#2D3561' }}>{error}</h2>
        <button
          onClick={fetchSubmissions}
          className="button-primary px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl">
      <div className="glass-effect rounded-2xl p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#2D3561' }}>
            All New Year Plans
          </h1>
          <p className="text-lg" style={{ color: '#2D3561', opacity: 0.7 }}>
            {submissions.length} {submissions.length === 1 ? 'submission' : 'submissions'} collected
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl" style={{ color: '#2D3561', opacity: 0.7 }}>No submissions yet. Be the first one!</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="card-effect rounded-lg p-6 animate-slide-up"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2" style={{ color: '#2D3561' }}>
                          {submission.name}
                        </h3>
                        <p className="text-sm" style={{ color: '#2D3561', opacity: 0.6 }}>
                          {new Date(submission.created_at).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="ml-4 px-4 py-2 rounded-lg hover:opacity-80 transition-all text-sm font-medium"
                        style={{ 
                          background: '#E8927C', 
                          color: 'white',
                          border: '1px solid #E8927C'
                        }}
                        title="Delete submission"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="text-2xl mt-2 md:mt-0" style={{ color: '#E8B86D' }}>
                    {'⭐'.repeat(submission.rating)}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-lg leading-relaxed" style={{ color: '#2D3561' }}>
                    <span className="font-semibold" style={{ color: '#E8B86D' }}>Plan:</span> {submission.plan}
                  </p>
                </div>

                {submission.creative_response && (
                  <div className="pt-4 border-t" style={{ borderColor: '#E8B86D', opacity: 0.3 }}>
                    <p style={{ color: '#2D3561', opacity: 0.8 }}>
                      <span className="font-semibold" style={{ color: '#E8B86D' }}>Message:</span> {submission.creative_response}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={fetchSubmissions}
            className="button-secondary px-8 py-3 rounded-lg text-lg font-medium"
          >
            Refresh
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem('admin_authenticated')
              setIsAuthenticated(false)
            }}
            className="button-secondary px-8 py-3 rounded-lg text-lg font-medium"
            style={{ borderColor: '#E8927C', color: '#E8927C' }}
          >
            Lock
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewSubmissions
