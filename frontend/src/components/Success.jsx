import { useState, useEffect } from 'react'
import axios from 'axios'

function Success({ formData, resetForm }) {
  const [isSubmitting, setIsSubmitting] = useState(true)
  const [submitStatus, setSubmitStatus] = useState('submitting')

  useEffect(() => {
    const submitData = async () => {
      try {
        await axios.post('/api/submissions', formData)
        setSubmitStatus('success')
        setIsSubmitting(false)
      } catch (error) {
        console.error('Error submitting:', error)
        setSubmitStatus('error')
        setIsSubmitting(false)
      }
    }

    submitData()
  }, [formData])

  if (isSubmitting) {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <div className="text-6xl mb-4 animate-bounce-slow">⏳</div>
          <h2 className="text-3xl font-bold text-white mb-2">Submitting...</h2>
          <p className="text-white/80">Please wait!</p>
        </div>
      </div>
    )
  }

  if (submitStatus === 'error') {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h2>
          <button
            onClick={resetForm}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl text-center">
        <div className="text-7xl mb-6 animate-bounce-slow">🎉</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Thank You, {formData.name}! ✨
        </h1>
        <p className="text-xl text-white/90 mb-2">
          Your New Year plans have been saved!
        </p>
        <p className="text-lg text-yellow-300 mb-8">
          Wishing you an amazing {new Date().getFullYear()}! 🎊
        </p>
        
        <div className="bg-white/10 rounded-xl p-6 mb-6 text-left">
          <p className="text-white/80 mb-2"><span className="font-semibold">Your Plan:</span> {formData.plan}</p>
          <p className="text-white/80 mb-2"><span className="font-semibold">Rating:</span> {'⭐'.repeat(formData.rating)}</p>
          {formData.creative_response && (
            <p className="text-white/80"><span className="font-semibold">Your Message:</span> {formData.creative_response}</p>
          )}
        </div>

        <button
          onClick={resetForm}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xl font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl glow-effect"
        >
          Submit Another Response 🚀
        </button>
      </div>
    </div>
  )
}

export default Success

