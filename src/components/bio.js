/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
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
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        backgroundColor: `navajowhite`,
        borderRadius: `.4rem`,
        padding: rhythm(1),
      }}
    >
      <StaticImage
        src='../../content/assets/avatar.jpeg'
        alt={author.name}
        placeholder="blurred"
        layout="fixed"
        width={100}
        height={100}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
        }}
      />
      <p
        style={{
          margin: 0,
        }}
      >
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">
          You should see his projects on Github
        </a>
      </p>
    </div>
  );
}

export default Bio
