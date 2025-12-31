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

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Admin Access
            </h1>
            <p className="text-white/80 text-lg">
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
                className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg placeholder-white/60 focus:outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/30 transition-all"
                autoFocus
                required
              />
              {passwordError && (
                <p className="text-red-300 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xl font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl glow-effect"
            >
              Unlock 🔓
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl text-center">
        <div className="text-6xl mb-4 animate-bounce-slow">⏳</div>
        <h2 className="text-3xl font-bold text-white">Loading submissions...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl text-center">
        <div className="text-6xl mb-4">😢</div>
        <h2 className="text-3xl font-bold text-white mb-4">{error}</h2>
        <button
          onClick={fetchSubmissions}
          className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl">
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            All New Year Plans 📋
          </h1>
          <p className="text-white/80 text-lg">
            {submissions.length} {submissions.length === 1 ? 'submission' : 'submissions'} collected
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-white/80 text-xl">No submissions yet. Be the first one!</p>
          </div>
        ) : (
          <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all animate-slide-up"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                      {submission.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      Submitted: {new Date(submission.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-3xl mt-2 md:mt-0">
                    {'⭐'.repeat(submission.rating)}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-white/90 text-lg leading-relaxed">
                    <span className="font-semibold text-yellow-300">Plan:</span> {submission.plan}
                  </p>
                </div>

                {submission.creative_response && (
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80">
                      <span className="font-semibold text-pink-300">Message:</span> {submission.creative_response}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={fetchSubmissions}
            className="px-8 py-3 bg-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 mr-4"
          >
            🔄 Refresh
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem('admin_authenticated')
              setIsAuthenticated(false)
            }}
            className="px-8 py-3 bg-red-500/20 text-white text-lg font-semibold rounded-xl hover:bg-red-500/30 transition-all border border-red-500/30"
          >
            🔒 Lock
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewSubmissions
