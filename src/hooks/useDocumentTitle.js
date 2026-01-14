import { useEffect } from 'react'

function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} | Enes Gunumdogdu` : 'Enes Gunumdogdu | Backend Developer'

    return () => {
      document.title = prevTitle
    }
  }, [title])
}

export default useDocumentTitle
