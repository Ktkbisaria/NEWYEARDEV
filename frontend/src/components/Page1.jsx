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
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            🎉
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-3" style={{ color: '#E8B86D' }}>
            Happy New Year
          </h2>
          <h3 className="text-2xl md:text-3xl font-light" style={{ color: '#2D3561' }}>
            from <span className="font-medium" style={{ color: '#E8B86D' }}>ktk</span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-up">
            <label className="block text-lg font-medium mb-3" style={{ color: '#2D3561' }}>
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
            className="button-primary w-full py-4 rounded-lg text-lg font-semibold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page1

