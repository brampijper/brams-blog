import React, { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropDown({ children }) {
    const { open } = useContext(MenuContext)
    return (
        <>
            { open && (
                <div className="absolute -left-[50px] mt-1 bg-white border border-gray-100 rounded-md shadow divide-y divide-slate-200">
                    {children}
                </div>
            )}
        </>
    )
}