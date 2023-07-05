import React from "react"
import { Link } from "gatsby"
// import Footer from "./Footer"
import "./layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath; 
  let header, subtitle;

  if (isRootPath) {
    header = (
      <h1 className="font-bold text-5xl">
        <Link to="/">{title}</Link>
      </h1>
    )
    subtitle = (
      <h2 className="">
      Freelancing, volunteering and traveling enforced my passion for human connections, web development and nature.
      That passion fuels my work: to connect the digital world and to help people in the physical world 🌏
      💻 Full stack development.
      💪🏼 Life long learner: both online and offline.
      🌄 Relocated to Norway, now living in Oslo.
      ✏️ I enjoy writing about personal development and coding.
    </h2>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        Home
      </Link>
    )
  }
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        {subtitle}
      </header>
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
