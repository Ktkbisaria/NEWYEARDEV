import { useState } from 'react'

function Page5({ manifesting, updateFormData, nextPage, prevPage }) {
  const [inputManifesting, setInputManifesting] = useState(manifesting || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputManifesting.trim()) {
      updateFormData({ manifesting: inputManifesting.trim() })
      nextPage()
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Manifesting
          </h1>
          <p className="text-base" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
            One thing you're manifesting in 2025 (be specific!)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              What are you manifesting?
            </label>
            <textarea
              value={inputManifesting}
              onChange={(e) => setInputManifesting(e.target.value)}
              placeholder="Be specific about what you're manifesting..."
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

export default Page5

