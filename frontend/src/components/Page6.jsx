import { useState } from 'react'

function Page6({ confession, updateFormData, nextPage, prevPage }) {
  const [inputConfession, setInputConfession] = useState(confession || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputConfession.trim()) {
      updateFormData({ confession: inputConfession.trim() })
      nextPage()
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Confession Time
          </h1>
          <p className="text-base" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
            Admit something from 2024 (keep it real)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              What's your confession?
            </label>
            <textarea
              value={inputConfession}
              onChange={(e) => setInputConfession(e.target.value)}
              placeholder="Keep it real..."
              rows="6"
              className="input-style w-full px-4 py-3 text-base focus:outline-none resize-none"
              required
              autoFocus
            />
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
              className="button-primary flex-1"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page6

