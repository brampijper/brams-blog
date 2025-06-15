import React from 'react'
import Menu from '../Menu'

import { Link } from "gatsby"
import { ExternalLink } from 'react-feather'

export default function MobileNavigation() {
    return (
        <Menu styles={'sm:hidden'}>
            <Menu.Button />
            <Menu.DropDown>
                <Menu.Item>
                    <Link 
                        to="/blog" 
                        title="All blog posts" 
                        className="p-2 md:p-4 rounded-md flex gap-3 hover:bg-gray-200"
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
                    className="p-2 md:p-4 rounded-md hover:bg-gray-200 flex gap-1"
                >
                    Github <ExternalLink width={16} />
                </a>
                </Menu.Item>
            </Menu.DropDown>
        </Menu>
    )
}