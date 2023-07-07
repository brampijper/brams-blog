import React from 'react'
import Menu from '../Menu'

import { Link } from "gatsby"
import { ExternalLink } from 'react-feather'

export default function MobileNavBar({styles}) {
    return (
        <Menu styles={styles}>
            <Menu.Button />
            <Menu.DropDown>
                <Menu.Item>
                    <Link 
                        to="/blog" 
                        title="All blog posts" 
                        className="p-2 md:p-4 rounded-md flex flex-row gap-3 hover:bg-gray-200"
                    >
                        Blog
                    </Link>
                </Menu.Item>
                
                <Menu.Item>
                <a 
                    title="Github" 
                    href="https://github.com/brampijper" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 md:p-4 rounded-md hover:bg-gray-200 flex flex-row gap-1"
                >
                    Github <ExternalLink width={16} />
                </a>
                </Menu.Item>

                <Menu.Item>
                <a 
                    title="LinkedIn" 
                    href="https://www.linkedin.com/in/bram-pijper-5389b0276/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 md:p-4 rounded-md hover:bg-gray-200 flex flex-row gap-1"
                >
                    LinkedIn <ExternalLink width={16} />
                </a>
                </Menu.Item>
            </Menu.DropDown>
        </Menu>
    )
}