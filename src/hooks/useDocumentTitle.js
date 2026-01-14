import { useEffect } from 'react'

function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} | Enes Günümdoğdu` : 'Enes Günümdoğdu | Backend Developer'

    return () => {
      document.title = prevTitle
    }
  }, [title])
}

export default useDocumentTitle
