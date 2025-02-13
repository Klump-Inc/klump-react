import React, { useEffect } from 'react'

export const KlumpCheckout = ({ onClick }) => {
  useEffect(() => {
    const scriptSrc = 'https://js.useklump.com/klump.js'

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [])
  return <div id='klump__checkout' onClick={onClick} />
}
