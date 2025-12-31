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
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            What's Your Plan? 🎯
          </h1>
          <p className="text-white/80 text-lg">
            Tell us in detail what you're doing this New Year!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-up">
            <label className="block text-white text-xl font-semibold mb-3">
              Share your New Year plans in detail:
            </label>
            <textarea
              value={inputPlan}
              onChange={(e) => setInputPlan(e.target.value)}
              placeholder="I'm planning to... (be as detailed as you want!)"
              rows="8"
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg placeholder-white/60 focus:outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/30 transition-all resize-none"
              required
              autoFocus
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={prevPage}
              className="flex-1 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="flex-1 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xl font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl glow-effect"
            >
              Next →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page2

