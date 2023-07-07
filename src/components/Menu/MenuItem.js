import React from "react"

export default function MenuItem({ children }) {
    return (
        <div className="text-gray-900 p-3 min-w-[100px] flex justify-center items-center select-none hover:bg-slate-100">
            {children}
        </div>
    )
}