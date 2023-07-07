import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./index.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          github
        }
      }
    }
  }
`)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        src="../../../content/assets/avatar.jpeg"
        alt={author.name}
        placeholder="blurred"
        layout="fixed"
        width={100}
        height={100}
      />
      <p className="bio-text">
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a 
          href={`https://github.com/${social.github}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          You should see his projects on Github
        </a>
      </p>
    </div>
  );
}

export default Bio
