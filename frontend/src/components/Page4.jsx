import { useState } from 'react'

function Page4({ creative_response, updateFormData, nextPage, prevPage }) {
  const [response, setResponse] = useState(creative_response)
  const [selectedEmoji, setSelectedEmoji] = useState('')

  const emojis = ['🎊', '🎈', '🎁', '🍾', '🎆', '🎇', '✨', '🌟', '💫', '🎉', '🥳', '🎂']

  const handleSubmit = (e) => {
    e.preventDefault()
    const finalResponse = selectedEmoji ? `${selectedEmoji} ${response}`.trim() : response.trim()
    updateFormData({ creative_response: finalResponse || selectedEmoji || 'No response' })
    nextPage()
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            One More Thing! 🎨
          </h1>
          <p className="text-white/80 text-lg mb-4">
            What's your New Year's wish or message?
          </p>
          <p className="text-yellow-300 text-sm">
            (Or just pick an emoji that represents your vibe!)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-up">
            <label className="block text-white text-xl font-semibold mb-3">
              Your New Year's wish or message:
            </label>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Share a wish, message, or just your vibe..."
              rows="5"
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg placeholder-white/60 focus:outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/30 transition-all resize-none"
              autoFocus
            />
          </div>

          <div className="animate-slide-up">
            <label className="block text-white text-lg font-semibold mb-3">
              Or pick an emoji that represents your vibe:
            </label>
            <div className="grid grid-cols-6 gap-3">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-4xl p-4 rounded-xl transition-all transform hover:scale-110 ${
                    selectedEmoji === emoji
                      ? 'bg-yellow-300/30 border-2 border-yellow-300 scale-110'
                      : 'bg-white/10 border-2 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={prevPage}
              className="flex-1 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="flex-1 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xl font-bold rounded-xl hover:from-yellow-300 hover:to-pink-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl glow-effect"
            >
              Submit! 🎊
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page4

