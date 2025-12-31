import { useState } from 'react'

function Page1({ name, updateFormData, nextPage }) {
  const [inputName, setInputName] = useState(name)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputName.trim()) {
      updateFormData({ name: inputName.trim() })
      nextPage()
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-8" style={{ color: '#d4af7a', letterSpacing: '-0.03em', fontWeight: 600 }}>
            Happy New Year
          </h1>
          <h2 className="text-xl md:text-2xl font-light" style={{ color: '#a0a0a0', letterSpacing: '0.02em' }}>
            from <span className="font-normal" style={{ color: '#2d3748' }}>ktk</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#2d3748', letterSpacing: '-0.01em' }}>
              What's your name?
            </label>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter your name..."
              className="input-style w-full px-5 py-4 rounded-lg text-lg focus:outline-none transition-all"
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="button-cta w-full py-4 text-base font-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page1

