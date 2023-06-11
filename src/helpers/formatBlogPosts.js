export default function formatBlogPosts({allMarkdownRemark}) {
    const { edges } = allMarkdownRemark

    return edges.map( ({node}) => {
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