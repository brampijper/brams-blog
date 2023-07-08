import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
    <div className="bg-blue-100 rounded-lg flex flex-col-reverse sm:flex-row py-2 px-4 items-center sm:gap-4">
      
      <StaticImage
        className="rounded-md sm:rounded-full shrink-0"
        src="../../../content/assets/avatar.jpeg"
        alt={author.name}
        placeholder="blurred"
        layout="fixed"
        width={100}
        height={100}
      />
      
      <p className="shrink">
        Written by <strong>{author.name}</strong> {author.summary} {` `}
        Check my projects on {` `}
        <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">
          Github!
        </a>
      </p>

    </div>
  );
}

export default Bio
