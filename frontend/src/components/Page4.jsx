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
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#f5f5f5', letterSpacing: '-0.02em', fontWeight: 500 }}>
            One More Thing
          </h1>
          <p className="text-base" style={{ color: '#a0a0a0', letterSpacing: '0.01em' }}>
            What's your New Year's wish or message?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#f5f5f5', letterSpacing: '-0.01em' }}>
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
            <label className="block text-base font-medium mb-3" style={{ color: '#f5f5f5', letterSpacing: '-0.01em' }}>
              Or pick an emoji
            </label>
            <div className="grid grid-cols-6 gap-2.5">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-2xl p-3.5 rounded-lg transition-all border ${
                    selectedEmoji === emoji
                      ? ''
                      : 'hover:border-opacity-60'
                  }`}
                  style={selectedEmoji === emoji ? { 
                    background: 'rgba(201, 168, 113, 0.2)',
                    borderColor: 'rgba(201, 168, 113, 0.4)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                  } : { 
                    background: 'rgba(26, 26, 26, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={prevPage}
              className="button-secondary flex-1 py-3.5 text-base font-medium"
            >
              Back
            </button>
            <button
              type="submit"
              className="button-primary flex-1 py-3.5 text-base font-medium"
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

