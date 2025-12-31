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
      <div className="glass-effect p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Rate Your Plan
          </h1>
          <p className="text-base" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
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
                  className={`text-5xl md:text-6xl transition-all duration-300 transform hover:scale-125 ${
                    star <= selectedRating
                      ? 'glow-effect'
                      : 'opacity-30 hover:opacity-50'
                  }`}
                  style={star <= selectedRating ? { 
                    color: '#00c785',
                    filter: 'drop-shadow(0 0 10px rgba(0, 199, 133, 0.5))'
                  } : { color: '#888' }}
                >
                  ⭐
                </button>
              ))}
            </div>
            {selectedRating > 0 && (
              <p className="text-center text-lg font-semibold" style={{ color: '#00c785', letterSpacing: '-0.01em', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
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
              className="button-secondary flex-1"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={selectedRating === 0}
              className="button-primary flex-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
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

