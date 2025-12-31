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
      <div className="glass-effect rounded-2xl p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#2D3561' }}>
            One More Thing
          </h1>
          <p className="text-lg" style={{ color: '#2D3561', opacity: 0.7 }}>
            What's your New Year's wish or message?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-up">
            <label className="block text-lg font-medium mb-3" style={{ color: '#2D3561' }}>
              Your New Year's wish or message
            </label>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Share a wish, message, or just your vibe..."
              rows="5"
              className="input-style w-full px-5 py-4 rounded-lg text-lg focus:outline-none transition-all resize-none"
              autoFocus
            />
          </div>

          <div className="animate-slide-up">
            <label className="block text-lg font-medium mb-3" style={{ color: '#2D3561' }}>
              Or pick an emoji
            </label>
            <div className="grid grid-cols-6 gap-3">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-3xl p-4 rounded-lg transition-all border ${
                    selectedEmoji === emoji
                      ? 'border-[#E8927C]'
                      : 'border-[#E8B86D]/30 hover:border-[#E8B86D]/50'
                  }`}
                  style={selectedEmoji === emoji ? { 
                    background: '#E8927C', 
                    boxShadow: '0 2px 8px rgba(232, 146, 124, 0.3)' 
                  } : { 
                    background: '#FAF8F5' 
                  }}
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
              className="button-secondary flex-1 py-4 rounded-lg text-lg font-medium"
            >
              Back
            </button>
            <button
              type="submit"
              className="button-primary flex-1 py-4 rounded-lg text-lg font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page4

