import { useState } from 'react'

function Page3({ message, updateFormData, nextPage, prevPage }) {
  const [response, setResponse] = useState(message || '')
  const [selectedEmoji, setSelectedEmoji] = useState('')

  const emojis = ['🎊', '🎈', '🎁', '🍾', '🎆', '🎇', '✨', '🌟', '💫', '🎉', '🥳', '🎂']

  const handleSubmit = (e) => {
    e.preventDefault()
    const finalResponse = selectedEmoji ? `${selectedEmoji} ${response}`.trim() : response.trim()
    updateFormData({ message: finalResponse || selectedEmoji || '' })
    nextPage()
  }

  return (
    <div className="animate-fade-in">
      <div className="glass-effect p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            New Year's Wish
          </h1>
          <p className="text-base" style={{ color: '#aaa', letterSpacing: '0.01em' }}>
            What's your New Year's wish or message?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              Your New Year's wish or message
            </label>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Share a wish, message, or just your vibe..."
              rows="5"
              className="input-style w-full px-4 py-3 text-base focus:outline-none resize-none"
              autoFocus
            />
          </div>

          <div className="animate-slide-up">
            <label className="block text-base font-medium mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
              Or pick an emoji
            </label>
            <div className="grid grid-cols-6 gap-2.5">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-2xl p-3.5 rounded-lg transition-all duration-300 border ${
                    selectedEmoji === emoji
                      ? ''
                      : 'hover:border-opacity-60 hover:scale-110'
                  }`}
                  style={selectedEmoji === emoji ? { 
                    background: 'rgba(0, 199, 133, 0.2)',
                    borderColor: '#00c785',
                    boxShadow: '0 0 15px rgba(0, 199, 133, 0.4)'
                  } : { 
                    background: 'rgba(26, 26, 26, 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
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

export default Page3
