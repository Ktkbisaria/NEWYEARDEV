import { useState, useEffect } from 'react'
import axios from 'axios'

function Success({ formData, resetForm }) {
  const [isSubmitting, setIsSubmitting] = useState(true)
  const [submitStatus, setSubmitStatus] = useState('submitting')

  useEffect(() => {
    const submitData = async () => {
      try {
        const response = await axios.post('/api/submissions', formData)
        console.log('Submission successful:', response.data)
        setSubmitStatus('success')
        setIsSubmitting(false)
      } catch (error) {
        console.error('Error submitting:', error)
        console.error('Error details:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          url: error.config?.url
        })
        setSubmitStatus('error')
        setIsSubmitting(false)
      }
    }

    submitData()
  }, [formData])

  if (isSubmitting) {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h2 className="text-3xl font-bold text-white mb-2">Submitting...</h2>
          <p className="text-gray-400">Please wait</p>
        </div>
      </div>
    )
  }

  if (submitStatus === 'error') {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-3xl font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-gray-400 text-sm mb-6">
            Check browser console (F12) for details
          </p>
          <button
            onClick={resetForm}
            className="button-primary px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-xl text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Thank You, {formData.name}!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your New Year plans have been saved!
        </p>
        
        <div className="card-effect rounded-lg p-6 mb-6 text-left">
          <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Plan:</span> {formData.plan}</p>
          <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Rating:</span> {'⭐'.repeat(formData.rating)}</p>
          {formData.creative_response && (
            <p className="text-gray-300"><span className="font-semibold text-white">Message:</span> {formData.creative_response}</p>
          )}
        </div>

        <button
          onClick={resetForm}
          className="button-primary px-8 py-4 rounded-lg text-lg font-semibold"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )
}

export default Success

