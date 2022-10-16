import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            // backgroundColor: 'gray'
        }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
                Gatsby
            </a>
      </footer>
    )
}