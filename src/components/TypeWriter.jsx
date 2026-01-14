import { useState, useEffect } from 'react'

function TypeWriter({ words, speed = 100, deleteSpeed = 50, delay = 2000 }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1))

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        setText(currentWord.substring(0, text.length - 1))

        if (text === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, delay])

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}

export default TypeWriter
