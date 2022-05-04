import React, { useEffect } from 'react'

export const KlumpCheckout = ({ onClick }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://js.useklump.com/klump.js`
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return <div id='klump__checkout' onClick={onClick} />
}
