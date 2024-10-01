import React, { useState } from 'react'
import "./Header.css"

function Header() {
    const [scroll, setScroll] = useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })

  return (
    <header className={`header${scroll ? " header--background" : ""}`}>
        <div>
            logo
        </div>
        <div>
            navbar
        </div>
    </header>
  )
}

export default Header
