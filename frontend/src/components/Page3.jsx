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
      <div className="glass-effect rounded-2xl p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#2d3748', letterSpacing: '-0.02em', fontWeight: 500 }}>
            Rate Your Plan
          </h1>
          <p className="text-base" style={{ color: '#a0a0a0', letterSpacing: '0.01em' }}>
            How excited are you about your New Year plans?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="animate-slide-up">
            <div className="flex justify-center gap-5 md:gap-7 mb-8">
              {stars.map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setSelectedRating(star)}
                  className={`text-5xl md:text-6xl transition-all transform hover:scale-110 ${
                    star <= selectedRating
                      ? ''
                      : 'opacity-20 hover:opacity-35'
                  }`}
                  style={star <= selectedRating ? { color: '#2d3748' } : { color: '#a0a0a0' }}
                >
                  ⭐
                </button>
              ))}
            </div>
            {selectedRating > 0 && (
              <p className="text-center text-lg font-medium" style={{ color: '#2d3748', letterSpacing: '-0.01em' }}>
                {selectedRating === 5 && "Amazing"}
                {selectedRating === 4 && "Great"}
                {selectedRating === 3 && "Nice"}
                {selectedRating === 2 && "Okay"}
                {selectedRating === 1 && "Hmm"}
              </p>
            )}
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
              disabled={selectedRating === 0}
              className="button-primary flex-1 py-3.5 text-base font-medium disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page3

