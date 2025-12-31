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
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            What's Your Plan?
          </h1>
          <p className="text-gray-400 text-lg">
            Tell us in detail what you're doing this New Year
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-up">
            <label className="block text-white text-lg font-medium mb-3">
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

          <div className="flex gap-4">
            <button
              type="button"
              onClick={prevPage}
              className="button-secondary flex-1 py-4 rounded-lg text-lg font-medium"
            >
              Back
            </button>
            <button
              type="submit"
              className="button-primary flex-1 py-4 rounded-lg text-lg font-semibold"
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

