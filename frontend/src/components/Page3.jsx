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
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#d4af7a', letterSpacing: '-0.01em' }}>
            Rate Your Plan
          </h1>
          <p className="text-lg" style={{ color: '#374151', opacity: 0.75 }}>
            How excited are you about your New Year plans?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <div className="flex justify-center gap-4 md:gap-6 mb-6">
              {stars.map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setSelectedRating(star)}
                  className={`text-5xl md:text-6xl transition-all transform hover:scale-110 ${
                    star <= selectedRating
                      ? ''
                      : 'opacity-25 hover:opacity-40'
                  }`}
                  style={star <= selectedRating ? { color: '#d4af7a' } : { color: '#9ca3af' }}
                >
                  ⭐
                </button>
              ))}
            </div>
            {selectedRating > 0 && (
              <p className="text-center text-xl font-medium" style={{ color: '#d4af7a' }}>
                {selectedRating === 5 && "Amazing!"}
                {selectedRating === 4 && "Great!"}
                {selectedRating === 3 && "Nice!"}
                {selectedRating === 2 && "Okay"}
                {selectedRating === 1 && "Hmm"}
              </p>
            )}
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
              disabled={selectedRating === 0}
              className="button-primary flex-1 py-4 rounded-lg text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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

