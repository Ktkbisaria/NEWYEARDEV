import { useState } from 'react'

function Page2({ plan, updateFormData, nextPage, prevPage }) {
  const [inputPlan, setInputPlan] = useState(plan)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputPlan.trim()) {
      updateFormData({ plan: inputPlan.trim() })
      nextPage()
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-2xl p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#4a5568', letterSpacing: '-0.02em', fontWeight: 500 }}>
            What's Your Plan?
          </h1>
          <p className="text-base" style={{ color: '#4a5568', opacity: 0.7, letterSpacing: '0.01em' }}>
            Tell us in detail what you're doing this New Year
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#4a5568', letterSpacing: '-0.01em' }}>
              Share your New Year plans in detail
            </label>
            <textarea
              value={inputPlan}
              onChange={(e) => setInputPlan(e.target.value)}
              placeholder="I'm planning to..."
              rows="8"
              className="input-style w-full px-5 py-4 rounded-lg text-lg focus:outline-none transition-all resize-none"
              required
              autoFocus
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={prevPage}
              className="button-secondary flex-1 py-3.5 text-base font-medium"
            >
              Back
            </button>
            <button
              type="submit"
              className="button-primary flex-1 py-3.5 text-base font-medium"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page2

