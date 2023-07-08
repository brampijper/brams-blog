import React from 'react'
import { Link } from "gatsby"
import { Home } from "react-feather"

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

export default function Navigation({isRootPath, title}) {
    let header

    if (isRootPath) {
        header = (
          <h1 className="font-bold text-2xl md:text-5xl">
              {title}
          </h1>
        )
      } else {
        header = (
          <p className="font-extrabold text-xl flex items-center gap-3">
            < Home width={18} />
            {title}
          </p>
        )
      }

    return (
        <nav className="flex flex-row justify-between items-center">
            <Link 
                to="/" 
                title="Home" 
                className="p-2 md:p-4 rounded-md hover:bg-gray-200"
            >
                {header}
            </Link>
            <DesktopNavigation />
            <MobileNavigation />
        </nav>
    )
}