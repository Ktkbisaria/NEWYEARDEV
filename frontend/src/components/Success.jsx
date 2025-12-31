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
      <div className="glass-effect p-8 md:p-12 text-center">
        <div className="text-5xl mb-6">⏳</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>Submitting...</h2>
        <p style={{ color: '#aaa', fontSize: '15px' }}>Please wait</p>
      </div>
      </div>
    )
  }

  if (submitStatus === 'error') {
    return (
      <div className="animate-fade-in">
        <div className="glass-effect p-8 md:p-12 text-center">
          <div className="text-5xl mb-6">😢</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>Something went wrong</h2>
          <p className="text-sm mb-8" style={{ color: '#aaa' }}>
            Check browser console (F12) for details
          </p>
          <button
            onClick={resetForm}
            className="button-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect p-8 md:p-12 text-center">
        <div className="text-6xl mb-8">🎉</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient" style={{ letterSpacing: '-0.02em' }}>
          Thank You, {formData.name}!
        </h1>
        <p className="text-base mb-10" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
          Your New Year plans have been saved
        </p>
        
        <div className="card-effect p-6 mb-8 text-left space-y-3">
          <p className="text-base" style={{ color: '#FFFFFF' }}><span className="font-medium" style={{ color: '#aaa' }}>Plan:</span> {formData.plan}</p>
          {formData.message && (
            <p className="text-base" style={{ color: '#FFFFFF' }}><span className="font-medium" style={{ color: '#aaa' }}>Message:</span> {formData.message}</p>
          )}
          {formData.anthem && (
            <p className="text-base" style={{ color: '#FFFFFF' }}><span className="font-medium" style={{ color: '#aaa' }}>2025 Anthem:</span> {formData.anthem}</p>
          )}
          {formData.manifesting && (
            <p className="text-base" style={{ color: '#FFFFFF' }}><span className="font-medium" style={{ color: '#aaa' }}>Manifesting:</span> {formData.manifesting}</p>
          )}
          {formData.confession && (
            <p className="text-base" style={{ color: '#FFFFFF' }}><span className="font-medium" style={{ color: '#aaa' }}>Confession:</span> {formData.confession}</p>
          )}
          {formData.honest && (
            <p className="text-base" style={{ color: '#FFFFFF' }}><span className="font-medium" style={{ color: '#aaa' }}>If I'm being honest:</span> {formData.honest}</p>
          )}
          <p className="text-base" style={{ color: '#FFFFFF' }}><span className="font-medium" style={{ color: '#aaa' }}>Rating:</span> <span style={{ color: '#00c785' }}>{'⭐'.repeat(formData.rating)}</span></p>
        </div>

        <button
          onClick={resetForm}
          className="button-primary"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )
}

export default Success

