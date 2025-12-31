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
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 mb-4 animate-bounce-slow">
            🎉
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Happy New Year
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-8">
            from <span className="text-pink-300">ktk</span>!
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-up">
            <label className="block text-white text-xl font-semibold mb-3">
              What's your name? ✨
            </label>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg placeholder-white/60 focus:outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/30 transition-all"
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xl font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl glow-effect"
          >
            Let's Go! 🚀
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page1

