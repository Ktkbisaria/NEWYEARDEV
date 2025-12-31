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
      <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
        <div className="text-5xl mb-6">⏳</div>
        <h2 className="text-2xl font-semibold mb-2" style={{ color: '#2d3748', letterSpacing: '-0.01em' }}>Submitting...</h2>
        <p style={{ color: '#a0a0a0', fontSize: '15px' }}>Please wait</p>
      </div>
      </div>
    )
  }

  if (submitStatus === 'error') {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
          <div className="text-5xl mb-6">😢</div>
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#2d3748', letterSpacing: '-0.01em' }}>Something went wrong</h2>
          <p className="text-sm mb-8" style={{ color: '#a0a0a0' }}>
            Check browser console (F12) for details
          </p>
          <button
            onClick={resetForm}
            className="button-primary px-8 py-3.5 text-base font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
        <div className="text-6xl mb-8">🎉</div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#2d3748', letterSpacing: '-0.02em', fontWeight: 500 }}>
          Thank You, {formData.name}!
        </h1>
        <p className="text-base mb-10" style={{ color: '#a0a0a0', letterSpacing: '0.01em' }}>
          Your New Year plans have been saved
        </p>
        
        <div className="card-effect rounded-xl p-6 mb-8 text-left">
          <p className="mb-3 text-base" style={{ color: '#2d3748' }}><span className="font-medium" style={{ color: '#2d3748', opacity: 0.6 }}>Plan:</span> <span style={{ color: '#2d3748' }}>{formData.plan}</span></p>
          <p className="mb-3 text-base" style={{ color: '#2d3748' }}><span className="font-medium" style={{ color: '#2d3748', opacity: 0.6 }}>Rating:</span> <span style={{ color: '#2d3748' }}>{'⭐'.repeat(formData.rating)}</span></p>
          {formData.creative_response && (
            <p className="text-base" style={{ color: '#2d3748' }}><span className="font-medium" style={{ color: '#2d3748', opacity: 0.6 }}>Message:</span> <span style={{ color: '#2d3748' }}>{formData.creative_response}</span></p>
          )}
        </div>

        <button
          onClick={resetForm}
          className="button-primary px-8 py-3.5 text-base font-medium"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )
}

export default Success

