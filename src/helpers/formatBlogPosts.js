export default function formatBlogPosts({allMarkdownRemark}) {
    const { edges } = allMarkdownRemark;

    return edges.map( ({node}) => {
        const { frontmatter, fields, excerpt } = node;
        const { title, date, description, category, topics } = frontmatter
        
        return {
            title,
            slug: fields.slug,
            date,
            description,
            excerpt,
            category,
            topics
        }
    })
}