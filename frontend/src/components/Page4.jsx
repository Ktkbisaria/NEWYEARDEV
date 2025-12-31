import { useState } from 'react'

function Page4({ anthem, updateFormData, nextPage, prevPage }) {
  const [inputAnthem, setInputAnthem] = useState(anthem || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputAnthem.trim()) {
      updateFormData({ anthem: inputAnthem.trim() })
      nextPage()
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Your 2025 Anthem
          </h1>
          <p className="text-base" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
            What song is your 2025 anthem?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              Song name
            </label>
            <input
              type="text"
              value={inputAnthem}
              onChange={(e) => setInputAnthem(e.target.value)}
              placeholder="Enter song name..."
              className="input-style w-full px-4 py-3 text-base focus:outline-none"
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

export default Page4
