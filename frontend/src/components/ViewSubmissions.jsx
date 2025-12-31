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
        <div className="glass-effect p-8 md:p-12 max-w-md mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-6">🔒</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Admin Access
            </h1>
            <p className="text-base" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
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
                className="input-style w-full px-4 py-3 text-base focus:outline-none"
                autoFocus
                required
              />
              {passwordError && (
                <p className="text-sm mt-2" style={{ color: '#ff6b6b' }}>{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="button-cta w-full"
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
      <div className="glass-effect p-8 md:p-12 text-center">
        <div className="text-5xl mb-6">⏳</div>
        <h2 className="text-2xl font-bold" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>Loading submissions...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-effect p-8 md:p-12 text-center">
        <div className="text-5xl mb-6">😢</div>
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>{error}</h2>
        <button
          onClick={fetchSubmissions}
          className="button-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl">
      <div className="glass-effect p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            All New Year Plans
          </h1>
          <p className="text-base" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
            {submissions.length} {submissions.length === 1 ? 'submission' : 'submissions'} collected
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-6">📭</div>
            <p className="text-lg" style={{ color: '#aaa' }}>No submissions yet. Be the first one!</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="card-effect p-6 animate-slide-up"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1.5" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                          {submission.name}
                        </h3>
                        <p className="text-sm" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
                          {new Date(submission.created_at).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="ml-4 px-3.5 py-1.5 text-xs font-medium button-secondary"
                        title="Delete submission"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-5 space-y-3">
                  <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                    <span className="font-medium" style={{ color: '#aaa' }}>Plan:</span> {submission.plan}
                  </p>
                  {submission.message && (
                    <p className="text-base" style={{ color: '#FFFFFF' }}>
                      <span className="font-medium" style={{ color: '#aaa' }}>Message:</span> {submission.message}
                    </p>
                  )}
                  {submission.anthem && (
                    <p className="text-base" style={{ color: '#FFFFFF' }}>
                      <span className="font-medium" style={{ color: '#aaa' }}>2025 Anthem:</span> {submission.anthem}
                    </p>
                  )}
                  {submission.manifesting && (
                    <p className="text-base" style={{ color: '#FFFFFF' }}>
                      <span className="font-medium" style={{ color: '#aaa' }}>Manifesting:</span> {submission.manifesting}
                    </p>
                  )}
                  {submission.avoid && (
                    <p className="text-base" style={{ color: '#FFFFFF' }}>
                      <span className="font-medium" style={{ color: '#aaa' }}>Avoiding:</span> {submission.avoid}
                    </p>
                  )}
                  {submission.honest && (
                    <p className="text-base" style={{ color: '#FFFFFF' }}>
                      <span className="font-medium" style={{ color: '#aaa' }}>Confession:</span> {submission.honest}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex gap-3 justify-center">
          <button
            onClick={fetchSubmissions}
            className="button-secondary"
          >
            Refresh
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem('admin_authenticated')
              setIsAuthenticated(false)
            }}
            className="button-secondary"
          >
            Lock
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewSubmissions
