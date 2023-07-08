import React from 'react'
import { Link } from "gatsby"
import { GitHub, Linkedin, List } from 'react-feather'

export default function DesktopNavigation() {
    return (
        <div className="hidden sm:flex">
            <Link 
                to="/blog" 
                title="All blog posts" 
                className="p-2 md:p-4 rounded-md hover:bg-gray-200"
            >
                < List />
            </Link>

            <a 
                title="Github" 
                href="https://github.com/brampijper" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 md:p-4 rounded-md hover:bg-gray-200"
            >
                <GitHub />
            </a>

            <a 
                title="LinkedIn" 
                href="https://www.linkedin.com/in/bram-pijper-5389b0276/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 md:p-4 rounded-md hover:bg-gray-200"
            >
                <Linkedin />
            </a>
        </div>
    )
}