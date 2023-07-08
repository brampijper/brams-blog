import React from "react"

import Navigation from "./Navigation"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath; 

  return (
    <div className="flex flex-col flex-1 min-h-screen md:max-w-2xl lg:max-w-3xl xl:max-w-5xl m-auto pt-8 px-8 md:px-2 md:gap-6 md:divide-y divide-slate-400 font-sans">
      <Navigation 
        title={title} 
        isRootPath={isRootPath} 
      />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
