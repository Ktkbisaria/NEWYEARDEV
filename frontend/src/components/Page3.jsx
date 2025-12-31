import { useState } from 'react'

function Page3({ rating, updateFormData, nextPage, prevPage }) {
  const [selectedRating, setSelectedRating] = useState(rating || 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedRating > 0) {
      updateFormData({ rating: selectedRating })
      nextPage()
    }
  }

  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Rate Your Plan! ⭐
          </h1>
          <p className="text-white/80 text-lg">
            How excited are you about your New Year plans?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <div className="flex justify-center gap-3 md:gap-4 mb-6">
              {stars.map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setSelectedRating(star)}
                  className={`text-6xl md:text-7xl transition-all transform hover:scale-125 ${
                    star <= selectedRating
                      ? 'text-yellow-300 animate-bounce-slow'
                      : 'text-white/30 hover:text-white/50'
                  }`}
                >
                  ⭐
                </button>
              ))}
            </div>
            {selectedRating > 0 && (
              <p className="text-center text-yellow-300 text-2xl font-bold">
                {selectedRating === 5 && "Amazing! 🔥"}
                {selectedRating === 4 && "Great! 🎉"}
                {selectedRating === 3 && "Nice! 😊"}
                {selectedRating === 2 && "Okay 👍"}
                {selectedRating === 1 && "Hmm 🤔"}
              </p>
            )}
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
              disabled={selectedRating === 0}
              className="flex-1 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xl font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl glow-effect disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Next →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page3

