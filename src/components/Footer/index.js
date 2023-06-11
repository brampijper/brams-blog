import React from "react";
import "./style.css";

export default function Footer() {
    return (
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
                Gatsby
            </a>
      </footer>
    )
}