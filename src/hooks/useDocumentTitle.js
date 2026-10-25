import { useEffect } from 'react'

const BASE = 'Enes Günümdoğdu'
const DEFAULT_TITLE = `${BASE} | Software Engineer` // matches index.html

function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} | ${BASE}` : DEFAULT_TITLE

    return () => {
      document.title = prevTitle
    }
  }, [title])
}

export default useDocumentTitle
