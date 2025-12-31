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
      <div className="glass-effect p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-title shimmer-text" style={{ letterSpacing: '-0.02em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Happy New Year
          </h1>
          <h2 className="text-xl md:text-2xl font-light animate-subtitle" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
            from <span className="font-semibold" style={{ color: '#00c785' }}>ktk</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              What's your real name?
            </label>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter your real name..."
              className="input-style w-full px-4 py-3 text-base focus:outline-none"
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="button-cta w-full"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page1

