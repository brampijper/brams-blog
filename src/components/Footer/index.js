import React from "react";

export default function Footer() {
    return (
        <footer className="mt-auto py-6">
            Built by 
            {` `}
            <a href="https://www.linkedin.com/in/bram-pijper-5389b0276/" target="_blank" rel="noopener noreferrer">
                Bram Pijper
            </a>
            {` `}
            with
            {` `}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
                Gatsby
            </a>
            {` `}
            in {new Date().getFullYear()} ©
      </footer>
    )
}

