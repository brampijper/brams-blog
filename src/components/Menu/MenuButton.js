import React, { useContext } from 'react'
import { Menu } from 'react-feather';
import { MenuContext } from './Menu'

export default function MenuButton({children}) {
    const { toggleOpen } = useContext(MenuContext)

    return (
        <button onClick={toggleOpen} 
            className="flex items-center px-3 py-3 bg-gray-300 text-slate-900 rounded-md"
        >
            <Menu />

            {children}
        </button>
    )
}