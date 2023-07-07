import React from "react"
import { Link } from "gatsby"
import { Home } from "react-feather"

import Nav from "../components/Nav"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath; 
  let header

  if (isRootPath) {
    header = (
      <h1 className="font-bold text-3xl md:text-5xl shrink">
          {title}
      </h1>
    )
  } else {
    header = (
      <p className="font-extrabold text-xl ml-4 shrink flex flex-row items-center	gap-3">
        < Home width={18} />
        {title}
      </p>
    )
  }
  return (
    <div  data-is-root-path={isRootPath} className="flex flex-col flex-1 min-h-screen max-w-screen-md m-auto pt-8 px-8 md:px-2 md:gap-6 md:divide-y divide-slate-400 font-sans">
      <nav className="flex flex-row justify-between items-center shrink-0">
        
        <Link to="/" title="Home" className="p-2 md:p-4 rounded-md hover:bg-gray-200">
          {header}
        </Link>
        
        <Nav />
      </nav>
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
