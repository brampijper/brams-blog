module.exports = {
  siteMetadata: {
    title: `Hey, I'm Bram 👋`,
    author: {
      name: `Bram Pijper`,
      summary: `who lives in The Netherlands, is in nature often and writes about anything that comes to mind.❤️`,
    },
    description: `A blog about life.`,
    siteUrl: `https://blog.brampijper.com/`,
    social: {
      github: `brampijper`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-23ZCHDK21V`,
        head: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hey, I'm Bram - welcome to my Blog`,
        short_name: `Bram's Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            // Serialize each Markdown node into an RSS feed item
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                // build the post URL
                const postUrl = `${site.siteMetadata.siteUrl}${node.fields.slug}`;

                // Get the featured image public URL, if it exists
                const imagePublicUrl = node.frontmatter.featuredImage?.src?.publicURL
                  ? `${site.siteMetadata.siteUrl}${node.frontmatter.featuredImage.src.publicURL}`
                  : null;

                  // Construct the RSS item
                return {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: postUrl,
                  guid: postUrl,
                  custom_elements: [{ "content:encoded": node.html }],
                  enclosure: imagePublicUrl ? { url: imagePublicUrl } : undefined,
                };
              });
            },
            query: `
            {
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1) {
                nodes {
                  excerpt
                  html
                  fields { 
                    slug 
                  }
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    featuredImage {
                      src {
                        publicURL
                      }
                      alt
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Bram's blog RSS Feed",
            match: "^/blog/",
          },
        ],
      }
    },
    `gatsby-plugin-offline` // Needs to below `gatsby-plugin-feed`
  ],
}
