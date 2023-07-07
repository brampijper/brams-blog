/**
 * @param {object} data - An object that has an allMarkdownRemark property.
 */

export default function formatBlogPosts({allMarkdownRemark}) {
    const { edges } = allMarkdownRemark

    return edges.map( ({node}) => { // Some variables are undefined (check later to see which ones need formatting.
        const { frontmatter, fields, excerpt } = node
        const { title, date, description, topics } = frontmatter
        const { slug } = fields

        const category = extractCategory(slug)
        
        return {
            title,
            slug,
            date,
            description,
            excerpt,
            topics,
            category
        }
    })

    function extractCategory(str) {
        return str.split('/')[1]
    }
}