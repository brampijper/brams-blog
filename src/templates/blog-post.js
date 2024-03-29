import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/Bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import UnsplashCredit from "../components/UnsplashCredit"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { title, date, description, featuredImage } = post.frontmatter
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const featuredImg = getImage(post.frontmatter.featuredImage.src)

  const unsplashName = featuredImage.unsplashName || null

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={title}
        description={description || post.excerpt}
      />
      <article
        className="prose lg:prose-lg xl:prose-xl my-8"
        itemScope
        itemType="http://schema.org/Article"
      >
          <header>
            <h1 itemProp="headline">{title}</h1>
            <p>{date}</p>
          </header>

          <section>
            <GatsbyImage 
              image={featuredImg} 
              alt={featuredImage.alt}
              fit={"cover"}
            />
            { unsplashName && (
                <UnsplashCredit 
                  unsplashName={featuredImage.unsplashName }
                />
              )
            }
          </section>
        
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />

        <footer>
          <Bio />
        </footer>

      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →  
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          alt
          unsplashName
          src {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                layout: CONSTRAINED
                height: 600
              )
            }
          }
        }
      }
    }
  }
`
